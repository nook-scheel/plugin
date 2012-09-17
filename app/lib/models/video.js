App.Video = DS.Model.extend({
  primaryKey: '_id',
  name: DS.attr('string'),
  filename: DS.attr('string'),
  status: DS.attr('string'),
  views_left: DS.attr('number'),
  end_date: DS.attr('string', { key: 'endDate' }),
  pages: DS.attr('pages', { defaultValue: [] }),
  e_d: function() {
    if(Em.none(this.get('end_date')))
      return false;
    var date = new Date(this.get('end_date'));
    return date.format('{d} {Mon} {yyyy}', 'ru');
  }.property('end_date')
}).reopenClass({
  updateRecord: 'http://localhost:8000/api/videos/%@.json',
  findAll: 'http://localhost:8000/api/videos.json'
});
