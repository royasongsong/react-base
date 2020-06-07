import React from "react";
// import store from "./store";
import { connect } from "react-redux";

// export default class Counter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             caption: this.props.caption,
//             // num: this.props.value[this.props.caption],
//             num: store.getState()[this.props.caption],
//         }
//     }

//     // static getDerivedStateFromProps(nextProps, prevState) {
//     //     if (nextProps.value[nextProps.caption] !== prevState.num) {
//     //         return {
//     //             num: nextProps.value[prevState.caption]
//     //         }
//     //     } else {
//     //         return null
//     //     }
//     // }

//     componentDidMount() {
//         store.subscribe(()=>{
//             this.setState({
//                 num: store.getState()[this.props.caption]
//             })
//         })
//     }

//     //用redux
//     handleClick(type, caption) {
//         store.dispatch({type, caption})
//     }

//     render() {
//         // return( 
//         // <div style={{marginBottom: 10}}>
//         //     <button style={{marginRight: 10, width: 30, height: 30}} onClick={this.props.handleClick.bind(this, "increase", this.state.caption)}>+</button>
//         //     <button style={{marginRight: 10, width: 30, height: 30}} onClick={this.props.handleClick.bind(this, "decrease", this.state.caption)}>-</button>
//         //     <span>{this.state.num}</span>
//         // </div>)
//         return( 
//             <div style={{marginBottom: 10}}>
//                 <button style={{marginRight: 10, width: 30, height: 30}} onClick={this.handleClick.bind(this, "increase", this.state.caption)}>+</button>
//                 <button style={{marginRight: 10, width: 30, height: 30}} onClick={this.handleClick.bind(this, "decrease", this.state.caption)}>-</button>
//                 <span>{this.state.num}</span>
//             </div>)
//     }
// }

/*1.UI组件的传参包含了prop, mapDispatchToProps中的dispatch，mapStateToProps中的state
**2.onClick如果传参需要bind，最开始写的是对的，但是当时handleClick没有传对
**3.mapStateToProps和mapDispatchToProps中不必一定写ownProps
*/
const Counter = ({caption,handleClick,num})=>{
    return( 
        <div style={{marginBottom: 10}}>
            <button style={{marginRight: 10, width: 30, height: 30}} onClick={handleClick.bind(this,"increase", caption)}>+</button>
            <button style={{marginRight: 10, width: 30, height: 30}} onClick={handleClick.bind(this,"decrease", caption)}>-</button>
            <span>{caption}----{num}</span>
        </div>)
}

const mapStateToProps = (state, props)=>{
    return {
        num: state[props.caption]
    }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
    return {
        handleClick: (type, caption)=>{
            dispatch({type, caption})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
