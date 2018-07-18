<p align="center">
  <a title="Go to freesewing.org" href="https://freesewing.org/"><img src="https://freesewing.org/img/logo/black.svg" align="center" width="150px" alt="Freesewing logo"/></a>
</p>
<h4 align="center"><em>&nbsp;<a title="Go to freesewing.org" href="https://freesewing.org/">freesewing</a></em>
<br><sup>a library for made-to-measure sewing patterns</sup>
</h4>
<p align="center">
  <a href="https://travis-ci.org/freesewing/plugin-round"><img src="https://badgen.net/travis/freesewing/plugin-round/master" alt="Travis build"></a>
  <a href="https://www.npmjs.com/package/@freesewing/plugin-round"><img src="https://badgen.net/npm/v/@freesewing/plugin-round" alt="Version"></a>
  <a href="https://www.npmjs.com/package/@freesewing/plugin-round"><img src="https://badgen.net/npm/license/@freesewing/plugin-round" alt="License"></a>
  <a href="https://codecov.io/gh/freesewing/plugin-round"><img src="https://badgen.net/codecov/c/github/freesewing/plugin-round/master" alt="Code coverage"></a>
  <a href="https://deepscan.io/dashboard#view=project&pid=3267&bid=27574"><img src="https://deepscan.io/api/projects/3267/branches/27574/badge/grade.svg" alt="DeepScan grade"></a>
  <a href="https://gitter.im/freesewing/freesewing"><img src="https://badgen.net/badge/chat/on%20Gitter/cyan" alt="Chat on Gitter"></a>
  <a href="https://freesewing.org/patrons/join"><img src="https://badgen.net/badge/become/a%20Patron/FF5B77" alt="Become a Patron"></a>
</p>

# plugin-round

A freesewing plugin to round corners.

## Install

Install this plugin from NPM:

```sh
npm install --save @freesewing/plugin-round
```

## Usage

To load this plugin, add it to your instantiated pattern:

```js
import pattern from '@freesewing/pattern-brian'
import theme from '@freesewing/plugin-theme'
import round from '@freesewing/plugin-round'

pattern.with(theme).with(round);
```

You now have the `round` macro available:

```js
macro("round", {
  from: pointA,
  to: pointC,
  via: pointB,
  radius: 20,
  render: true,
  class: "fabric",
  prefix: "example"
});
```

FIXME: Link to documentation 

## Where to get help

Questions? Stuck? The [freesewing chat room on Gitter](https://gitter.im/freesewing/freesewing)
is the best place to ask for help.