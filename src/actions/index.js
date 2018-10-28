import {AppGlobals} from "../utils/Globals";
import * as actionTypes from './../actionTypes/user';

export function getUser() {

    const user = AppGlobals.portfolio;

    return {
        type: actionTypes.GET_USER,
        payload: user
    }
}