const { createStore } = require('redux')
//  1. Store => Tempat Simpan Data
//  2. Reducer => Function , logic buat mengubah data
//  3. Action => object, Perintah untuk mengubah data
const reducer = (state = 0, action) => {
    switch (action.type){
        case 'INCREMENT' :
            return state + 1
            break;
        case 'DECREMENT' :
            return state - 1
            break;
        default:
            return state
    }
}

const store = createStore(reducer)
const increment = { type: 'INCREMENT'}
const decrement = { type: 'DECREMENT'}

store.dispatch(decrement)

const state = store.getState()

console.log(`ini state-nya = ${state}`)