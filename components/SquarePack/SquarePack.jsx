import Link from 'next/link'
import styles from './SquarePack.module.scss'
import Image from 'next/image'

const SquarePack = (props) => {
  let classes = [styles.container]
  if (props.active) {
    classes.push(styles.active)
  }
  return (
    <div className={classes.join(' ')}>
      <Image src={props.src} width={props.width} height={props.height} />
    </div>
  )
}

export default SquarePack
