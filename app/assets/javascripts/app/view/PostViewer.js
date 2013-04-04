/**
 * @class FeedViewer.FeedPost
 * @extends Ext.panel.Panel
 *
 * Shows the detail of a feed post
 *
 * @constructor
 * Create a new Feed Post
 * @param {Object} config The config object
 */
Ext.define('AM.view.PostViewer', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.postviewer',
    cls: 'preview',
    autoScroll: true,
    border: true,
    
    initComponent: function(){
        Ext.apply(this, {
            dockedItems: [this.createToolbar()],
            tpl: Ext.create('Ext.XTemplate',
                '<div class="post-data">',
                    '<h3 class="post-title">{title:this.defaultTitle}</h3>',
                '</div>',
                '<div class="post-body" style="text-align:center;"><img style="width:80%;" src="{url:this.defaultUrl}" /></div>',
                {
	
										defaultTitle : function(title){
											return title? title : 'Select a post';
										},
										defaultUrl : function(url){
											return url? url : '';
										},
                    getBody: function(value, all){
                        return Ext.util.Format.stripScripts(value);
                    },

                    defaultValue: function(v){
                        return v ? v : 'Unknown';
                    },

                    formatDate: function(value){
                        if (!value) {
                            return '';
                        }
                        return Ext.Date.format(value, 'M j, Y, g:i a');
                    }
                }
             )
        });
        this.callParent(arguments);
    },

    /**
     * Set the active post
     * @param {Ext.data.Model} rec The record
     */
    setActive: function(rec) {
        this.active = rec;
        this.update(rec.data);
    },

    /**
     * Create the top toolbar
     * @private
     * @return {Ext.toolbar.Toolbar} toolbar
     */
    createToolbar: function(){
        var items = [],
            config = {};
        // if (!this.inTab) {
        //      items.push({
        //          scope: this,
        //          handler: this.openTab,
        //          text: 'View in new tab',
        //          iconCls: 'tab-new'
        //      }, '-');
        //  }
        //  else {
        //      config.cls = 'x-docked-noborder-top';
        //  }
        items.push({
            scope: this,
            handler: this.goToPost,
            text: 'Go to post',
            iconCls: 'post-go'
        });
        config.items = items;
        return Ext.create('widget.toolbar', config);
    },

    /**
     * Navigate to the active post in a new window
     * @private
     */
    goToPost: function(){
        window.open(this.active.get('url'));
    },

    /**
     * Open the post in a new tab
     * @private
     */
    openTab: function(){
        this.fireEvent('opentab', this, this.active);
    }

});