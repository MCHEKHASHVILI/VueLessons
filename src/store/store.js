import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            temp_product: null,
            products: [
                { id: 1, name: 'Product 1', price: 100 },
                { id: 2, name: 'Product 2', price: 200 },
                { id: 3, name: 'Product 3', price: 300 },
                { id: 4, name: 'Product 4', price: 400 },
            ],
            cart: [],
            buttonClasses: {
                primary: 'inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out',
                danger: 'inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
            }
        }
    },
    getters: {
        getProducts(state) {
            return state.products
        },
        getCart(state) {
            return state.cart
        },
        getPrimaryButtonClasses(state) {
            return state.buttonClasses.primary
        },
        getDangerButtonClasses(state) {
            return state.buttonClasses.danger
        },
    },
    mutations: {
        findItemInProductsById(state, payload){
            state.temp_product = state.products.find(item => item.id === +payload)
        },
        findItemInCartById(state, payload){
            state.temp_product = state.cart.find(item => item.id === +payload)
        },
        addItemToProducts(state){
            state.products.push(state.temp_product)
        },
        addItemToCart(state) {
            state.cart.push(state.temp_product)
        },
        removeItemFromProducts(state){
            state.products.splice(state.products.indexOf(state.temp_product), 1)
        },
        removeItemFromCart(state) {
            state.cart.splice(state.cart.indexOf(state.temp_product), 1)
        },
        resetTempProduct(state){
            state.temp_product = null
        },
    },
    actions: {
        ADD_ITEM_TO_CART({ commit }, payload) {
            commit('findItemInProductsById', payload)
            commit('addItemToCart')
            commit('removeItemFromProducts')
            commit('resetTempProduct')
        },
        REMOVE_ITEM_FROM_CART({ commit }, payload) {
            commit('findItemInCartById', payload)
            commit('addItemToProducts')
            commit('removeItemFromCart')
            commit('resetTempProduct')
        },
    }
})

export default store

