import { useState } from 'react'
import Flow from './components/Flow'
import NodesInput from './components/NodesInput/NodesInput';

function App() {

  return (
    <>
        <h1 className="text-blue-700 font-bold text-3xl py-3 px-5 border-2 rounded-full border-blue-700 mx-auto text-center w-fit my-5">
          🌲 Tree Visualiser
        </h1>
        <div className="flex w-11/12 mx-auto mb-10">
          <NodesInput />
          <Flow />
        </div>
    </>
  );
}

export default App
