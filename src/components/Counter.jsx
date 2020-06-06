import React , {Component} from "react";
import store from "./store";

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            caption: this.props.caption,
            // num: this.props.value[this.props.caption],
            num: store.getState()[this.props.caption],
        }
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (nextProps.value[nextProps.caption] !== prevState.num) {
    //         return {
    //             num: nextProps.value[prevState.caption]
    //         }
    //     } else {
    //         return null
    //     }
    // }

    componentDidMount() {
        store.subscribe(()=>{
            this.setState({
                num: store.getState()[this.props.caption]
            })
        })
    }

    //用redux
    handleClick(type, caption) {
        store.dispatch({type, caption})
    }

    render() {
        // return( 
        // <div style={{marginBottom: 10}}>
        //     <button style={{marginRight: 10, width: 30, height: 30}} onClick={this.props.handleClick.bind(this, "increase", this.state.caption)}>+</button>
        //     <button style={{marginRight: 10, width: 30, height: 30}} onClick={this.props.handleClick.bind(this, "decrease", this.state.caption)}>-</button>
        //     <span>{this.state.num}</span>
        // </div>)
        return( 
            <div style={{marginBottom: 10}}>
                <button style={{marginRight: 10, width: 30, height: 30}} onClick={this.handleClick.bind(this, "increase", this.state.caption)}>+</button>
                <button style={{marginRight: 10, width: 30, height: 30}} onClick={this.handleClick.bind(this, "decrease", this.state.caption)}>-</button>
                <span>{this.state.num}</span>
            </div>)
    }
}
