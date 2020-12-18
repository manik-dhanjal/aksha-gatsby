const path = require("path")
const Img = require(`gatsby-image`)

exports.createPages = async ({graphql,actions}) => {
    const {createPage}=actions

const result = await graphql(`
                  
query MyQuery {
  allWordpressWpOpinion(sort: {fields: acf___publishing_date, order: DESC}) {
      nodes {
        slug
        title
        content
        acf {
          short_description
          banner_image {
            source_url
            localFile {
              childImageSharp {
                    fluid(maxWidth: 500) {
                    src
                  }
              }
            }
          }
          publishing_date
          publisher_name
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
