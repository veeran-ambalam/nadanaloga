/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


// gatsby-node.js
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     node: { fs: 'empty' },
//   })
// }

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage, deletePage } = actions
//   // Check if the page is a localized 404
//   if (page.path.startsWith('/404')) {
//     page.layout = '404.index';
//   }
// }


exports.onCreateWebpackConfig = helper => {
  const { stage, actions, getConfig } = helper

  // if (stage === "build-html") {
  //   actions.setWebpackConfig({
  //     module: {
  //       rules: [
  //         {
  //           test: /@firebase/,
  //           use: loaders.null(),
  //         },
  //       ],
  //     },
  //   })
  // }

  if (stage === "develop" || stage === 'build-javascript') {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === "MiniCssExtractPlugin"
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    actions.replaceWebpackConfig(config)
  }
}