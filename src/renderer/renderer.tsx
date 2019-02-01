import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './app'
import { AppContainer } from 'react-hot-loader'

const rootEl = document.getElementById('root')
ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    rootEl
)

if (module.hot) {
    module.hot.accept('./app', () => {
        const HotApp = require('./app').default
        ReactDOM.render(
            <AppContainer>
                <HotApp />
            </AppContainer>,
            rootEl
        )
    })
}
