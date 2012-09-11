require('ispeak/core');

DS.attr.transforms.array = {
    from: function(serialized) {
        return serialized;
    },
    to: function(deserialized) {
        return deserialized;
    }
}

App.store = DS.Store.create({
  revision: 4,
  adapter: DS.FixtureAdapter.create({})
});
