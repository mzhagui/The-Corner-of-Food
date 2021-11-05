import api from './api-config';

export const newReview = async (reviewData) => {
  const resp = await api.post('/reviews', { review: reviewData });
  return resp.data;
};

export const deleteReviews = async (id) => {
  const resp = await api.delete(`/reviews/${id}`);
  return resp;
};