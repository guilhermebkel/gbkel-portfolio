const fetch = require(`node-fetch`)
const axios = require("axios")

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const response = await axios.get("https://api.guilherr.me/projects")
  const projects = response.data

  createNode({
    projects,
    id: "gbkel-projects",
    parent: null,
    children: [],
    internal: {
      type: "Gbkel",
      contentDigest: createContentDigest(projects),
    },
  })
}