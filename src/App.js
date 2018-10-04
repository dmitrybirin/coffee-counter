import React from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
import Volume from './Volume'
import { counter } from './models/counter'
import { observer } from 'mobx-react'

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
	margin: 0;
`

const App = () => (
	<div>
		<Title>Count your beans!</Title>
		<Row>
			<Ratio onOneGramm={counter.ratio} />
			<Volume />
		</Row>
		<SubTitle>gramms</SubTitle>
		<Result>{`${Number.isInteger(counter.gramms) ? '' : '~'}${Math.floor(
			counter.gramms
		)}`}</Result>
	</div>
)

export default hot(module)(observer(App))
