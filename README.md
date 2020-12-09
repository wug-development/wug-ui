# Wug UI
组件库

## Installation
```shell
npm i wug-ui -S

# for Vue 1.x
npm i wug-ui@1 -S
```

## Usage

Import all components.

```javascript
import Vue from 'vue';
import Wug from 'wug-ui';
import 'wug-ui/lib/style.css';

Vue.use(Wug);
```

Or import specified component. (Use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component))

```javascript
import { Cell, Checklist } from 'wug-ui';

Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);
```



Equals to

```javascript
import Vue from 'vue';
import Wug from 'wug-ui';
import 'wug-ui/lib/style.css';

Vue.use(Wug);

// import specified component

import WGRadio from 'wug-ui/lib/radio';
import 'wug-ui/lib/radio/style.css';

Vue.component(WGRadio.name, WGRadio);
```

## babel-plugin-component
- Auto import css file
- Modular import component

Installation
```shell
npm i babel-plugin-component -D
```

Usage

.babelrc
```json
{
  "plugins": ["other-plugin", ["component", [
    { "libraryName": "wug-ui", "style": true }
  ]]]
}
```

## Development
```
npm run serve
```

## License
MIT
