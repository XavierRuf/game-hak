import Head from 'next/head'
import Container from '../../components/Container/Container'
import styles from '../../styles/Collection.module.scss'
import SquarePack from '../../components/SquarePack/SquarePack'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer'
import AudioContainer from '../../components/AudioContainer/AudioContainer'
import { useState } from 'react'
import { getData } from '../../const'

const Collection = (props) => {
  const [playing, setPlaying] = useState('')

  return (
    <div>
      <Head>
        <title>Collection</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <div className={styles.container}>
          <div>
            <SquarePack
              active={props.data.count > 0}
              width={260}
              height={260}
              src={props.data.src}
            />
          </div>
          <div className={styles.right}>
            <div className={styles.title}>{props.data.title}</div>
            <div className={styles.subtitle}>Collection</div>
            <div className={styles.count}>
              {props.data.unlocked} / {props.data.count}
            </div>
            <div
              className={styles.container}
              style={{ width: 420, paddingTop: 16 }}>
              <ProgressBar
                count={props.data.unlocked}
                fullCount={props.data.count}
              />
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.collection}>
            {props.data.audioData.map((element, index) => {
              return (
                <AudioContainer
                  playing={playing}
                  changePlaying={setPlaying}
                  key={index}
                  src={element.src}
                  title={element.title}
                  active={element.src !== '/static/samples/silent.mp3'}
                  id={element.title + index}
                />
              )
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}

export async function getStaticPaths() {
  const data = getData()
  let onlyIds = []
  data.map((value) => {
    // let parts = value.href.split('/')
    onlyIds.push(value.href)
  })
  return {
    paths: onlyIds,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const data = getData()
  let dataSingle = {}
  data.forEach((entry) => {
    if (entry.href.includes(params.collection)) {
      dataSingle = entry
    }
  })
  return {
    props: {
      collection: params.collection,
      data: dataSingle,
    },
  }
}

export default Collection
