const light = {
  colours: {
    primary: "black",
    accent: "#eee",
    background: "white",
  },
}

const dark = {
  ...light,
  colours: {
    primary: "white",
    accent: "#333",
    background: "#111",
  },
}

module.exports = {
  light,
  dark,
}
