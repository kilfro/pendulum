import React from 'react'
import './app.less'
import Pendulum from './components/Pendulum'
import Control from './components/Control'

const App = () => (
    <div className="container">
        <Control/>
        <Pendulum/>
    </div>
)

export default App