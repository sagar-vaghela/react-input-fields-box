# react-input-fields-box

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-input-fields-box.svg)](https://www.npmjs.com/package/react-input-fields-box) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-input-fields-box
```
## Run
npm start
## Usage
node = 16

## Demo
```jsx
import React from 'react'
import MyComponent from 'react-input-fields-box'
import 'react-input-fields-box/dist/index.css'
const MyComponent = () => {
  const [value, setValue] = React.useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }
  return <ExampleComponent onChange={onChange} value={value} />
}
export default MyComponent

```

## License

MIT © [sagar-vaghela](https://github.com/sagar-vaghela)
