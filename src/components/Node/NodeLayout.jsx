import React from 'react'

const NodeLayout = ({data}) => {
  return (
    <div className="w-10 h-10 grid place-content-center shadow-md bg-white border-2 border-stone-400 rounded-full font-mono">
      <div className="flex">{data.label}</div>
    </div>
  );
}

export default NodeLayout