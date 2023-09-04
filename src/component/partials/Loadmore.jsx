import React from "react";
import SpinnerButton from "./spinners/SpinnerButton";

const Loadmore = () => {
  const [hasPages] = React.useState(true);
  return (
    <>
      {hasPages ? (
        <div className="flex justify-center my-5">
          <button type="button" className=" btn btn--accent mx-auto mt-5">
            Load more <SpinnerButton />
          </button>
        </div>
      ) : (
        <div className="loadmore mt-8 mb-0 p-1.5 text-center">End of list.</div>
      )}
    </>
  );
};

export default Loadmore;
