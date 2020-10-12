const { createStore } = require('redux')
//  1. Store => Tempat Simpan Data
//  2. Reducer => Function , logic buat mengubah data
//  3. Action => object, Perintah untuk mengubah data
const reducer = (state = 0, action) => {
    if(action.type == 'INCREMENT'){
        return state + 1
    }else{
        return state
    }
    return state
}

const store = createStore(reducer)

//Dispatch Action
store.dispatch({
    type : 'INCREMENT'
})

const state = store.getState()

console.log(`ini state-nya = ${state}`)