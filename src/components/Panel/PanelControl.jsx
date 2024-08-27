import React from "react";

const PanelControl = ({ jobs, root }) => {
  return (
    <div className="py-2 px-3 bg-gray-400 md:bg-gray-500 md:border-2 md:border-black font-mono">
      <div className="flex flex-wrap gap-2 justify-around">
        {jobs.map((job, index) => (
          <button
            key={index}
            className="bg-green-600 text-nowrap px-2 py-1 md:px-3 md:py-2 rounded-full font-semibold text-sm"
            onClick={() => (job.passArg ? job.handler(root) : job.handler())}
          >
            {job.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PanelControl;
