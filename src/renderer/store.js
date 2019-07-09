
let store = {
    state: {
        currentPage: 1,





        cart: [],
        cartCount: 0,

    },
    //
    getters: {

    },
    //
    mutations: {
        upCurrentPage(state, numb) {state.currentPage = numb},

        addToCart(state, item) {
            console.log(item.title)
        },

    },
    //
    actions: {

    }
};

export default store;
