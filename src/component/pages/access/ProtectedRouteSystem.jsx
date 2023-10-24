import React from "react";
import { Navigate } from "react-router-dom";
import {
  setCredentials,
  setError,
  setMessage,
} from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import fetchApi from "../../helpers/fetchApi";
import {
  devApiUrl,
  devNavUrl,
  UrlSystem,
} from "../../helpers/functions-general";
import ModalError from "../../partials/modals/ModalError";
import PageNotFound from "../../partials/PageNotFound";
import TableSpinner from "../../partials/spinners/TableSpinner";

const ProtectedRouteSystem = ({ children }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(true);
  const [isAuth, setIsAuth] = React.useState("");
  const hrisv3token = JSON.parse(localStorage.getItem("hrisv3token"));
  React.useEffect(() => {
    const fetchLogin = async () => {
      const login = await fetchApi(
        devApiUrl + "/v1/user-systems/token",
        {
          token: hrisv3token.token,
        },
        null,
        "post"
      );

      console.log(login);

      if (typeof login === "undefined" || !login.success) {
        setLoading(false);
        setIsAuth("456");
        dispatch(setError(true));
        dispatch(setMessage(login.error));
      } else {
        dispatch(setCredentials(login.data));
        setIsAuth(login.data.role_is_developer);
        setLoading(false);
        delete login.data.user_system_password;
        delete login.data.role_description;
        delete login.data.role_created;
        delete login.data.role_datetime;
      }
    };

    if (hrisv3token !== null) {
      fetchLogin();
    } else {
      setLoading(false);
      localStorage.removeItem("hrisv3token");
      setIsAuth("456");
    }
  }, [dispatch]);

  return loading ? (
    <TableSpinner />
  ) : isAuth === 1 ? (
    children
  ) : isAuth === "456" ? (
    <Navigate to={`${devNavUrl}/${UrlSystem}/login`} />
  ) : (
    <PageNotFound />
    // <p>API end point error / Page not found.</p>
  );
};

export default ProtectedRouteSystem;
