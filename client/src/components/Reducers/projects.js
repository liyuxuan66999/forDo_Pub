const projectReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state+1;
        case "DCCREMENT":
            return state-1;
        default:
            return state;
    }
}

export default projectReducer;