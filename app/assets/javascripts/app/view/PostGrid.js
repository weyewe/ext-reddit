Ext.define('AM.view.PostGrid' ,{
  	extend: 'Ext.grid.Panel',
  	alias : 'widget.postgrid',

  	store: 'Posts', 
		title: 'Posts',
 

	initComponent: function() {
		this.columns = [
			{ header: 'title', dataIndex: 'title', flex:  1} 
		];

		this.prevObjectButton = new Ext.Button({
			text: 'Prev',
			action: 'prevObject'
		});
 
		this.nextObjectButton = new Ext.Button({
			text: 'Next',
			action: 'nextObject' 
		});
		
 



		this.bbar = [this.prevObjectButton, '->', this.nextObjectButton ];
		// this.bbar = Ext.create("Ext.PagingToolbar", {
		// 	store	: this.store, 
		// 	displayInfo: true,
		// 	displayMsg: 'Displaying  {0} - {1} of {2}',
		// 	emptyMsg: "No topics to display" 
		// });

		this.callParent(arguments);
	},
 
	loadMask	: true,
	
	getSelectedObject: function() {
		return this.getSelectionModel().getSelection()[0];
	},

	enableRecordButtons: function() {
		// this.deleteObjectButton.enable();
	},

	disableRecordButtons: function() {
		// this.deleteObjectButton.disable();
	}
});
