/*
 * We store Search model instances locally using localStorage. This makes it easy to have a single Store containing
 * all of the Searches and loading automatically. We use this to populate the list on the left, as well as in helping
 * boot the application up (see the 'first' action in app/controllers/searches.js).
 */
Ext.define('AM.store.Posts', {
    extend  : 'Ext.data.Store',
    requires: ['AM.model.Post'],
		model   : 'AM.model.Post',
		autoLoad: false, 
		
		populateStore: function( direction, viewport, subreddit ){
			viewport.setLoading(true);
			console.log("The populate store's something is : " + direction);
			console.log("The subreddit name : " + subreddit.get("name"));
			// var sampleUrl = 'http://www.reddit.com/r/nsfw/hot.json?limit=40';
			var me = this; 
			
			var baseUrl = 'http://www.reddit.com/r'; 
			var subReddit = subreddit.get("name");
			var limit = 40 ;
			var recordsDirection = '' 
			
			var finalUrl = 	baseUrl + '/' + 
											subReddit + '/' + 
												'hot.json' + '?' + 
												'limit=' + limit ; 
			

			
			if( direction === 'after' ){
				var lastPostName = this.last().get("name");
				finalUrl = finalUrl + '&' + 
										'after=' + lastPostName; 
			}
			
			if( direction === 'before' ){
				var firstPostName = this.first().get("name");
				finalUrl = finalUrl + '&' + 
										'before=' + firstPostName; 
			}
			
			
			
			
			
			
			Ext.data.JsonP.request({
			    url: finalUrl ,
					callbackKey : 'jsonp',
			    params: {
						format: 'json' 
					},
			    success: function(result, request ) {
						viewport.setLoading( false ) ;



						var responseText=  result.responseText; 
						// console.log("The result: " ) ;
						// console.log( result );

						// console.log( result.data.children );

						if( result.data.children.length == 0  ){
							Ext.Msg.alert("Load Failure", "Can't Load More Data");
						}
						var objectArray = [];
						Ext.Array.each( result.data.children, function(object, index){
							// console.log("The index: "+ index);
							// console.log( object );
							var book = Ext.create('AM.model.Post', {  
								created		:  			object.data.created	 											, 
								permalink	: 			object.data.permalink											, 
								thumbnail	: 			object.data.thumbnail											, 
								author		: 			object.data.author	 												, 
								url				: 			object.data.url			 											,
								name				: 			object.data.name			 											,
								title			:				object.data.title		 											,
								domain    : 			object.data.domain   										
							});
							objectArray.push( book );
						});

						me.loadData(objectArray);

			    },
			    failure: function(result, request ) {
						viewport.setLoading( false ) ;
						Ext.Msg.alert("Error Loading", "Can't Load Data");
			    }
			});
		}
		// 
		// baseUrl : 'http://www.reddit.com/r/',
		// hotSelector : '/hot.json',
		// // 'http://www.reddit.com/r/nsfw/hot.json';
		// proxy: {
		// 	type: 'jsonp',
		// 	url: 'someUrl',
		// 	callbackKey: 'jsonp', 
		// 	extraParams: {
		// 		format: 'json'
		// 	}
		// }, 
		// 
		// reader: {
		// 	type: 'json',
		// 	root: 'data.children'
		// }
});