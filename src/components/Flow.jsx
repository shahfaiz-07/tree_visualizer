import {
  ReactFlow,
  Controls,
  Background,
  ReactFlowProvider,
  useReactFlow,
  Panel,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import CustomNode from "./Node/CustomNode";
import HighlightedNode from "./Node/HighlightedNode";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { buildTreeFromLevelOrder } from "../utils/treeRepresentation";
import PanelControl from "./Panel/PanelControl";
import ShowNode from "./ShowTraversal/ShowNode";
import ShowTraversal from "./ShowTraversal/ShowTraversal";

const nodeTypes = {
  custom: CustomNode,
  highlight: HighlightedNode,
};

function Flow() {
  const { treeNodes } = useSelector((state) => state.tree);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [highlightedNode, setHighlightedNode] = useState(null)
  const [treeRep, setTreeRep] = useState(null);
  const [traversalOrder, setTraversalOrder] = useState([]);
  const { fitView } = useReactFlow();

  const fillGaps = () => {
    let noGapNodes = [[treeNodes[0]]];
    let levelIndex = 1,
      index = 1;
    while (index < treeNodes.length) {
      let maxNodes = Math.pow(2, levelIndex);
      let ithNodes = new Array(maxNodes);
      for (let c = 0; c < maxNodes; c++) {
        let parentIndex = Math.floor(c / 2);
        if (
          noGapNodes[levelIndex - 1][parentIndex] === "N" ||
          index >= treeNodes.length
        ) {
          ithNodes[c] = "N";
        } else {
          ithNodes[c] = treeNodes[index++];
        }
      }
      noGapNodes.push(ithNodes);
      levelIndex++;
    }
    return noGapNodes;
  };
  const xCoordinates = (noGapNodes) => {
    let level = noGapNodes.length - 1;
    const xArray = [];
    const lastNodes = Math.pow(2, level--);
    let multiPlier = -lastNodes / 2 + 0.5;
    const lastLevel = [];
    for (let i = 0; i < lastNodes; i++) {
      lastLevel.push(multiPlier * 75);
      multiPlier++;
    }
    xArray.push(lastLevel);
    while (level > 0) {
      const maxNodes = Math.pow(2, level);
      const currentLevel = [];
      for (let j = 0; j < maxNodes; j++) {
        const leftChild = 2 * j,
          rightChild = 2 * j + 1;
        const xcoord = (xArray[0][leftChild] + xArray[0][rightChild]) / 2;
        currentLevel.push(xcoord);
      }
      xArray.unshift(currentLevel);
      level--;
    }
    return xArray;
  };
  const parseLevelOrder = () => {
    const nodes = [];
    const edges = [];

    if (treeNodes.length === 0 || treeNodes[0] === "N") return { nodes, edges };

    // Initialize the root node
    const root = {
      id: treeNodes[0],
      data: { label: treeNodes[0] },
      type: "custom",
      position: { x: 0, y: 0 },
    };
    nodes.push(root);

    // figure out the x coordinates for the nodes
    const noGapNodes = fillGaps();
    // console.log(noGapNodes)
    const xCoords = xCoordinates(noGapNodes);
    for (let i = 1; i < noGapNodes.length; i++) {
      const maxNodes = Math.pow(2, i);
      for (let j = 0; j < maxNodes; j++) {
        if (noGapNodes[i][j] === "N") continue;
        const id = noGapNodes[i][j];
        const type = "custom";
        const position = { x: xCoords[i - 1][j], y: i * 75 };
        const data = { label: noGapNodes[i][j] };
        nodes.push({
          id,
          type,
          position,
          data,
        });
        const parentIndex = Math.floor(j / 2);
        const parent = noGapNodes[i - 1][parentIndex];
        const edgeId = `${parent}-${id}`;
        const source = `${parent}`,
          target = `${id}`;
        edges.push({
          id: edgeId,
          source,
          target,
          // type: "straight",
          style: {
            strokeWidth: 2,
            stroke: "#FF0072",
          },
        });
      }
    }
    return { nodes, edges };
  };
  function levelOrderTraversal(root) {
    resetNodes();
    if (root === null) return;

    const queue = [root];

    function traverse() {
      if (queue.length === 0) return;

      const currentNode = queue.shift();
      highlightNode(currentNode.value);
      console.log(currentNode.value); // Visit the node

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }

      // Recursively call traverse after 1 second
      setTimeout(traverse, 1000);
    }

    traverse();
  }

  function inOrderTraversal(root) {
    resetNodes();
    const stack = [];
    let currentNode = root;

    function processNextNode() {
      while (currentNode || stack.length > 0) {
        // Reach the leftmost node of the current node
        while (currentNode) {
          stack.push(currentNode);
          currentNode = currentNode.left;
        }

        // Current node must be null at this point
        currentNode = stack.pop();

        // Highlight the current node
        highlightNode(currentNode.value);
        console.log(currentNode.value);

        // Move to the right node
        currentNode = currentNode.right;

        // Set the timeout to process the next node after 1 second
        setTimeout(processNextNode, 1000);
        return;
      }
    }

    processNextNode();
  }

  function preOrderTraversal(root) {
    resetNodes();
    const stack = [];
    let currentNode = root;

    function processNextNode() {
      if (currentNode || stack.length > 0) {
        if (currentNode) {
          highlightNode(currentNode.value);
          console.log(currentNode.value);

          if (currentNode.right) stack.push(currentNode.right);
          if (currentNode.left) stack.push(currentNode.left);
        }

        currentNode = stack.pop();

        setTimeout(processNextNode, 1000);
      }
    }

    processNextNode();
  }

  function postOrderTraversal(root) {
    resetNodes()
    const stack = [];
    const visited = new Set();
    let currentNode = root;

    function processNextNode() {
      while (currentNode || stack.length > 0) {
        while (currentNode) {
          stack.push(currentNode);
          currentNode = currentNode.left;
        }

        currentNode = stack[stack.length - 1];

        if (currentNode.right && !visited.has(currentNode.right)) {
          currentNode = currentNode.right;
        } else {
          stack.pop();
          highlightNode(currentNode.value);
          console.log(currentNode.value);
          visited.add(currentNode);
          currentNode = null;

          // Set the timeout to process the next node after 1 second
          setTimeout(processNextNode, 1000);
          return;
        }
      }
    }

    processNextNode();
  }

  const resetNodes = () => {
    setNodes((prev) => prev.map((node) => ({ ...node, type: "custom" })));
    setHighlightedNode(null)
    setTraversalOrder([])
  };

  useEffect(() => {
    const { nodes, edges } = parseLevelOrder();
    setNodes(nodes);
    setEdges(edges);
    setTimeout(() => {
      fitView();
    }, [100]);
    const treeRoot = buildTreeFromLevelOrder(treeNodes);
    setTreeRep(treeRoot);
  }, [treeNodes]);

  const highlightNode = (id) => {
    setHighlightedNode({label: id})
    setTraversalOrder((prev) => [...prev, id]);
    setNodes((prev) =>
      prev.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            type: "highlight",
          };
        } else {
          return {
            ...node,
            type: "custom",
          };
        }
      })
    );
  };
  return (
    <div className="w-11/12 mx-auto h-[90vh]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        colorMode="dark"
        fitView
      >
        <Background />
        <Controls />
        <Panel position="bottom-center">
          <PanelControl
            jobs={[
              { handler: preOrderTraversal, text: "Pre Order", passArg: true },
              {
                handler: postOrderTraversal,
                text: "Post Order",
                passArg: true,
              },
              { handler: inOrderTraversal, text: "In Order", passArg: true },
              {
                handler: levelOrderTraversal,
                text: "Level Order",
                passArg: true,
              },
              { handler: resetNodes, text: "Reset", passArg: false },
            ]}
            root={treeRep}
          />
        </Panel>
        <Panel position="top-left">
          <ShowTraversal traversalOrder={traversalOrder} />
        </Panel>
        <Panel position="bottom-right">
          <ShowNode value={highlightedNode} />
        </Panel>
      </ReactFlow>
    </div>
  );
}

function FlowWithProvider() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}

export default FlowWithProvider;
