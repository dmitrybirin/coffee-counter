import React from 'react'
import styled from 'styled-components'
import { counter } from './models/counter'
import { observer } from 'mobx-react'

const SubTitle = styled.h3`
	font-family: 'Cutive Mono', monospace;
	font-size: 40px;
	font-weight: 200;
	text-align: center;
`

const Volume = () => (
	<div>
		<SubTitle>volume</SubTitle>
		<InputContainer>
			<Input
				type="number"
				name="volume"
				placeholder={0}
				value={counter.volume}
				onChange={e => counter.changeVolume(e.target.value)}
			/>
		</InputContainer>
	</div>
)

const InputContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

const Input = styled.input`
	font-family: 'Cutive Mono', monospace;
	font-size: 100px;
	border-radius: 2px;
	width: 300px;
	border: none;
	text-align: center;
	background: rgba(0, 0, 0, 0);
`

export default observer(Volume)
