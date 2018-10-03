import React from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
import Volume from './Volume'

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
	display: flex;
	align-items: center;
	justify-content: center;
`

const Row = styled.div`
	display: flex;
	flex-direction: row;
`

const Ratio = ({ onOneGramm }) => (
	<div>
		<SubTitle>ratio</SubTitle>
		<Fraction>{`1/${onOneGramm}`}</Fraction>
	</div>
)

const Result = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Cutive Mono', monospace;
	font-size: 100px;
`

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			volume: 0,
			ratio: 14,
		}
		this.onVolumeChange = this.onVolumeChange.bind(this)
	}

	onVolumeChange(e) {
		this.setState({ volume: e.target.value })
	}

	render() {
		return (
			<div>
				<Title>Count your beans!</Title>
				<Row>
					<Ratio onOneGramm={this.state.ratio} />
					<Volume volume={this.state.volume} onVolumeChange={this.onVolumeChange} />
				</Row>
				<Result>{Math.floor(this.state.volume / this.state.ratio)}</Result>
			</div>
		)
	}
}

export default hot(module)(App)
