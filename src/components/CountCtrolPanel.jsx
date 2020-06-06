import React , {Component, Fragment} from "react";
import Counter from "./Counter";
import Summary from "./Summary";

const defaultValue = {
    "one": 0,
    "second": 10,
    "third": 20,
}
export default class CountCtrolPanel extends Component {
    constructor() {
        super();
        this.state = {
            valueObj: defaultValue,
            sum: 0
        }
        this.getValue = this.getValue.bind(this);
    }

    componentDidMount() {
        let {newValueObj, sum} = this.getValue(defaultValue);
        this.setState({
            valueObj: newValueObj,
            sum
        })
    }

    getValue(defaultValue) {
        let newValueObj = {};
        let sum =0;
        for (const key in defaultValue) {
            if (defaultValue.hasOwnProperty(key)){
                newValueObj[key] = defaultValue[key];
                sum += defaultValue[key];
            }
        }
        return {newValueObj, sum};
    }

    handleClick(type, caption) {
        let valueObj = this.state.valueObj;
        if (type === "increase") {
            valueObj[caption] ++;
        } else {
            valueObj[caption] --;
        }
        let {newValueObj, sum} = this.getValue(valueObj);
        this.setState({
            valueObj: newValueObj,
            sum
        })
    }

    render() {
        return <Fragment>
            <Counter caption="one" value={this.state.valueObj} handleClick={this.handleClick.bind(this)}></Counter>
            <Counter caption="second" value={this.state.valueObj} handleClick={this.handleClick.bind(this)}></Counter>
            <Counter caption="third" value={this.state.valueObj} handleClick={this.handleClick.bind(this)}></Counter>
            <hr/>
            <Summary sum={this.state.sum}></Summary>
        </Fragment>
    }
}
