'use strict';

console.log('status-bar');
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
	props: ["hashtag", "tweetData"],
	data: function data() {
		return {};
	},
	template: '\n\t\t<div>\n\t\t\tShowing 13 tweets containing {{hashtag}}\n\t\t</div>\n\t'
});

// :status-bar="statusBar"
// <div>{{tweet-data}}</div>
//# sourceMappingURL=StatusBarComponent.js.map
