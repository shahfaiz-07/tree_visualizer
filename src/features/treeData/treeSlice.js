import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    treeNodes : []
}

const treeSlice = createSlice({
    name: "tree",
    initialState,
    reducers: {
        setTreeNodes: (state, action) => {
            state.treeNodes = action.payload
        }
    }
})

export const { setTreeNodes } = treeSlice.actions;

export default treeSlice.reducer;