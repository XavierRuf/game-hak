import Head from 'next/head'
import SquarePack from '../components/SquarePack/SquarePack'
import Container from '../components/Container/Container'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import styles from '../styles/Library.module.scss'
import LibraryPack from '../components/LibraryPack/LibraryPack'
import NumBoxes from '../components/NumBoxes/NumBoxes'
import { getData } from '../const'

const Library = () => {
  const data = getData()

  const destinyPackData = {
    title: 'Destiny Pack',
    href: '/game',
    src: '/static/img/collections/square_destiny.png',
    unlocked: 7,
  }

  return (
    <div>
      <Head>
        <title>Library</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h1 className={styles.title}>My Library</h1>
            <a href='/game'>
              <SquarePack
                active={destinyPackData.unlocked > 0}
                width={260}
                height={260}
                src='/static/img/collections/square_destiny.png'
              />
              {destinyPackData.unlocked > 0 && (
                <NumBoxes count={destinyPackData.unlocked} />
              )}
            </a>
          </div>

          {/* Sample square */}
          <div className={styles.packLine}>
            {data.map((element) => {
              return (
                <LibraryPack
                  key={`${element.count}_${element.src}`}
                  href={element.href}
                  src={element.src}
                  unlocked={element.unlocked}
                  count={element.count}
                />
              )
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Library
