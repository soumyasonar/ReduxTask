import react from 'react'
import { connect } from 'react-redux';


function InputComp(props){
    return(
        <div>
           <center>
            <h1>Enter Text</h1>
            <input value = {props.inputValue} onChange = {props.inputChanged} />
            <h1>Result</h1>
            <p>{props.inputValue}</p></center>
        </div>

    );
}

const mapStateToProps = (state) => {
    return {
        inputValue : state.inputValue
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        inputChanged:(e) => {
            console.log('changed',e.target.value)
            const action = {type : 'INPUT_CHANGE' , 'text' :e.target.value}
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InputComp);