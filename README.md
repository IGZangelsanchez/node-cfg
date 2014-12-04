Node-cfg
===================================

Introduction
------------

Node-cfg is a configuration helper to make the daily work a bit easier.

It lets you define a set of configuration values for different deployment environments (dev, test, qa, staging, production, etc...).

* *Simple* - Get started fast
* *Powerful* - For enterprise deployment
* *Lightweight* - Small file and memory footprint

Quick Start
---------------
The following examples are in JSON format.

**Install node-cfg in your application and create the default config file.**

```bash
$ npm install node-cfg
$ mkdir config
$ vi config/default.json
```

```json
{
  "db": {
    "conn": "mongodb://127.0.0.1:27017/app"
  }
}
```

**Edit config overrides for production deployment:**

```bash
$ vi config/production.json
```

```json
{
  "db": {
    "conn": "mongodb://10.1.0.22:27017/app"
  }
}
```

**Use node-cfg in your code:**
```js
var config = require('node-cfg');
...
db.connect(config.db.conn, ...);
```

**Start your app server:**
```bash
$ export NODE_ENV=production
$ node app.js
```

Running in this configuration, the `db.conn` element will come from the `production.json` file.

License
-------

May be freely distributed under the [MIT license](https://raw.githubusercontent.com/IGZangelsanchez/node-cfg/master/LICENSE).

Copyright (c) 2010-2014 Intelygenz
