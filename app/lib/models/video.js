App.Video = DS.Model.extend({
  primaryKey: 'id',
  name: DS.attr('string'),
  filename: DS.attr('string'),
  status: DS.attr('string'),
  pages: DS.attr('array', { defaultValue: [] })
});
