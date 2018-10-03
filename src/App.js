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
	justify-content: center;
`

const Ratio = ({ onOneGramm }) => (
	<div>
		<SubTitle>ratio</SubTitle>
		<Fraction>{`1/${onOneGramm}`}</Fraction>
	</div>
)

const Result = styled.p`
	display: flex;
	justify-content: center;
	font-family: 'Cutive Mono', monospace;
	font-size: 100px;
	margin:0
`

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			volume: '',
			ratio: 14,
		}
		this.onVolumeChange = this.onVolumeChange.bind(this)
	}

	calculateSting(){
		const result = this.state.volume / this.state.ratio
		return `${Number.isInteger(result) ? '' : '~'}${Math.floor(result)}`
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
				<SubTitle>gramms</SubTitle>
				<Result>{this.calculateSting()}</Result>
			</div>
		)
	}
}

export default hot(module)(App)
