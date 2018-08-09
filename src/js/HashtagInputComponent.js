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
	props: [
		"hashtag"
	],
	data: function() {
		return {}
	},
	template: `
		<div>
			<input name="hashtag" type="text" :value="hashtag">
			<button>Go</button>
		</div>
	`
})