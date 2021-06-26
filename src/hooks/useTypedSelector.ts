import {TypedUseSelectorHook, useSelector} from 'react-redux'
import {PendulumState} from '../types/StoreTypes'

export const useTypedSelector: TypedUseSelectorHook<PendulumState> = useSelector