import React from "react";
import { Navigate } from "react-router-dom";
import { setCredentials } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import { devNavUrl } from "../../../helpers/functions-general";
import { queryData } from "../../../helpers/queryData.jsx";
import FetchingSpinner from "../../../partials/spinners/FetchingSpinner";

const ProtectedRouteSystem = ({ children }) => {
  const { dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(true);
  const [isAuth, setIsAuth] = React.useState("");
  const tmv1token = JSON.parse(localStorage.getItem("tmv1token"));

  React.useEffect(() => {
    const fetchLogin = async () => {
      const login = await queryData(`/v1/user-system/token`, "post", {
        token: tmv1token.token,
      });

      console.log(login);

      if (typeof login === "undefined" || !login.success) {
        setLoading(false);
        setIsAuth("456");
      } else {
        dispatch(setCredentials(login.data));
        setIsAuth("123");
        setLoading(false);
      }
      delete login.data.user_system_password;
      delete login.data.role_description;
      delete login.data.role_created;
      delete login.data.role_datetime;
      delete login.data.access_created;
      delete login.data.access_datetime;
    };

    if (tmv1token !== null) {
      fetchLogin();
    } else {
      setLoading(false);
      localStorage.removeItem("tmv1token");
      setIsAuth("456");
    }
  }, [dispatch]);

  return loading ? (
    <FetchingSpinner />
  ) : isAuth === "123" ? (
    children
  ) : isAuth === "456" ? (
    <Navigate to={`${devNavUrl}/system/login`} />
  ) : (
    <p>API end point error / Page not found.</p>
  );
};

export default ProtectedRouteSystem;
