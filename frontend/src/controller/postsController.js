/*****************************Get all post*****************************/

const getPosts = async () => {
  const res = await fetch('/posts');
  const data = res.json();

  if (!res.ok) {
    throw Error(data.error);
  }
  return data;
};
export { getPosts };
