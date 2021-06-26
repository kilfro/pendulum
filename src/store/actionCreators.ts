import {PendulumActionTypes} from '../types/StoreTypes'

export const setLength = (length: string) => {
    return {type: PendulumActionTypes.SET_THREAD_LENGTH, payload: length}
}

export const setWeight = (weight: string) => {
    return {type: PendulumActionTypes.SET_WEIGHT, payload: weight}
}

export const setGravity = (gravity: string) => {
    return {type: PendulumActionTypes.SET_GRAVITY, payload: gravity}
}

export const setImpulse = (impulse: string) => {
    return {type: PendulumActionTypes.SET_INITIAL_IMPULSE, payload: impulse}
}