import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
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
        getProducts(state){
            return state.products
        },
        getCart(state){
            return state.cart
        },
        getPrimaryButtonClasses(state){
            return state.buttonClasses.primary
        },
        getDangerButtonClasses(state){
            return state.buttonClasses.danger
        },
    },
    mutations: {
        addItemToCart(state, payload) {
            let item = state.products.find(item => item.id === +payload)
            state.cart.push(item)
            state.products.splice(state.products.indexOf(item), 1)
        },
        removeItemFromCart(state, payload) {
            let item = store.state.cart.find(item => item.id === +payload)
            state.products.push(item)
            state.cart.splice(state.cart.indexOf(item), 1)
        }
    },
    actions: {
        addItemToCart({ commit }, payload){
            commit('addItemToCart', payload)

            
        },
        removeItemFromCart({ commit }, payload){
            commit('removeItemFromCart', payload)
        },
    }
})

export default store

