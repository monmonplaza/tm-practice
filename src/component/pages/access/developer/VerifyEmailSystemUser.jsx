import React from "react";
import { FaCheck } from "react-icons/fa";
import useQueryData from "../../../custom-hooks/useQueryData";
import { devNavUrl, getUrlParam } from "../../../helpers/functions-general";
import PageNotFound from "../../../partials/PageNotFound";
import FetchingSpinner from "../../../partials/spinners/FetchingSpinner";

const VerifyEmailSystemUser = () => {
  const key = getUrlParam().get("key");

  const { data: changeEmail, isLoading } = useQueryData(
    `/v1/user-system/verify-email/${key}`,
    "get", // method
    "change-email" // key
  );

  return (
    <>
      {changeEmail?.count === 0 || key === null || key === "" ? (
        <>
          {isLoading && (
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-white z-50">
              <FetchingSpinner />
            </div>
          )}
          <PageNotFound />
        </>
      ) : (
        <div className="flex justify-center items-center h-screen">
          {isLoading && (
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-white z-50">
              <FetchingSpinner />
            </div>
          )}
          <div className="max-w-[25rem] w-full text-center p-6">
            <FaCheck className="mx-auto text-6xl mb-5 fill-green-600" />
            <h1 className="text-2xl uppercase mb-2">All Set</h1>
            <p className="mb-6">
              Your email has been successfully changed! You can now login using
              your new email.
            </p>
            <a href={`${devNavUrl}/system/login`} className="btn-primary">
              Proceed to login
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default VerifyEmailSystemUser;
