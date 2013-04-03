Ext.define('AM.view.SubredditGrid' ,{
  	extend: 'Ext.grid.Panel',
  	alias : 'widget.subredditgrid',

  	store: 'Subreddits', 

		title: "Sub Reddit",
 

	initComponent: function() {
		this.columns = [
			{ header: 'ID', dataIndex: 'id'},
			{ header: ' Name',  dataIndex: 'name',  flex: 1 , sortable: false} 
		];

		this.addObjectButton = new Ext.Button({
			text: 'Add Sub',
			action: 'addObject'
		});

 
		this.deleteObjectButton = new Ext.Button({
			text: 'Delete Sub',
			action: 'deleteObject',
			disabled: true
		});



		this.tbar = [this.addObjectButton, this.deleteObjectButton];
		this.bbar = Ext.create("Ext.PagingToolbar", {
			store	: this.store, 
			displayInfo: true,
			displayMsg: 'Displaying topics {0} - {1} of {2}',
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
