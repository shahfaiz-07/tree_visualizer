import React from 'react'
import NodeLayout from '../Node/NodeLayout'

const ShowNode = ({value = ""}) => {
  return (
    value && (
        <NodeLayout data={value}/>
    )
  )
}

export default ShowNode