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
		postViewer.setActive( record ) ;
  }

});
