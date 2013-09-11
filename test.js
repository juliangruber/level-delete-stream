var test = require('tape');
var deleteStream = require('./');
var level = require('level');

test('delete stream', function(t) {
  t.plan(2);

  var db = level(__dirname + '/db');

  db.batch([
    { type: 'put', key: 'foo', value: 'bar' },
    { type: 'put', key: 'bar', value: 'baz' }
  ], function(err) {
    t.error(err);

    var del = deleteStream(db, function() {
      db.createKeyStream()
        .on('data', t.fail)
        .on('end', t.ok.bind(t, true));
    });

    del.write('foo');
    del.write('bar');
    del.end();
  });
});

