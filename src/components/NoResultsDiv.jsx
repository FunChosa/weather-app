import React from "react";

const NoResultsDiv = () => {
  return (
    <div className="no-results">
      <img src="src/icons/no-result.svg" alt="No data found" />
      <h3 className="title">Something went wrong</h3>
      <p className="message">
        We&apos;re unable to retrieve the weather details. Please ensure
        you&apos;ve entered a valid city name or try again later.
      </p>
    </div>
  );
};

export default NoResultsDiv;
