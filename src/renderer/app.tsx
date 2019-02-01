import * as React from 'react'

import './../css/styles.scss'
import MainView from './MainView'

import { observer } from 'mobx-react'
import { createGlobalStyle } from 'styled-components'

export class App extends React.Component<any, any> {
    public render() {
        return (
            <div className="app">
                <MainView />
                <GlobalStyle />
            </div>
        )
    }
}

export default observer(App)

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font: caption;
		font-size: 14px;
	}

	*:before,
	*:after {
		box-sizing: inherit;
	}

	html,
	body,
	#root,
	{
		height: 100%;
		margin: 0;
		padding: 0;
		display: flex;
		flex-flow: column nowrap;
	}
`
