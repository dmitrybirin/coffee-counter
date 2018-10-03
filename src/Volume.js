import React from 'react'
import styled from 'styled-components'

const SubTitle = styled.h3`
	font-family: 'Cutive Mono', monospace;
	font-size: 40px;
	font-weight: 200;
	text-align: center;
`

class Volume extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<SubTitle>volume</SubTitle>
				<InputContainer>
					<Input
						type="number"
						name="volume"
						value={this.props.volume}
						onChange={this.props.onVolumeChange}
					/>
				</InputContainer>
			</div>
		)
	}
}

const InputContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

const Input = styled.input`
	font-family: 'Cutive Mono', monospace;
	font-size: 100px;
	width: 50%;
	border-radius: 2px;
	border: none;
	text-align: center;
	background: rgba(0, 0, 0, 0);
`

export default Volume
