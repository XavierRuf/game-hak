import React from 'react'

import Button from '../Button/Button'
import GameScene from '../GameScene'
import styles from './Preview.module.scss'
import { constants } from '../../const'

const Preview = () => {
  const [animation, setAnimation] = React.useState(null)

  return (
    <div className={styles.preview}>
      <div className={styles.text}>
        <h1 className={styles.title}>
          Adventure For <br /> Music Makers
        </h1>

        <p className={styles.subtitle}>
          Explore the underwater world of Premium Samples. Unique. Fascinating.
          Royalty-free.
        </p>

        <Button props={constants.previewButton} />
      </div>

      <div className={styles.canvas}>
        <GameScene
          animation={animation}
          setAnimation={setAnimation}
          isWrapped={true}
          surfaceColor='5A5A61'
          backgroundColor='transparent'
        />
      </div>
    </div>
  )
}

export default Preview
