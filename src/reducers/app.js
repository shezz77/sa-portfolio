import * as actionTypes from './../actionTypes/app';

export default function (state={}, action) {
    switch (action.type) {
        case actionTypes.setBookmark:
            return {...state, bookmark: action.payload};
        case actionTypes.getBookmark:
            return {...state, bookmark: action.payload};
        default:
            return state;
    }
}