import React, { useState } from 'react'

import { ExampleComponent } from 'react-input-fields-box'
import 'react-input-fields-box/dist/index.css'

const App = () => {
  const [value, setValue] = useState("")
  const onChange = (e) => {
    setValue(e.target.value)
  }
  return <ExampleComponent onChange={onChange} value={value} />
}

export default App
