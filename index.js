var through = require('through');
var once = require('once');

module.exports = deleteStream;

function deleteStream(db, fn) {
  fn = once(fn);

  var ws = db.createWriteStream();
  ws.on('error', fn);

  var tr = through(function(key) {
    this.queue({ type: 'del', key: key });
  }, function() {
    ws.on('close', fn);
    ws.end();
  });

  tr.pipe(ws);

  return tr;
}

