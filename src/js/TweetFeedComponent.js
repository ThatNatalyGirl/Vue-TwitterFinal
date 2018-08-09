console.log('tweet-feed')

Vue.component('tweet-feed', {
	props: ["tweet-data"],
	data: function () {
		return {
		}
	},
	template: `
		<div>
			tweet feed!
			cake
			<tweet v-for="oneTweetObject in tweetData" :tweet-object="oneTweetObject"></tweet>
		</div>
	`
})