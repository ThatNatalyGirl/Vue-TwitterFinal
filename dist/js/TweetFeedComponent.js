'use strict';

console.log('tweet-feed');

Vue.component('tweet-feed', {
	props: ["tweet-data"],
	data: function data() {
		return {};
	},
	template: '\n\t\t<div>\n\t\t\ttweet feed!\n\t\t\t<tweet v-for="oneTweetObject in tweetData" :tweet-object="oneTweetObject"></tweet>\n\t\t</div>\n\t'
});
//# sourceMappingURL=TweetFeedComponent.js.map
