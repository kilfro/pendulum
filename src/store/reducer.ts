import {PendulumAction, PendulumActionTypes, PendulumState} from '../types/StoreTypes'

export const reducer = (state: PendulumState, {type, payload}: PendulumAction): PendulumState => {
    switch (type) {
        case PendulumActionTypes.SET_WEIGHT:
            return {...state, weight: payload}
        case PendulumActionTypes.SET_GRAVITY:
            return {...state, gravity: payload}
        case PendulumActionTypes.SET_INITIAL_IMPULSE:
            return {...state, impulse: payload}
        case PendulumActionTypes.SET_THREAD_LENGTH:
            return {...state, length: payload}
        default:
            return state
    }
}