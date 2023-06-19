import React from 'react'
import styles from './styles.module.css'
export const ExampleComponent = ({ onChange, value }) => {
  console.log('data', value)
  return (
    <div className={styles.test}>
      <input type='text' onChange={onChange} value={value} />
    </div>
  )
}
