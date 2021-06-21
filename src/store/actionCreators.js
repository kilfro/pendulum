import {SET_GRAVITY, SET_INITIAL_IMPULSE, SET_THREAD_LENGTH, SET_WEIGHT} from './actionTypes'

export const setThreadLength = length => ({
    type: SET_THREAD_LENGTH,
    length
})

export const setWeight = weight => ({
    type: SET_WEIGHT,
    weight
})

export const setGravity = gravity => ({
    type: SET_GRAVITY,
    gravity
})

export const setInitialImpulse = impulse => ({
    type: SET_INITIAL_IMPULSE,
    impulse
})