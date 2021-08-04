import React from 'react'
import gsap, { Expo, Linear, TimelineMax } from 'gsap'
import Head from 'next/head'

import Container from '../components/Container/Container'
import GameScene from '../components/GameScene'
import TrackModal from '../components/TrackModal'
import GameControls from '../components/GameControls'
import styles from '../styles/Game.module.scss'
import { Howl } from 'howler'

const between = (min, max) => Math.random() * (max - min) + min

const OPENING_SOUND_URL = '/static/sounds/opening.mp3'

const COLORS = { 10: 'FFFFFF', 9: 'C0027A', 8: '0967D6', 7: 'FFFFFF' }

const Game = () => {
  let sound = null
  const [animation, setAnimation] = React.useState(null)
  const [tracks, setTracks] = React.useState([])
  const [isOpened, setIsOpened] = React.useState(false)
  const [isOpening, setIsOpening] = React.useState(false)
  const [insideColor, setInsideColor] = React.useState('FFFFFF')
  const [count, setCount] = React.useState(10)
  console.log(isOpening)

  React.useLayoutEffect(() => {
    if (typeof document !== 'undefined') {
      document.querySelector('body').style.background = 'transparent'
    }
    sound = new Howl({
      src: [OPENING_SOUND_URL],
    })
  })

  const revealItem = async () => {
    const val = Number(between(1.3, 2).toFixed(2))

    setIsOpening(true)

    const { tracks } = await fetch('/api/game').then((x) => x.json())

    setTracks(tracks)

    sound.play()

    // let tl = gsap.timeline() //create the timeline
    // tl.to(animation.scene.rotation, {
    //   x: 1.4,
    //   y: 1.4,
    //   z: 1.4,
    //   duration: 2.3,
    //   ease: Expo.easeInOut,
    // })
    //   .fromTo(
    //     animation.scene.rotation,
    //     { x: 1.4, y: 1.4, z: 1.4 },
    //     { x: 1.0, y: 1.0, z: 1.0, duration: 1, ease: Expo.easeInOut }
    //   )
    //   .fromTo(
    //     animation.scene.rotation,
    //     { x: 1.0, y: 1.0, z: 1.0 },
    //     {
    //       x: 1.2,
    //       y: 1.2,
    //       z: 1.2,
    //       yoyo: true,
    //       repeat: 29,
    //       delay: 0,
    //       duration: 0.1,
    //       ease: Expo.easeInOut,
    //     }
    //   )
    //   .fromTo(
    //     animation.scene.rotation,
    //     { x: 1.0, y: 1.0, z: 1.0 },
    //     {
    //       x: 1.5,
    //       y: 1.5,
    //       z: 1.5,
    //       duration: 10,
    //       ease: Expo.easeInOut,
    //       yoyo: true,
    //     }
    //   )

    let tl2 = gsap.timeline() //create the timeline
    tl2
      .to(animation.settings, {
        delay: 5.2,
        duration: 1.5,
        progress: 0.16,
        ease: Expo.easeOut,
      })
      .to(animation.settings, {
        duration: 3,
        progress: val,
        ease: Expo.easeOut,
      })

    let tl3 = gsap.timeline() //create the timeline
    tl3.to(animation.scene.position, {
      x: 0.2,
      delay: 3.3,
      duration: 0.1,
      yoyo: true,
      repeat: 29,
      ease: Linear.easeInOut,
    })

    setTimeout(() => {
      resetItem()
    }, 10000)
  }

  const resetItem = async () => {
    setCount(count - 1)
    setIsOpened(false)
    setIsOpening(false)

    setTracks([])

    await gsap.to(animation.settings, {
      duration: 2.5,
      progress: 0,
      ease: Expo.easeOut,
    })
  }

  return (
    <Container>
      <Head>
        <title>Game</title>
        <link rel='icon' href='/favicon.ico' />
        <script type='text/javascript' src='/js/ico.js'></script>
      </Head>

      <GameScene
        animation={animation}
        setAnimation={setAnimation}
        isOpened={isOpened}
        surfaceColor={'FFFFFF'}
        insideColor={COLORS[count.toString()]}
        isOpening={isOpening}
      />
      <div className={styles.container}>
        <GameControls
          onOpenClick={revealItem}
          onResetClick={resetItem}
          count={count}
          isOpened={isOpened}
          isOpening={isOpening}
        />
        <TrackModal tracks={tracks} isOpened={isOpened} />
      </div>
    </Container>
  )
}

export default Game
