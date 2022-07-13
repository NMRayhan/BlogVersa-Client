import React from "react";

const Spinner = () => {
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center">
        <div className="w-16 h-16 border-b-2 mt-44 border-primary rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Spinner;