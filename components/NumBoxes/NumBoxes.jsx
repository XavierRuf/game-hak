import * as React from 'react'
import styles from './NumBoxes.module.scss'

const NumBoxes = (props) => {
  return (
    <div className={styles.number}>
      <span className={styles.count}>{props.count}</span>
    </div>
  )
}

export default NumBoxes
