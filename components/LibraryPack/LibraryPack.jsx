import * as React from 'react'

import SquarePack from '../SquarePack/SquarePack'
import styles from './LibraryPack.module.scss'
import ProgressBar from '../ProgressBar/ProgressBar'

const LibraryPack = (props) => {
  return (
    <div className={styles.container}>
      <a href={props.href}>
        <SquarePack
          active={props.unlocked > 0}
          width={260}
          height={260}
          src={props.src}
        />
      </a>
      <div className={styles.bottomContainer}>
        <div className={styles.progressBar}>
          <ProgressBar count={props.unlocked} fullCount={props.count} />
        </div>
        <div className={styles.count}>
          {props.unlocked} / {props.count}
        </div>
      </div>
    </div>
  )
}

export default LibraryPack
