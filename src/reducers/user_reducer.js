import * as userActionTypes from './../actionTypes/user';

export default function (state={}, action) {
    switch (action.type) {
        case userActionTypes.GET_USER:
            return {...state, user: action.payload};
        default:
            return state;
    }
}