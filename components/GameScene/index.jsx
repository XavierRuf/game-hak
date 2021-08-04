import React from 'react'
import classnames from 'classnames'

import styles from './GameScene.module.scss'

const GAME_SCENE_ID = 'game-scene-container'

const GameScene = (props) => {
  const {
    animation,
    setAnimation,
    isWrapped,
    isOpened,
    isOpening,
    surfaceColor = '5e6262',
    backgroundColor = '151616',
    insideColor = 'FFFFFF',
  } = props
  console.log(isOpening)
  const sceneWrapperRef = React.useRef()

  let targetMouseX = 0,
    targetMouseY = 0,
    mouseX = 0,
    mouseY = 0
  const sign = (n) => (n === 0 ? 1 : n / Math.abs(n))

  const onMouseMove = (event) => {
    if (!isOpening && !isOpened && animation) {
      targetMouseX =
        (2 * (event.clientX - animation.width / 2)) / animation.width
      targetMouseY =
        (2 * (event.clientY - animation.height / 2)) / animation.height
    }
  }

  const onTouchMove = (event) => {
    if (!isOpening && !isOpened && animation) {
      targetMouseX = (event.touches[0].clientX / animation.width) * 2 - 1

      targetMouseY = (event.touches[0].clientY / animation.height) * 2 - 1
    }
  }

  const updateCompStyles = () => {
    if (typeof window !== 'undefined' && sceneWrapperRef) {
      const { current: sceneRef } = sceneWrapperRef
      if (sceneRef) {
      }
    }
  }

  React.useEffect(() => {
    updateCompStyles()
  }, [animation])

  React.useEffect(() => {
    // if (isOpening) {
    //   document.removeEventListener('mousemove', onMouseMove)
    //   document.removeEventListener('touchmove', onTouchMove)
    // } else {
    //   document.addEventListener('mousemove', onMouseMove)
    //   document.addEventListener('touchmove', onTouchMove)
    // }
  }, [isOpening])

  React.useLayoutEffect(() => {
    if (!animation) {
      console.log('new animation')
      const newAnimation = new explosion.default(GAME_SCENE_ID, {
        surface: surfaceColor,
        inside: insideColor,
        background: backgroundColor,
        onLoad: () => {},
      })
      newAnimation.camera.position.z = isWrapped ? 8 : 6
      setAnimation(newAnimation)
    } else {
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('touchmove', onTouchMove)
    }
    draw()
  }, [animation, isWrapped])

  const draw = () => {
    if (animation) {
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05
      const ta = Math.abs(mouseX)
      const taY = Math.abs(mouseY)

      animation.scene.rotation.x =
        Math.PI / 2 - taY * (2 - taY) * Math.PI * sign(mouseY)
      animation.scene.rotation.y =
        Math.PI / 2 - ta * (2 - ta) * Math.PI * sign(mouseX)
      animation.scene.rotation.z =
        Math.PI / 2 - ta * (2 - ta) * Math.PI * sign(mouseX)
    }

    window.requestAnimationFrame(draw)
  }

  const renderScene = (className) => {
    return (
      <div
        id={GAME_SCENE_ID}
        className={classnames(styles.scene, className)}
        style={{ transform: isWrapped ? `translate(-34%, -32%)` : undefined }}
      />
    )
  }

  return isWrapped ? (
    <div className={styles.sceneWrapper} ref={sceneWrapperRef}>
      {renderScene(styles.sceneWrapped)}
    </div>
  ) : (
    renderScene()
  )
}

export default GameScene
