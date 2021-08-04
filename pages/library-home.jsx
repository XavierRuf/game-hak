import Head from 'next/head'
import SquarePack from '../components/SquarePack/SquarePack'
import Container from '../components/Container/Container'
import styles from '../styles/Library.module.scss'
import LibraryPack from '../components/LibraryPack/LibraryPack'
import NumBoxes from '../components/NumBoxes/NumBoxes'

const LibraryHome = () => {
  const data = [
    {
      title: 'Brass Stones',
      //   href: '/collection/brass-stones',
      src: '/static/img/collections/square_brass_stones.png',
      unlocked: 0,
      count: 52,
    },
    {
      title: 'R&B Jellyfish',
      //   href: '/collection/rb-jellyfish',
      src: '/static/img/collections/square_rb_jellyfish.png',
      unlocked: 0,
      count: 43,
    },
    {
      title: 'Hip-Hop Turtle',
      //   href: '/collection/hiphop-turtle',
      src: '/static/img/collections/square_hiphop_turtle.png',
      unlocked: 0,
      count: 98,
    },
    {
      title: 'Hip-Hop Treasure',
      //   href: '/collection/hiphop-treasure',
      src: '/static/img/collections/square_hiphop_treasure.png',
      unlocked: 0,
      count: 99,
    },
    {
      title: 'House Dragon',
      //   href: '/collection/house-dragon',
      src: '/static/img/collections/square_house_dragon.png',
      unlocked: 0,
      count: 123,
    },
    {
      title: 'Trap Cannon',
      //   href: '/collection/trap-cannon',
      src: '/static/img/collections/square_trap_cannon.png',
      unlocked: 0,
      count: 98,
    },
    {
      title: 'R&B Octopus',
      //   href: '/collection/rb-octopus',
      src: '/static/img/collections/square_rb_octopus.png',
      unlocked: 0,
      count: 52,
    },
    {
      title: 'Trap Cramp',
      //   href: '/collection/trap-cramp',
      src: '/static/img/collections/square_trap_cramp.png',
      unlocked: 0,
      count: 43,
    },
    {
      title: 'Reverse Creatures',
      //   href: '/collection/reverse-creatures',
      src: '/static/img/collections/square_reverse_creatures.png',
      unlocked: 0,
      count: 98,
    },
  ]
  const destinyPackData = {
    title: 'Destiny Pack',
    href: '/game',
    src: '/static/img/collections/square_destiny.png',
    unlocked: 10,
  }

  return (
    <div>
      <Head>
        <title>Library Home Fake</title>
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
                  //   href={element.href}
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

export default LibraryHome
