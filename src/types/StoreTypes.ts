export interface PendulumState {
    length: string,
    weight: string,
    gravity: string,
    impulse: string,
}

export enum PendulumActionTypes {
    SET_THREAD_LENGTH = 'SET_THREAD_LENGTH',
    SET_WEIGHT = 'SET_WEIGHT',
    SET_GRAVITY = 'SET_GRAVITY',
    SET_INITIAL_IMPULSE = 'SET_INITIAL_IMPULSE',
}

export interface PendulumAction {
    type: PendulumActionTypes,
    payload: string,
}