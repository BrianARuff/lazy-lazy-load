# lazy-lazy-load

> lazy loading for lazy devs

[![NPM](https://img.shields.io/npm/v/lazy-lazy-load.svg)](https://www.npmjs.com/package/lazy-lazy-load) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save lazy-lazy-load
```

## Usage

```jsx
import React, { Component } from 'react'

import LazyComponent from 'lazy-lazy-load'

class Example extends Component {
  render () {
    return (
      LazyComponent("./path/to/Component", <FallBackComponent/>);
    )
  }
}

className, style, and key are optional attributes to the LazyComponent

```

## License

MIT © [BrianARuff](https://github.com/BrianARuff)
# lazy-lazy-load
