import * as actionTypes from './../actionTypes/app';

export function setBookMark(bookmark) {
    return {
        type: actionTypes.setBookmark,
        payload: bookmark
    }
}

export function getBookMark() {
    const bookmark = 'intro-sec';

    return {
        type: actionTypes.getBookmark,
        payload: bookmark
    }
}