console.log(`All the little birdies on Jay Bird Street, love to hear the robin go tweet tweet tweet`)

const TWITTER_SEARCH_URL = "http://circuslabs.net/~chris.silich/twitter-proxy/twitter-proxy.php?op=search_tweets&q=";


let app = new Vue({
	el: "#app",
	data: {
		tweetData:[]
		hashtag: "cats"
	},
	created: function() {
		axios.get(TWITTER_SEARCH_URL + "bacon")
		.then((response) =>{
			console.log("twitter said", response.data.statuses)
			this.tweetData = response.data.statuses;
		})
		.catch((error) =>{
			console.warn("Oh noes!", error)
		})
	},
	methods:{

	}
});


///Note. To use 'this' in Axios call, we have to use arrow functions so that 'this' does not get redefined by axios

