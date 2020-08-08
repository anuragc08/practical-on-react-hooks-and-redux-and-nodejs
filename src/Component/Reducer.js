/* jshint esversion: 6 */
const initialState=0
const counter = (state =0, action) => {

    switch(action.type){
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1

        default:
        return initialState
    }
}

export default counter
