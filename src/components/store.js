import {createStore} from "redux";

const defaultActionType = {
    increase: "increase",
    decrease: "decrease"
}

const defaultValue = {
    "one": 0,
    "second": 10,
    "third": 20,
}

const reducer = (defaultValue, action) => {
    const {type, caption} = action;
    switch (type) {
        case defaultActionType.increase :
            return {...defaultValue, [caption]: defaultValue[caption] + 1}
        case defaultActionType.decrease :
            return {...defaultValue, [caption]: defaultValue[caption] - 1}
        default:
            return defaultValue
    }
}

const store = createStore(reducer, defaultValue);

export default store;