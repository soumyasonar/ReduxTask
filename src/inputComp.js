import React from 'react'
import { connect } from 'react-redux';
import {addTitle} from './action/inputAction'


class InputComp extends React.Component{
    constructor(){
        super()
        this.state = {
            inputValue: []       
        }
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name] : e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault() 
        const newData = {
            inputValue: this.state.inputValue
        }
        this.props.dispatch(addTitle(newData))
        this.setState ({
           inputValue: ''
        })
    }

    render() {
        return (
            <div>
                <br/>
                <center>
                <div>
                    <h1> Enter Text </h1> 
                    <form onSubmit={this.handleSubmit}> 
                        <div>
                            <label htmlFor='inputValue'>  </label> 
                            <input type= 'text' 
                                    name= 'inputValue'
                                    value= {this.state.inputValue} 
                                    onChange= {this.handleChange} 
                            />
                        </div>
                        <br/>          
                        <input type='submit' value='Submit'/>
                    </form>
                </div> 

                <h1> Result </h1>
                <div>
                {
                    this.props.inputValue.map((ele, i) =>{
                        return (
                            <div key={i}>
                                <h2> {ele.inputValue.split('').reverse()} </h2>
                            </div>
                        )
                    })
                }
                </div>
                </center>
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue : state.inputValue
    }
}


export default connect(mapStateToProps)(InputComp);
