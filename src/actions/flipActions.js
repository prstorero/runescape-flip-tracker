module.exports = {
  add: (flip) => {
    return {
      type: "ADD",
      flip
    }
  },

  delete: (id) => {
    return {
      type: "DELETE",
      id
    }
  }
}