export const newReview = async (postData) => {
  const resp = await api.post(`/posts/${id}`, { post: postData });
  return resp.data;
};