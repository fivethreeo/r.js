define([
    "static/app",
    "backbone"
], function(app, Backbone){
    
    var Model = Backbone.Model.extend({
        defaults: {
            order: 0
        },

        url: function() {
            var id = this.id || '';
            return app.API + "sopin_dishtypes/"+id+'/';
        }
    });

    return Model;

});

