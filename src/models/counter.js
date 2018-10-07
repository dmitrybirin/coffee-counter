const { types } = require('mobx-state-tree')
import makeInspectable from 'mobx-devtools-mst'

const Counter = types
	.model('Counter', {
		ratio: types.number,
		volume: types.string,
	})
	.actions(self => ({
		changeVolume(newVolume) {
			self.volume = newVolume
		},
		changeRatio(newRatio) {
			self.ratio = newRatio
		},
	}))
	.views(self => ({
		get gramms() {
			return self.volume / self.ratio
		},
	}))

let counter = Counter.create({
	ratio: 14,
	volume: '',
	gramms: 0,
})

counter = makeInspectable(counter)

export { counter }
