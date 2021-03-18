## Usage
### In your terminal
```bash
yarn add stimulus-checkbox
```
### within `app/javascript/controllers/index.js`
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
  <input type="checkbox" data-checkbox-target="box">
</div>
```
