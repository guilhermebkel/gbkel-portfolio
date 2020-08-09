const axios = require("axios")
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.sourceNodes = async ({
  cache,
  createContentDigest,
  store,
  actions: { createNode },
  createNodeId,
}) => {
  const response = await axios.get(`${process.env.GATSBY_API_URL}/projects`)

  const projects = []

  const projectsMap = {}

  response.data.map(project => {
    projectsMap[project.id] = project
  })

  const projectMockupNodes = await Promise.all(
    response.data.map(async project => {
      const mockupNode = await createRemoteFileNode({
        url: project.mockup,
        store,
        cache,
        createNode,
        createNodeId,
      })

      return { node: mockupNode, project_id: project.id }
    })
  )

  projectMockupNodes.map(async mockup => {
    projectsMap[mockup.project_id].mockup___NODE = mockup.node.id
    projects.push(projectsMap[mockup.project_id])
  })

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
