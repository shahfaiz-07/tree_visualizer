import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";

function CustomNode({ data }) {
  return (
    <div className="w-10 h-10 grid place-content-center shadow-md bg-white border-2 border-stone-400 rounded-full font-mono">
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

export default memo(CustomNode);
