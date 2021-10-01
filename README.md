
# level-delete-stream

A deleteStream for LevelUp. **Note:** `level(up)` and friends now have a builtin & much faster alternative: [`db.clear()`](https://github.com/Level/level#clear).

[![build status](https://secure.travis-ci.org/juliangruber/level-delete-stream.png)](http://travis-ci.org/juliangruber/level-delete-stream)

## Example

Wipe a LevelDB in a streaming fashion by piping a keyStream to a deleteStream!

```js
var deleteStream = require('level-delete-stream');
var level = require('level');

var db = level(__dirname + '/db');

db.createKeyStream().pipe(deleteStream(db, function(err) {
  console.log('the db is empty now!');
}));
```

## API

### deleteStream(db, fn)

For every key written to it, delete the value from `db` and call `fn`
(with a possible error) when done.

## Installation

With [npm](https://npmjs.org) do:

```bash
npm install level-delete-stream
```

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
