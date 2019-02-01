import * as React from 'react'
import { observer } from 'mobx-react'
import UIStore from './../store/UIStore'
import styled from 'styled-components'
import './MainView.scss'

@observer
export class MainView extends React.Component<any, any> {
	private handleButtonClick = () => {
		UIStore.toggleMessage()
	}

	render(): JSX.Element {
		return (
			<div className="mainView">
				<Title>Welcome to Electron, Typescript, React and Mobx</Title>

				<Button onClick={() => this.handleButtonClick()}>Toggle message</Button>

				<div className="smallPrint">Click the button to toggle message</div>

				{UIStore.isMessageShown && <Message>{UIStore.getMessage}</Message>}
			</div>
		)
	}
}

export default MainView

const Title = styled.h2`
	padding: 20px 12px;
	font-size: 24px;
`
const Button = styled.button`
	margin: 12px;
	padding: 4px;
`
const Message = styled.div`
	margin: 12px;
	margin-top: 20px;
`
