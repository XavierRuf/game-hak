import * as React from 'react'

import styles from './ProgressBar.module.scss'

const ProgressBar = (props) => {
  const percentage = props.count / props.fullCount

  let widthPercentage = (percentage * 100).toString() + '%'

  if (props.count > 0 && percentage < 0.05) {
    widthPercentage = '5%'
  }

  return (
    <div style={props.style} className={styles.outerDiv}>
      <div style={{ width: widthPercentage }} className={styles.innerDiv}></div>
    </div>
  )
}

export default ProgressBar
