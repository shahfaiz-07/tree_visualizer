# 🌳 Tree Visualizer

**Tree Visualizer** is an interactive web application that allows users to visualize and explore binary trees. Users can input a binary tree using level order traversal, and the tree is rendered dynamically. The application also displays various tree traversal methods such as level order, in-order, pre-order, and post-order, with each node being highlighted during the traversal.

## Features

- **Tree Rendering:**
  - Enter the level order traversal of a binary tree, and see it rendered dynamically using React Flow.
  
- **Traversal Visualizations:**
  - **Level Order Traversal:** Nodes are highlighted in the order they appear in each level of the tree.
  - **In-Order Traversal:** Nodes are highlighted in left subtree, root, right subtree order.
  - **Pre-Order Traversal:** Nodes are highlighted in root, left subtree, right subtree order.
  - **Post-Order Traversal:** Nodes are highlighted in left subtree, right subtree, root order.
  
- **Interactive Highlighting:**
  - Each node is highlighted as it is visited during the traversal, providing a clear visual representation of the traversal process.
  
- **Final Traversal Display:**
  - After completing the traversal, the final sequence of visited nodes is displayed for easy reference.

## Future Enhancements

- **Step-by-Step Traversal Controls:** 
  - Add buttons to step through each node manually.
  - Control the speed of traversal with a slider.
  
- **Traversal Animation:** 
  - Animate the connection between nodes during traversal.
  
- **Tree Manipulation:** 
  - Allow users to interactively add, remove, or edit nodes and see the effects on traversal.
  
- **Detailed Node Information:** 
  - Display additional data for each node during traversal.
  
- **Support for Different Tree Types:** 
  - Include visualizations for AVL trees, Red-Black trees, etc.
  
- **Comparison Feature:** 
  - Visualize and compare two different trees side by side.
  
- **Export and Share:** 
  - Export the tree and its traversal as images, GIFs, or PDFs.
  
- **Customization:** 
  - Allow users to customize the appearance of nodes and edges.
  
- **Undo/Redo Functionality:** 
  - Implement undo/redo options.

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/shahfaiz-07/tree_visualizer
   cd tree_visualizer
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Application:**

   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   - Navigate to `http://localhost:5173` in your browser.

## Usage

1. **Input Tree:**
   - Enter the level order traversal of your binary tree (e.g., `1 2 3 N 5 6 N` where `N` represents `null` or no child).

2. **View the Tree:**
   - The tree is dynamically rendered based on the input.

3. **Explore Traversals:**
   - Click on the traversal buttons to see nodes highlighted in the selected traversal order.

4. **Final Traversal:**
   - View the final sequence of nodes in the traversal.

## Contributing

Contributions are welcome! If you have any ideas or suggestions, please open an issue or submit a pull request.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## Contact

- **My Name:** [LinkedIn Profile](https://www.linkedin.com/in/s-faizaan-hussain-70b840248)
- **Project Link:** [GitHub Repository](https://github.com/shahfaiz-07/tree_visualizer)
- **Deployed Link:** 