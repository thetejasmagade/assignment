import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            data: []
        }
    },
    mutations: {
        pushData(state, userdata) {
            state.data.push(userdata)
        }
    },
})

export default store;