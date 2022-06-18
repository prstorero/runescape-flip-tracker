const initState = {
  flips: []
}

const rootReducer = (state = initState, action) => {
  if (action.type === "ADD") {
    const updatedFlips = {
      ...state,
      flips: [...state.flips, {
        ...action.flip
      }]
    }
    updateStorage(updatedFlips)
    return updatedFlips
  }

  if (action.type === "DELETE") {
    let updatedFlips = state.flips.filter(flip => flip.id !== action.id)

    updatedFlips = {
      ...state,
      flips: [...updatedFlips]
    }

    updateStorage(updatedFlips)

    return updatedFlips
  }

  if (action.type === "UPDATE") {
    const flipToUpdateIndex = state.flips.findIndex((flip) => flip.id === action.id && action.id != null)

    if (flipToUpdateIndex != null) {
      let updatedFlips = state.flips.map((flip, index) => {
        if (index === flipToUpdateIndex) {
          return action.flip
        }

        return flip
      })
      updatedFlips = {
        ...state,
        flips: [...updatedFlips]
      }
      updateStorage(updatedFlips)

      return updatedFlips
    }

    return state
  }

  return state
}

const updateStorage = (flips) => {
  localStorage.setItem("flips", JSON.stringify(flips))
}
 
export default rootReducer