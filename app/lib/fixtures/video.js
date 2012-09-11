require('ispeak/models/video');

App.Video.FIXTURES = [
  { id: 1, name: 'Home video', filename: 'file_name_video1', status: 'active', pages: ['http://mysite.ru/', 'http://mysite.ru/home/'] },
  { id: 2, name: 'About video', filename: 'file_name_video2', status: 'active', pages: ['http://mysite.ru/about/', 'http://mysite.ru/contacts/']},
  { id: 3, name: 'Blog video', filename: 'file_name_video3', status: 'active', pages: ['http://mysite.ru/blog/', 'http://mysite.ru/live/'] }
];
