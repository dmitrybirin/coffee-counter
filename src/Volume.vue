<template>
	<div>
		<h3>volume</h3>
		<div id="container">
			<input
				type="number"
				name="volume"
        :placeholder='0'
        :value="counter.volume"
        @input="onValueChange"
			/>
		</div>
	</div>
</template>

<script>
import { counter } from './models/counter'

export default {
	name: 'HelloWorld',
	props: {
		msg: String,
	},
	data: () => ({
		counter,
	}),
	methods: {
		onValueChange(e) {
			counter.changeVolume(e.target.value)
		},
	},
}
</script>

<style scoped>
h3 {
	font-family: 'Cutive Mono', monospace;
	font-size: 40px;
	font-weight: 200;
	text-align: center;
}

div#container {
	display: flex;
	align-items: center;
	justify-content: center;
}

input {
	font-family: 'Cutive Mono', monospace;
	font-size: 100px;
	border-radius: 2px;
	width: 300px;
	border: none;
	text-align: center;
	background: rgba(0, 0, 0, 0);
}
</style>
