 [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Usage
### Installation
```bash
yarn add stimulus-checkbox
```
### Register the controller to your StimulusJS application
```js
import { Application } from 'stimulus';
const application = Application.start();

import Checkbox from 'stimulus-checkbox';
application.register('checkbox', Checkbox);
```
### within your view
```html
<div data-controller="checkbox">
  <input type="checkbox" data-checkbox-target="btn" data-action="change->checkbox#toggle">
  <input type="checkbox" data-checkbox-target="box" data-action="change->checkbox#toggleOne">
</div>
```
