app.provider('Plugin', function () {
    this.plugins = [
        {
            type: 'HOME',
            request: {
                method: 'GET',
                url: '#'
            }
        },
        {
            type: 'NEWS',
            request: {
                method: 'GET',
                url: '#'
            }
        },
        {
            type: 'ARTICLE',
            request: {
                method: 'GET',
                url: '#'
            }
        },
        {
            type: 'TOOLBAG',
            request: {
                method: 'GET',
                url: '#'
            }
        },
        {
            type: 'BATTLEFIELD',
            request: {
                method: 'GET',
                url: '#'
            }
        },
        {
            type: 'ITLAWS',
            request: {
                method: 'GET',
                url: '#'
            }
        },
        {
            type: 'APPSEC',
            request: {
                method: 'GET',
                url: '#'
            }
        },
        {
            type: 'NETSEC',
            request: {
                method: 'GET',
                url: '#'
            }
        },
        {
            type: 'ENDSEC',
            request: {
                method: 'GET',
                url: '#'
            }
        },
        {
            type: 'MEDIKON',
            request: {
                method: 'GET',
                url: '#'
            }
        },
        {
            type: 'GUVONER',
            request: {
                method: 'GET',
                url: '#'
            }
        },
        {
            type: 'SACMA',
            request: {
                method: 'GET',
                url: '#'
            }
        },
        {
            type: 'GEOINFO',
            request: {
                method: 'GET',
                url: '½'
            }
        }
    ];

    this.setRequestUrl = function (new_url, type) {
        this.plugins.forEach(function (plugin) {
            if(plugin.type === type){
                plugin.request.url = new_url;
            }
        });
    };
    /*
    * Get content of each page
    * */
    this.$get = ['$q', 'Request', function ($q, Request) {
        var plugins = this.plugins;

        return {
            getContent: function (type) {
                var request = null;

                plugins.forEach(function (plugin) {
                    if(plugin.type === type){
                        request = plugin.request;
                    }
                });

                $q.when(true).then(function() {
                    return Request.request(request); // Will be resolved
                }).then(function(response) {    // Success callback
                    return response.data;
                }, function(err) {  // Error callback
                    return null;
                });
            }
        }
    }];
});