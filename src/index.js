import React from 'react'
import {render} from 'react-dom'
import App from './App'
import {createStore} from 'redux'
import {reducer} from './store/actionCreators'
import {Provider} from 'react-redux'

const appStore = createStore(reducer)

render(
    <Provider store={appStore}>
        <App/>
    </Provider>,
    document.getElementById('root')
)