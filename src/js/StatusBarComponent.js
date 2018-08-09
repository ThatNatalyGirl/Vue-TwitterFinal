console.log('status-bar')
// Vue.component('status-bar', {
// 	data: function () {
// 		return {
			
// 		}
// 	},
// 	template: `
// 		<div>
// 			<input name="hashtag" type="text">
// 			<button>Go</button>
// 		</div>
// 	`
// })


// console.log('status-bar')
Vue.component('status-bar', {
	props: ["hashtag"],
	data: function () {
		return {
			
		}
	},
	template: `
		<div>
			Showing 13 tweets containing {{hashtag}}
		</div>
	`
})

// :status-bar="statusBar"