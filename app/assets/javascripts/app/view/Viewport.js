Ext.define("AM.view.Viewport" , {
	extend : "Ext.container.Viewport",
	alias : 'widget.vp',
	
	layout : {
		type : 'border'
	},
	
	items  : [
		{
			xtype : 'subredditgrid',
			region : 'west',
			flex : 2
		},
		{
			xtype : 'postgrid',
			region : 'east',
			flex : 2
		},
		
		{
			xtype : 'postviewer',
			region : 'center',
			flex : 5 
		}
	]
});
