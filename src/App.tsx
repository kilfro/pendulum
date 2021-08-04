import React, {useMemo, useReducer} from 'react'
import {Pendulum} from './components/Pendulum'
import {Control} from './components/Control'
import styled from 'styled-components'
import {AppContext, defaultState} from './store'
import {reducer} from './store/reducer'

const AppContainer = styled.main`
  background-color: honeydew;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, defaultState)
    const contextValue = useMemo(() => ({state, dispatch}), [state, dispatch])
    return (
        <AppContext.Provider value={contextValue}>
            <AppContainer>
                <Control/>
                <Pendulum/>
            </AppContainer>
        </AppContext.Provider>
    )
}

export default App