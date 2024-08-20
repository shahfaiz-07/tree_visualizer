import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setTreeNodes } from '../../features/treeData/treeSlice';

const NodesInput = () => {
    const [nodes, setNodes] = useState("");
    const dispatch = useDispatch()
    const handleGenerate = () => {
        console.log(nodes.split(" "))
        // validate the nodes

        dispatch(setTreeNodes(nodes.split(" ")))
    }
  return (
    <div className="flex flex-col px-10 bg-gray-400 justify-around">
      <div className="flex flex-col gap-y-2 items-center">
        <label>
          <h1 className="text-white font-semibold">List of Nodes :</h1>
          <input
            type="text"
            className="outline-none px-3 py-2 rounded-md w-60 font-mono"
            value={nodes}
            onChange={(e) => setNodes(e.target.value)}
          />
        </label>
        <button className="px-3 py-2 bg-blue-600 rounded-full font-semibold w-fit" onClick={handleGenerate}>
          Generate Tree
        </button>
      </div>
    </div>
  );
}

export default NodesInput