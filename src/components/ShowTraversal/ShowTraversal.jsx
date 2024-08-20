import React from 'react'
import ShowNode from './ShowNode'

const ShowTraversal = ({traversalOrder}) => {
  return (
    <div className="w-full gap-y-2 font-mono">
      {traversalOrder.length > 0 && (
        <div className="flex flex-wrap items-center gap-x-2 w-full">
          <h1 className="text-white font-bold text-xl text-nowrap">Traversal : </h1>
            {traversalOrder.map((node) => (
                <ShowNode value={{ label: node }} />
            ))}
        </div>
      )}
    </div>
  );
}

export default ShowTraversal