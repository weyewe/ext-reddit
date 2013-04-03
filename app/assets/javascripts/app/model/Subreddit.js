Ext.define('AM.model.Subreddit', {
    extend: 'Ext.data.Model',
    // requires: ['AM.model.Post' ],
 
    fields: [
        { name: "id" },
        { name: "name", type: "string" }
    ],
 

    proxy: {
        type: 'localstorage',
        id  : 'subreddits-collection'
    } 

		// hasMany: {
		// 	model: "AM.model.Post",
		// 	name : 'posts',
		// 	filterProperty: 'query',
		// 	store: {
		// 		pageSize       : 50,
		// 		remoteFilter   : true,
		// 		clearOnPageLoad: false
		// 	}
		// }

});