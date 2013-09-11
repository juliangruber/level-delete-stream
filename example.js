var deleteStream = require('./');
var level = require('level');

var db = level(__dirname + '/db');

db.batch([
  { type: 'put', key: 'foo', value: 'bar' },
  { type: 'put', key: 'bar', value: 'baz' }
], function(err) {
  if (err) throw err;

  var del = deleteStream(db, function() {
    console.log('keys:');
    db.createKeyStream().pipe(process.stdout);
  });

  del.write('foo');
  del.write('bar');
  del.end();
});
