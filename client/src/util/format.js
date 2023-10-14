export const formatPrice = (price) => {
    return price.toLocaleString('en-US', { style: 'decimal' });
}