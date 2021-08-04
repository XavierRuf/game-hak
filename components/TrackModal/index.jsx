import React from 'react'
import classnames from 'classnames'

import TrackList from '../TrackList'
import styles from './TrackModal.module.scss'

const TrackModal = (props) => {
  const { tracks, isOpened } = props

  return (
    <div
      className={classnames(styles.modal, {
        [styles.isOpened]: isOpened,
      })}>
      <TrackList tracks={tracks} />
    </div>
  )
}

export default TrackModal
