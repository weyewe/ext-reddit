Ext.define('AM.model.Post', {
    extend: 'Ext.data.Model',

    fields: [
			{name: "created",              type: "string"},

			{name: "permalink",    	type: "string"},
			{name: "thumbnail",  		type: 'string'},
			{name: 'author', 		 		type: 'string' },
                          
			{name: "url",    		 		type: "string"}, 
			{name: "title",    	 		type: "string"},
			{name: "name",    	 		type: "string"},
			{name: "domain",   	  	type: "string"} 
    ],

		proxy: {
			type: 'localstorage',
			id  : 'posts-collection'
		}

});
