Ext.define('AM.view.sales.customer.List' ,{
  	extend: 'Ext.grid.Panel',
  	alias : 'widget.customerlist',

  	store: 'Customers', 
 

	initComponent: function() {
		this.columns = [
			{ header: 'ID', dataIndex: 'id'},
			{ header: ' Name',  dataIndex: 'name',  flex: 1 , sortable: false} 
		];
 

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
	
	},

	disableRecordButtons: function() {

	}
});
