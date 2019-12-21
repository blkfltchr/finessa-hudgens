import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle';
import Menu from '../components/Menu';
import FlexContainer from '../components/FlexContainer';
import Button from '../components/Button';
import ProjectList from '../components/ProjectList'
import Project from '../components/Project'
import Helmet from 'react-helmet'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import liveHelp from '../images/live-help.png';

const Index = ({ data, pageContext }) => {
  const projects = data.allContentfulProject.edges
  // const featuredPost = projects[0].node
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1
  return (
    <Layout>
      <SEO />
      {!isFirstPage && (
        <Helmet>
          <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
        </Helmet>
      )}
      <PageTitle><Link>Michelle Bali</Link> - Creative Strategist</PageTitle>
      <Menu />
      <FlexContainer>
        <Button>Upload</Button>
        <Button>Search</Button>
        <img src={liveHelp} />
      </FlexContainer>
      <ProjectList>
        {projects.map((post) => {
          const { node } = post;
          return (
            <Project key={node.id} {...node} />
          )
        })}
      </ProjectList>
      {/* <Pagination context={pageContext} /> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulProject {
      edges {
        node {
          title
          id
          url
        }
      }
    }
  }
`

export default Index
