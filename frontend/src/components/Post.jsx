/* eslint-disable react/prop-types */
const Post = ({ post }) => {
  return (
    <div className="mb-4">
      <div>
        <div>
          <h1 className="text-xl font-bold">{post.title}</h1>
          <h2>{post.body}</h2>
          <p className="mb-2">{new Date(post.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
