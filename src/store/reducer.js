import {SET_GRAVITY, SET_INITIAL_IMPULSE, SET_THREAD_LENGTH, SET_WEIGHT} from './actionTypes'

const defaultState = {
    length: 10,
    weight: 50,
    gravity: 9.8,
    impulse: 45,
}

const theReducer = {
    [SET_THREAD_LENGTH]: (state, {length}) => {
        return {...state, length}
    },
    [SET_WEIGHT]: (state, {weight}) => {
        return {...state, weight}
    },
    [SET_GRAVITY]: (state, {gravity}) => {
        return {...state, gravity}
    },
    [SET_INITIAL_IMPULSE]: (state, {impulse}) => {
        return {...state, impulse}
    },
}

export const reducer = (state = defaultState, {type, ...payload}) => {
    return theReducer.hasOwnProperty(type) ? theReducer[type](state, payload) : state
}