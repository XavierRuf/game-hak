import React from 'react'

import styles from './Track.module.scss'

const Track = (props) => {
  const { name } = props

  return (
    <div className={styles.card}>
      <div className={styles.trackName}>I'm a {name}</div>
    </div>
  )
}

export default Track
