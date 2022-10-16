import types from "../types"

let init_state = {
   ADD:'',
   DELETE:''
}

export default function (state = init_state, action) {
    switch (action.type) {
        case types.ADD: {
           let data = action.payload
           console.log("Incremnet reducer call",data)
            return { ...state, ADD: data }
        }
        case types.DELETE: {
            let data = action.payload
            return { ...state, DELETE: data - 1 }
        }
        
        default:
            return {...state}
    }
}