import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import inputReducer from '../reducer/inputReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        inputValue: inputReducer
    }), applyMiddleware(thunk))
    return store 
}

export default configureStore
