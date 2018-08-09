console.log('status-bar')
Vue.component('status-bar', {
	props: ["tweetData"],
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