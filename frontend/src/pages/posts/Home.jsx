import { useContext, useEffect } from 'react';
import { getPosts } from '../../controller/postsController';
import { PostContext } from '../../contexts/postContext';
import Post from '../../components/Post';

const Home = () => {
  // Use Post Contexts
  const { posts, setPosts } = useContext(PostContext);
  // Grab all post on the page load
  useEffect(() => {
    setTimeout(async () => {
      const data = await getPosts();
      setPosts(data.posts);
    }, 500);
  }, []);
  console.log(posts);
  return (
    <>
      <section className="card">
        <h1 className="title">Users Posts</h1>

        {posts &&
          posts.map((post) => (
            <div key={post._id}>
              <Post post={post} />
            </div>
          ))}
      </section>
    </>
  );
};

export default Home;
