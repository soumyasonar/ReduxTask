const inputValueInitialState = []

const inputReducer = (state = inputValueInitialState, action) => {
    switch(action.type) {
        case 'ADD_TITLE': {
            return [].concat(action.payload)
        }

        default: {
            return [].concat(state)
        }
    }
}

export default inputReducer
