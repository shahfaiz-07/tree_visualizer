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
    <div className="flex flex-col px-10 bg-gray-400 justify-around w-11/12 mx-auto md:w-full py-5 font-mono">
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
        <button className="px-3 py-2 bg-green-600 rounded-full font-semibold w-fit" onClick={handleGenerate}>
          Generate Tree
        </button>
      </div>
    </div>
  );
}

export default NodesInput