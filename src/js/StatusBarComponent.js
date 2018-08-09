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
	props: ["statuBar"],
	data: function () {
		return {
			
		}
	},
	template: `
		<div>
			<input name="hashtag" type="text">
			<button>Go</button>
		</div>
	`
})

// :status-bar="statusBar"