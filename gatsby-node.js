const fetch = require(`node-fetch`)

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const result = await fetch(`https://old-api.guilherr.me/project`)
  const resultData = await result.json()
  createNode({
    projects: resultData.data,
    id: "gbkel-projects",
    parent: null,
    children: [],
    internal: {
      type: "Gbkel",
      contentDigest: createContentDigest(resultData.data),
    },
  })
}