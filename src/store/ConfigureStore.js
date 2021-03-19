import {createStore} from 'redux';

const initialState = {
    inputValue: ''
};

//Reducer
const reducer = (state = initialState,action) => {
    console.log('reducer',action);
    switch(action.type){
        case 'INPUT_CHANGE' :
            return Object.assign({},state,{inputValue:action.text});
            default:
                return state;
    }
}

const ConfigureStore = createStore(reducer);


export default ConfigureStore;
