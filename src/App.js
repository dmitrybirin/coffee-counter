import React from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'

const Title = styled.h1`
	font-family: 'Cutive Mono', monospace;
	font-size: 1.5em;
	text-align: center;
`
const SubTitle = styled.h3`
	font-family: 'Cutive Mono', monospace;
	font-size: 40px;
	font-weight: 200;
	text-align: center;
`

const Fraction = styled.div`
	font-family: 'Cutive Mono', monospace;
	font-size: 100px;
`

const Row = styled.div`
	display: flex;
	flex-direction: row;
`

const Input = styled.input`
	height: 30px;
`

const Ratio = () => (
	<div>
		<SubTitle>ratio</SubTitle>
		<Fraction>1/14</Fraction>
	</div>
)

class Volume extends React.Component {
	constructor() {
		super()
		this.state = {
			volume: 0,
		}
		this.handler = this.handler.bind(this)
	}

	handler(e) {
		this.setState({ volume: e.target.value })
	}

	render() {
		return (
			<Input type="number" name="volume" value={this.state.volume} onChange={this.handler} />
		)
	}
}

const App = () => {
	return (
		<div>
			<Title>Count your beans!</Title>
			<Row>
				<Ratio />
				<Volume />
			</Row>
		</div>
	)
}

export default hot(module)(App)
