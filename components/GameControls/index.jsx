import React from 'react'
import NumBoxesGame from '../NumBoxesGame/NumBoxesGame'
import styles from './GameControls.module.scss'
import { motion } from 'framer-motion'

const GameControls = (props) => {
  const { onOpenClick, onResetClick, isOpened, count, isOpening } = props

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonWrapper} onClick={onOpenClick}>
        <motion.div
          whileHover={{
            scale: isOpening ? 0 : 1.07,
          }}
          className={styles.button}
          animate={{ opacity: isOpening ? 0 : 1, scale: isOpening ? 0 : 1 }}>
          Open Destiny Pack
          <NumBoxesGame count={count} />
        </motion.div>
      </div>
      {/* <button onClick={onOpenClick} disabled={isOpened}>
        Open
      </button>
     */}
      {/* <button onClick={onResetClick} disabled={!isOpened}>
        Reset
      </button> */}
    </div>
  )
}

export default GameControls
