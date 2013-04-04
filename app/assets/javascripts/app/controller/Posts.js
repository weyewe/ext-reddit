Ext.define('AM.controller.Posts', {
  extend: 'Ext.app.Controller',

  stores: ['Posts', 'Posts'],
  models: ['Subreddit', 'Post'],

  views: [
    'PostGrid' ,
		"PostViewer"
  ],

  	refs: [
			{
				ref: 'list',
				selector: 'postgrid'
			},
			{
				ref : 'viewport',
				selector : 'vp'
			},
			{
				ref : 'postViewer',
				selector : 'postviewer'
			},
			{
				ref : 'subredditGrid',
				selector : 'subredditgrid'
			}
	],

  init: function() {
    this.control({
      'postgrid': {
        selectionchange: this.selectionChange
      },
   
      'postgrid button[action=prevObject]': {
        click: this.prevObject
      },
     
      'postgrid button[action=nextObject]': {
        click: this.nextObject
      } 
		
    });
  },

	  
	nextObject : function(){
		var me = this; 
		var viewport = me.getViewport(); 
		var selectedSubreddit = me.getSubredditGrid().getSelectedObject() ;
		
		if(!selectedSubreddit){ return; }
		me.getPostsStore().populateStore('after', viewport  ,  selectedSubreddit ); 
	},
	
	
	prevObject : function(){
		var me = this; 
		var viewport = me.getViewport(); 
		var selectedSubreddit = me.getSubredditGrid().getSelectedObject() ;
		
		if(!selectedSubreddit){ return; }
		me.getPostsStore().populateStore('before', viewport  ,  selectedSubreddit );
	},

  
  selectionChange: function(selectionModel, selections) {
		var me = this; 
    var grid = this.getList();

		var record = this.getList().getSelectedObject();
		
		if(!record ){ return;  }

    var postViewer = me.getPostViewer();
		
		if(record.get("is_normal_image_link") == true ){
			postViewer.setActive( record ) ;
		}else{
			console.log("YEAH BABY. not normal image link");
			me.getViewport().setLoading( true );
			console.log("The url: " + record.get("url"));
			Ext.Ajax.request({
			    url: 'api/extract_images',
			    method: 'POST',
			    params: {
						url : record.get('url')
			    },
			    jsonData: {},
			    success: function(result, request ) {
							me.getViewport().setLoading( false );
							// console.log("done extracting images @server");
							
							// console.log("The result");
							// console.log( result ) ;
							// postViewer.setParsedImages( result ) ;
		
							// console.log("The request");
							// console.log( request ) ;
							var responseText=  result.responseText; 
							
							// console.log("\n\n The responseTex: ");
							// console.log( responseText);
							
							var data = Ext.decode(responseText ); 
							
							// console.log(data);
							
							// console.log( data.images);
							record.set("parsed_images", Ext.decode(data.images ) );
							postViewer.setActive( record ) ;
			    },
			    failure: function(result, request ) {
							me.getViewport().setLoading( false ) ;
							Ext.Msg.alert("Error Loading Images", "Maybe Server is down?");
			    }
			});
		}
		
  }

});
