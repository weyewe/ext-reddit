Ext.define('AM.model.Post', {
    extend: 'Ext.data.Model',
    requires: 'AM.proxy.Reddit',

    config: {
        fields: [
            {name: "id",                type: "int"},
            {name: "text",              type: "string"},
            {name: "from_user",         type: "string"},
            {name: "profile_image_url", type: "string"},
            {name: "created_at",        type: "string"},
            {name: "metadata"},
            {name: 'subreddit_id'}
        ],

        proxy: {
            type: 'reddit'
        }
    }
});
