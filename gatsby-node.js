const path = require("path")
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const Img = require(`gatsby-image`)

exports.createPages = async ({graphql,actions}) => {
    const {createPage}=actions

const result = await graphql(`
                  
query MyQuery {
    allWordpressWpOpinion {
      nodes {
        slug
        title
        content
        acf {
          short_description
          banner_image {
            source_url
          }
        }
      }
    }
  }
  

  
  
`)
if (result.errors) {
    throw new Error(result.errors)
}

const opinionData = result.data.allWordpressWpOpinion.nodes;
const SingleOpinionPage = path.resolve("./src/template/single-opinion.js") 


    opinionData.forEach((opinion) => { 
    var slug= "/opinion/"+opinion.slug;
    console.log("=================================================")
    console.log(slug)
    console.log("=================================================")
    createPage({
        path: slug,
        component: SingleOpinionPage,
        context: {
            data:opinion
        },
    })
    })
}
