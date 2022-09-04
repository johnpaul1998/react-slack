import { createSlice } from "@reduxjs/toolkit";

export const appSlices = createSlice({
    name: 'app',
    initialState: { roomId: null },
    reducers: {
        enterRoom: (state, action) => {
            state.roomId = action.payload.roomId
        }
    }
})

export const { enterRoom } = appSlices.actions;

export const selectRoomId = state => state.app.roomId;

export default appSlices.reducer;