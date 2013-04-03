Ext.define('AM.proxy.Reddit', {
    extend: 'Ext.data.proxy.JsonP',
    alias: 'proxy.reddit',
    
    config: {
        // This is the url we always query when searching for tweets
        url: 'http://search.twitter.com/search.json',
        
        extraParams: {
            result_type: 'mixed', // Returns popular tweets at the top of the result
            lang: 'en'            // Only show English results
        },

        reader: {
            type: 'json',
            rootProperty: 'results'
        }
    },

    filterParam: undefined,

    /**
     * We need to add a slight customization to buildRequest - we're just checking for a filter on the
     * Operation and adding it to the request params/url, and setting the start/limit if paging
     */
    buildRequest: function(operation) {
        var request = this.callParent(arguments),
            filter  = operation.getFilters()[0],
            params  = request.getParams();

        Ext.apply(params, {
            rpp: operation.getLimit(),
            page: operation.getPage()
        });

        if (filter) {
            delete params.filter;
            Ext.apply(params, {
                q: filter.getValue() // pass in the query string to the search api
            });

            request.setParams(params);
            request.setUrl(this._url);

            // As we're modifiying the request params, we need to regenerate the url now
            request.setUrl(this.buildUrl(request));
        }

        return request;
    }
});