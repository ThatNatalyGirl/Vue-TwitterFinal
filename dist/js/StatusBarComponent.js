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
	props: ["statuBar"],
	data: function data() {
		return {};
	},
	template: '\n\t\t<div>\n\t\t\t<input name="hashtag" type="text">\n\t\t\t<button>Go</button>\n\t\t</div>\n\t'
});

// :status-bar="statusBar"
//# sourceMappingURL=StatusBarComponent.js.map
