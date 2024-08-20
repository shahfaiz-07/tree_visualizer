import { combineReducers } from "@reduxjs/toolkit";
import treeReducer from './treeData/treeSlice'
const rootReducer = combineReducers({
    tree: treeReducer
})
export default rootReducer;