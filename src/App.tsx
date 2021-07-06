import React from 'react'
import {Pendulum} from './components/Pendulum'
import {Control} from './components/Control'
import styled from 'styled-components'

const AppContainer = styled.main`
  background-color: honeydew;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

const App: React.FC = () => (
    <AppContainer>
        <Control/>
        <Pendulum/>
    </AppContainer>
)

export default App