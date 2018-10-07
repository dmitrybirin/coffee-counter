<template>
  	<div>
		<h1>Count your beans!</h1>
		<div id="row">
			<div>
		    <h3 id="subtitle">ratio</h3>
		    <div id="fraction">{{onOneGramm}}</div>
	    </div>
			<Volume />
		</div>
		<h3 id="subtitle">gramms</h3>
		<p id="result">{{ result }}</p>
	</div>
</template>

<script>
import Volume from './Volume.vue'
import { counter } from './models/counter'

export default {
	name: 'app',
	components: {
		Volume,
	},
	data: () => ({
		onOneGramm: `1/${counter.ratio}`,
		result: `${Number.isInteger(counter.gramms) ? '' : '~'}${Math.floor(counter.gramms)}`,
	}),
}
</script>

<style>
h1 {
	font-family: 'Cutive Mono', monospace;
	font-size: 1.5em;
	text-align: center;
}
h3#subtitle {
	font-family: 'Cutive Mono', monospace;
	font-size: 40px;
	font-weight: 200;
	text-align: center;
}

div#fraction {
	font-family: 'Cutive Mono', monospace;
	font-size: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
}

div#row {
	display: flex;
	flex-direction: row;
	justify-content: center;
}

p#result {
	display: flex;
	justify-content: center;
	font-family: 'Cutive Mono', monospace;
	font-size: 100px;
	margin: 0;
}
</style>
