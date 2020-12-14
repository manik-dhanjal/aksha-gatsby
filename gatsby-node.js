const path = require("path")

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
// projects.forEach((node,i) => { 
//     var slug= node.categories[0].path.replace('/category','')+node.slug;
//     console.log("=================================================")
//     console.log(slug,i)
//     console.log("=================================================")
//     createPage({
//         path: slug,
//         component: projectpage,
//         context: {
//             project:node,
//             nextProject:projects[i<projects.length-1?(i+1):0],
//             prevProject:projects[i>0?(i-1):(projects.length-1)]
//         },
//     })
// })


}