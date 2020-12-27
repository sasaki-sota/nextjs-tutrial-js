import Layout from "../../components/layout";
import {getAllPostIds, getPostData} from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}


const Post = ({postData}) => {
  return (
      <Layout>
        {postData.title} <br/>
        {postData.id} <br/>
        {postData.date} <br/>
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
      </Layout>
  )
};

export default Post;
