import React from "react"
import { Helmet } from 'react-helmet'
import get from 'lodash/get'

import JSONData from "../../content/My-JSON-Content.json"
import Layout from '../components/layout'

class JSONbuildtime extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
          <div style={{ maxWidth: `960px`, margin: `1.45rem`}}>
          <h1 style={{ color: `maroon`}}>{JSONData.title}</h1>
          <ul>
            {JSONData.content.map((data, index) => {
              return <li key={`content_item_${index}`}>{data.item}</li>
            })}
          </ul>
        </div>
      </div>
    </Layout>
    )
  }
}

export default JSONbuildtime