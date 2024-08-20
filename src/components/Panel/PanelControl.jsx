import React from "react";

const PanelControl = ({ jobs, root }) => {
  return (
    <div className="flex gap-3 font-mono">
      {jobs.map((job, index) => (
        <button key={index}
          className="bg-white text-nowrap px-3 py-2 rounded-full font-semibold"
          onClick={() => (job.passArg) ? job.handler(root) : job.handler()}
        >
          {job.text}
        </button>
      ))}
    </div>
  );
};

export default PanelControl;
