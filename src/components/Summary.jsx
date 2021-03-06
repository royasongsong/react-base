import React , {Component} from "react";
// import store from "./store";
import { connect } from "react-redux";

// export default class Summary extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             // sum: this.props.sum
//             sum: this.getSum(store.getState())
//         }
//         this.getSum = this.getSum.bind(this);
//     }

//     // static getDerivedStateFromProps(nextProps, prevState) {
//     //     if (nextProps.sum !== prevState.sum) {
//     //         return {
//     //             sum: nextProps.sum
//     //         }
//     //     } else {
//     //         return null
//     //     }
//     // }

//     componentDidMount() {
//         store.subscribe(()=>{
//             this.setState({
//                 sum: this.getSum(store.getState())
//             })
//         })
//     }

//     getSum(defaultValue) {
//         let sum =0;
//         for (const key in defaultValue) {
//             if (defaultValue.hasOwnProperty(key)){
//                 sum += defaultValue[key];
//             }
//         }
//         return sum;
//     }

//     render() {
//         return <div style={{marginLeft: 30}}>
//             {this.state.sum}
//             {/* {this.getSum(store.getState())} */}
//         </div>
//     }
// }

const Summary = ({sum})=>{
    return <div style={{marginLeft: 30}}>
        {sum}
    </div>
}

const getSum = (defaultValue)=> {
    let sum =0;
    for (const key in defaultValue) {
        if (defaultValue.hasOwnProperty(key)){
            sum += defaultValue[key];
        }
    }
    return sum;
}

const mapStateToProps = (state, props)=>{
    return {
        sum: getSum(state)
    }
}

//可以不传
const mapDispatchToProps = ()=>{
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary)

