"use strict";

console.log("All the little birdies on Jay Bird Street, love to hear the robin go tweet tweet tweet");

var TWITTER_SEARCH_URL = "http://circuslabs.net/~chris.silich/twitter-proxy/twitter-proxy.php?op=search_tweets&q=";

var app = new Vue({
	el: "#app",
	data: {
		tweetData: []
	},
	created: function created() {
		var _this = this;

		axios.get(TWITTER_SEARCH_URL + "bacon").then(function (response) {
			console.log("twitter said", response.data.statuses);
			_this.tweetData = response.data.statuses;
		}).catch(function (error) {
			console.warn("Oh noes!", error);
		});
	},
	methods: {}
});

///Note. To use 'this' in Axios call, we have to use arrow functions so that 'this' does not get redefined by axios
//# sourceMappingURL=main.js.map
