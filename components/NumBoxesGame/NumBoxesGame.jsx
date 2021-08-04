import * as React from 'react'
import styles from './NumBoxesGame.module.scss'

const NumBoxesGame = (props) => {
  return (
    <div className={styles.number}>
      <span className={styles.count}>{props.count}</span>
    </div>
  )
}

export default NumBoxesGame
