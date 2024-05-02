/* eslint-disable react/prop-types */
const Post = ({ post }) => {
  return (
    <div>
      <div>
        <div>
          <h2>{post.title}</h2>
          <p>{post.createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
