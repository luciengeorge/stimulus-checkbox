![License: MIT](https://img.shields.io/github/license/lucien-george/stimulus-checkbox)
![](https://img.shields.io/npm/v/stimulus-checkbox)
![](https://github.com/lucien-george/stimulus-checkbox/workflows/Node/badge.svg)

[![https://nodei.co/npm/stimulus-checkbox.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/stimulus-checkbox.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/stimulus-checkbox)

## Usage

### Installation

```bash
yarn add stimulus-checkbox
```

### Register the controller to your StimulusJS application

```js
import {Application} from '@hotwired/stimulus'
import * as Checkbox from 'stimulus-checkbox'

const application = Application.start()
application.register('checkbox', Checkbox)
```

### within your view

```html
<div data-controller="checkbox">
  <input
    type="checkbox"
    data-checkbox-target="btn"
    data-action="change->checkbox#toggle"
  />
  <input
    type="checkbox"
    data-checkbox-target="box"
    data-action="change->checkbox#toggleOne"
  />
</div>
```
