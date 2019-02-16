import React , {Component}  from 'react'
import CounterController from '../../components/CounterController/CounterController';
import {connect} from 'react-redux';
class Counter extends Component{

render(){
    return(
        <div>
         <h1>{this.props.counter}</h1>   
        <CounterController clicked={this.props.onIncrementCounter} actionType={this.props.actionTypes[0]}/>
        <CounterController clicked={this.props.onDecrementCounter} actionType={this.props.actionTypes[1]}/>
        </div>
    );
}

}
const mapStateToProps = state =>{
    debugger;
    return{
        counter: state.count,
        actionTypes: state.actionTypes
    };
};

const mapDispatchToProps = dispatch =>{
    return {
        onIncrementCounter: ()=> dispatch({type:'INCREMENT'}),
        onDecrementCounter: ()=> dispatch({type:'DECREMENT'})
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);