import api from './api-config';

export const newReview = async (postData) => {
  const resp = await api.post('/reviews', { post: postData });
  return resp.data;
};