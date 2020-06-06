import React , {Component} from "react";

export default class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: this.props.sum
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.sum != prevState.sum) {
            return {
                sum: nextProps.sum
            }
        } else {
            return null
        }
    }

    render() {
        return <div style={{marginLeft: 30}}>
            {this.state.sum}
        </div>
    }
}
