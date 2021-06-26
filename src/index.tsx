import React from 'react'
import {render} from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import {appStore} from './store'


render(
    <Provider store={appStore}>
        <App/>
    </Provider>,
    document.getElementById('root'),
)