import Link from 'next/link'
import styles from './AudioContainer.module.scss'
import AudioPlayer from '../AudioPlayer/AudioPlayer'

const AudioContainer = (props) => {
  return (
    <div
      className={styles.container}
      style={{
        pointerEvents: props.active ? 'auto' : 'none',
        width: 260,
        opacity: props.active ? 1 : 0.2,
      }}>
      <AudioPlayer
        wavesColor={'#3870FF'}
        playing={props.playing}
        onClick={props.onClick}
        src={props.src}
        active={props.active}
        changePlaying={props.changePlaying}
        title={props.title}
        id={props.id}
      />
    </div>
  )
}

export default AudioContainer
