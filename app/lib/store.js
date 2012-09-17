require('ispeak/core');

DS.attr.transforms.pages = {
    from: function(serialized) {
        var pages = serialized.map(function(object, i, s){
          return object.url;
        });
        return pages;
    },
    to: function(deserialized) {
        var pages = deserialized.map(function(item, i, s){
          return { url: item, p:false };
        });
        return pages;
    }
}

DS.attr.transforms.object = {
    from: function(serialized) {
        return serialized;
    },
    to: function(deserialized) {
        return deserialized;
    }
}

App.store = DS.Store.create({
  revision: 4,
  adapter: DS.Adapter.create({
    findAll: function(store, type) {
      jQuery.getJSON(type.findAll, function(json) {
          //this.sideload(store, type, json, plural);
          store.loadMany(type, json);
      });
    },
    find: function(store, type, id) {
        var url = type.updateRecord;
        url = url.fmt(id);

        jQuery.getJSON(url, function(data) {
            // data is a Hash of key/value pairs. If your server returns a
            // root, simply do something like:
            // store.load(type, id, data.person)
            store.load(type, id, data);
        });
    },
    updateRecord: function(store, type, model) {
      var url = type.updateRecord.fmt(model.get('id'));
      this.ajax(url, 'POST', {
        context: this,
        data: { pages: model.get('pages'), _method: 'PUT' },
        success: function(json) {
          console.log(json);
          //this.didDeleteRecord(store, type, record, json);
        }
      });
    },
    ajax: function(url, type, hash) {
      hash.url = url;
      hash.type = type;
      hash.dataType = 'json';
      hash.contentType = 'application/json; charset=utf-8';
      hash.context = this;

      if (hash.data && type !== 'GET') {
        hash.data = JSON.stringify(hash.data);
      }

      jQuery.ajax(hash);
    }
  })
});
