'use strict';

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

console.log('hashtag-input');
Vue.component('hashtag-input', {
	props: ["hashtag"],
	data: function data() {
		return {};
	},
	template: '\n\t\t<div>\n\t\t\t<input name="hashtag" type="text" :value="hashtag">\n\t\t\t<button>Go</button>\n\t\t</div>\n\t'
});
//# sourceMappingURL=HashtagInputComponent.js.map
