Ext.define("AM.view.Viewport" , {
	extend : "Ext.container.Viewport",
	alias : 'widget.vp',
	
	layout : {
		type : 'border'
	},
	
	items  : [
		// {
		// 	html : "This is subreddit",
		// 	xtype : 'panel',
		// 	region : 'west',
		// 	flex: 1
		// },
		{
			xtype : 'subredditgrid',
			region : 'west',
			flex : 2
		},
		{
			html : "This is post",
			xtype : 'panel',
			region : 'center',
			flex : 3
		},
		{
			html : "This is post detail",
			xtype : 'panel',
			region : 'east',
			flex : 5
		}
		
		// {
		// 	xtype : 'postgrid',
		// 	region : 'center'
		// },
		// {
		// 	xtype : 'postviewer',
		// 	region : 'east'
		// }
	]
});
