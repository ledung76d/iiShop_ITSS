export const formatCountReview = (quantity) => {
  if (quantity >= 1000) {
    return (quantity / 1000).toFixed(1) + 'k';
  } else {
    return quantity.toString();
  }
}