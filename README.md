# mod-reload
Reload Node.js modules a la Python's `reload` command.

## Installation

The usual drill:

```sh
$ npm install qux
```

## Usage

foo.js:
```JS
var reload = require('mod-reload');

function foo() {
  // Gold, Jerry, gold...
}

foo.reload = reload;

module.exports = foo;
```

repl:
```node
> foo = require('./foo')
{ [Function: foo] reload: [Function: reload] }
> bar = foo
{ [Function: foo] reload: [Function: reload] }
> foo = require('./foo')
{ [Function: foo] reload: [Function: reload] }
> bar === foo
true
> foo = foo.reload()
{ [Function: foo] reload: [Function: reload] }
> bar === foo
false
>
```

## Caveat
This is really just a convenience for when I'm working on something in the repl and iterating through lots of changes. It's not intended to be used in production for anything, but then, why would ya?
