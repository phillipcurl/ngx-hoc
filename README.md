# ngx-hoc - [https://phillipcurl.github.io/ngx-hoc/]((https://phillipcurl.github.io/ngx-hoc/))
[![Build Status](https://travis-ci.org/phillipcurl/ngx-hoc.svg?branch=master)](https://travis-ci.org/phillipcurl/ngx-hoc)
[![codecov](https://codecov.io/gh/phillipcurl/ngx-hoc/branch/master/graph/badge.svg)](https://codecov.io/gh/phillipcurl/ngx-hoc)
[![npm version](https://badge.fury.io/js/ngx-hoc.svg)](http://badge.fury.io/js/ngx-hoc)
[![devDependency Status](https://david-dm.org/phillipcurl/ngx-hoc/dev-status.svg)](https://david-dm.org/phillipcurl/ngx-hoc?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/phillipcurl/ngx-hoc.svg)](https://github.com/phillipcurl/ngx-hoc/issues)
[![GitHub stars](https://img.shields.io/github/stars/phillipcurl/ngx-hoc.svg)](https://github.com/phillipcurl/ngx-hoc/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/phillipcurl/ngx-hoc/master/LICENSE)

## This is a WIP. Use at your own risk.

## Problem
Angular apps that handle the fetching and displaying of data within multiple components can accumulate a sizeable portion of boilerplate code. Often you have to control the visiblity of a loading view, call a

## Solution
## Installation
## Usage
## Inspiration
## Related
## Thanks
## License

## Demo
https://phillipcurl.github.io/ngx-hoc/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

Higher-order components for Angular apps

## Installation

Install through npm:
```
npm install --save ngx-hoc
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { HocModule } from 'ngx-hoc';

@NgModule({
  imports: [
    HocModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/phillipcurl/ngx-hoc/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/ngx-hoc/bundles/ngx-hoc.umd.js"></script>
<script>
    // everything is exported ngxHoc namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://phillipcurl.github.io/ngx-hoc/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and <% if (isYarnAvailable) { %>[yarn](https://yarnpkg.com/en/docs/install)<% } else { %>NPM<% } %>
* Install local dev dependencies: `<% if (isYarnAvailable) { %>yarn<% } else { %>npm install<% } %>` while current directory is this repo

### Development server
Run `<% if (isYarnAvailable) { %>yarn<% } else { %>npm<% } %> start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `<% if (isYarnAvailable) { %>yarn<% } else { %>npm<% } %> test` to run tests once or `<% if (isYarnAvailable) { %>yarn<% } else { %>npm<% } %> run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
<% if (isYarnAvailable) { %>yarn<% } else { %>npm<% } %> run release
```

## License

MIT
