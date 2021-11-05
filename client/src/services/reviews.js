import api from './api-config';

export const newReview = async (reviewData) => {
  const resp = await api.post('/reviews', { review: reviewData });
  return resp.data;
};