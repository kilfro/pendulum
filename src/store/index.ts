import React, {createContext} from 'react'
import {PendulumAction, PendulumState} from '../types/StoreTypes'

export const defaultState: PendulumState = {
    length: '10',
    weight: '50',
    gravity: '9.8',
    impulse: '45',
}

interface ProviderProps {
    state: PendulumState,
    dispatch: React.Dispatch<PendulumAction>,
}

export const AppContext = createContext<ProviderProps>({state: defaultState, dispatch: () => undefined})
