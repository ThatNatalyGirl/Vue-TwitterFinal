'use strict';

console.log('status-bar');
Vue.component('status-bar', {
	props: ["tweetData"],
	data: function data() {
		return {};
	},
	template: '\n\t\t<div>\n\t\t\t<input name="hashtag" type="text">\n\t\t\t<button>Go</button>\n\t\t</div>\n\t'
});
//# sourceMappingURL=StatusBarComponent.js.map
