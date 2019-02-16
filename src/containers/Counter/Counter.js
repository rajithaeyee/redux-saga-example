import React , {Component}  from 'react'
import CounterController from '../../components/CounterController/CounterController';
import {connect} from 'react-redux';
class Counter extends Component{
state ={
    count :0
}

counterHandler = (action)=>{
    switch(action){
        case 'increment':
        let inc = this.state.count;
        inc++;
        this.setState({
            count: inc
        });
        break;
        case 'decrement':
        let dec = this.state.count;
        dec--;
        this.setState({
            count: dec
        });
    }
}

render(){
    return(
        <div>
         <h1>{this.props.counter}</h1>   
        <CounterController count={this.counterHandler} actionType="increment"/>
        <CounterController count={this.counterHandler} actionType="decrement"/>
        </div>
    );
}

}
const mapStatetoProps = state =>{
    return{
        counter: state.count
    }
}
export default connect(mapStatetoProps)(Counter);