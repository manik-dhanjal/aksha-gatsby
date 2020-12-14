import React from 'react'
import Layout from '../components/layout'
import parse from 'html-react-parser'

const SingleOpinion = ({pageContext}) => {
    const {title,content,acf} = pageContext.data
    return (
        <Layout>
            <div className='container'>
                <img src={acf.banner_image.source_url} alt={title}/>
                <h2>{title}</h2>
                <p>{parse(acf.short_description)}</p>
                <div>{parse(content)}</div>
            </div>
        </Layout>
    )
}

export default SingleOpinion
