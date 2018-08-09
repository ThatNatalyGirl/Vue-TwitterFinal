// console.log('hashtag-input')
// Vue.component('hashtag-input', {
// 	data: function () {
// 		return {
			
// 		}
// 	},
// 	template: `
// 		<div>
// 			Showing 13 tweets containing "#cats"
// 		</div>
// 	`
// })

console.log('hashtag-input')
Vue.component('hashtag-input', {
	props: {
		type: string
		default: "#cats"
	}
	data: function () {
		if 'hashtag-input'.value {
			return 'input.value'
		}
		else {
			return #puppies
		}
	},
	template: `
		<div>
			Showing 13 tweets containing 
		</div>
	`
})