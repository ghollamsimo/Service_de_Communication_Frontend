import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import ChannelService from "../../services/ChannelService.ts";
import { initialState } from "../initialisation.ts";

export const getDmChannel = createAsyncThunk(
  "channel/getDmChannel",
  async (id: string, { rejectWithValue }) => {
    console.log(id);
    
    try {
      const response = await ChannelService.getDmChannel(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    clearCurrentChannel: (state) => {
      state.dataObj = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDmChannel.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDmChannel.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.dataObj = action.payload; 
        state.errorMessage = null;
      })
      .addCase(getDmChannel.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.errorMessage = action.payload || "Failed to fetch channel.";
      });
  },
});

export const { clearCurrentChannel } = channelSlice.actions;
export default channelSlice.reducer;
