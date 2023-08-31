import React from "react";
import SpinnerButton from "./spinners/SpinnerButton";
const Loadmore = () => {
  const [hasPages] = React.useState(true);
  return (
    <>
      {hasPages ? (
        <button
          type="button"
          className="btn btn--accent text-light mx-auto my-5"
        >
          Load more <SpinnerButton />
        </button>
      ) : (
        <div className="loadmore mt-8 mb-0 p-1.5 text-center">End of list.</div>
      )}
    </>
  );
};
export default Loadmore;
