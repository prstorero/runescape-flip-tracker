import { createSlice } from '@reduxjs/toolkit'

const getFlipsFromPersistence = () => {
  const flipsJsonString = window.localStorage.getItem("flips")

    if (flipsJsonString !== "undefined") {
      const flips = JSON.parse(window.localStorage.getItem("flips"))

      return flips || []
    }

    return [];
}

const updateStorage = (flips) => {
  window.localStorage.setItem("flips", JSON.stringify(flips))
}

const initialState = getFlipsFromPersistence()

export const flipsSlice = createSlice({
  name: 'flips',
  initialState,
  reducers: {
    add: (state, action) => {
      return state.concat(action.payload)
    },
    remove: (state, action) => {
      const updatedFlips = state.filter(flip => flip.id !== action.payload)
      updateStorage(updatedFlips)
      return updatedFlips
    },
    update: (state, action) => {
      const id = action.payload.flip.id

      const flipToUpdateIndex = state.findIndex((flip) => flip.id === id)

      if (flipToUpdateIndex !== -1) {
        const updatedFlips = [
          ...state.slice(0, flipToUpdateIndex),
          {...state[flipToUpdateIndex], ...action.payload.flip},
          ...state.slice(flipToUpdateIndex + 1)
        ]
        updateStorage(updatedFlips)
        return updatedFlips;
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove, update } = flipsSlice.actions

export default flipsSlice.reducer