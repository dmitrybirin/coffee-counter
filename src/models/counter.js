const { types } = require('mobx-state-tree')

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

export const counter = Counter.create({
	ratio: 14,
	volume: '',
	gramms: 0,
})
