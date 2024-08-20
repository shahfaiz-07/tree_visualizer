import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";

function HighlightedNode({ data }) {
  return (
    <div className="px-2 py-2 w-10 h-10 grid place-content-center shadow-md bg-green-500 border-2 border-stone-400 rounded-full font-mono">
      <div className="flex">{data.label}</div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="w-1 h-1 rounded-full !bg-[#FF0072] border-none"
      />
      <Handle
        type="target"
        position={Position.Top}
        className="w-1 h-1 rounded-full !bg-[#FF0072] border-none"
      />
    </div>
  );
}

export default memo(HighlightedNode);
