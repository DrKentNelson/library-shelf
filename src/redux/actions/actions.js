export const addToCart = (book) => ({
    type: 'ADD_TO_CART',
    payload: book,
});

export const removeFromCart = (bookId) => ({
    type: 'REMOVE_FROM_CART',
    payload: bookId,
});