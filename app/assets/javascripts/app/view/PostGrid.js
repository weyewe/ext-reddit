Ext.define('AM.view.PostGrid' ,{
  	extend: 'Ext.grid.Panel',
  	alias : 'widget.postgrid',

  	store: 'Posts', 
		title: 'Subreddit',
 

	initComponent: function() {
		this.columns = [
			{ header: 'Name', dataIndex: 'name', flex:  1} 
		];

		this.addObjectButton = new Ext.Button({
			text: 'Add',
			action: 'addObject'
		});
 
		this.deleteObjectButton = new Ext.Button({
			text: 'Delete',
			action: 'deleteObject',
			disabled: true
		});
		
 



		this.tbar = [this.addObjectButton, this.deleteObjectButton ];
		this.bbar = Ext.create("Ext.PagingToolbar", {
			store	: this.store, 
			displayInfo: true,
			displayMsg: 'Displaying  {0} - {1} of {2}',
			emptyMsg: "No topics to display" 
		});

		this.callParent(arguments);
	},
 
	loadMask	: true,
	
	getSelectedObject: function() {
		return this.getSelectionModel().getSelection()[0];
	},

	enableRecordButtons: function() {
		this.deleteObjectButton.enable();
	},

	disableRecordButtons: function() {
		this.deleteObjectButton.disable();
	}
});
