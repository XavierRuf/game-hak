import React from 'react'
import SquarePack from '../SquarePack/SquarePack'
import styles from './HomeCollection.module.scss'
import Tilt from 'react-tilt'

const data = [
  {
    href: '/collection/brass-stones',
    src: '/static/img/collections/square_brass_stones.png',
  },
  {
    href: '/collection/hiphop-treasure',
    src: '/static/img/collections/square_hiphop_treasure.png',
  },
  {
    href: '/collection/rb-octopus',
    src: '/static/img/collections/square_rb_octopus.png',
  },
]

const HomeCollection = (props) => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
        Our Latest <span>Collection</span>
      </h1>
      <div className={styles.pack}>
        {data.map((element, index) => (
          <Tilt key={index} options={{ scale: 1 }}>
            <a href={element.href}>
              <SquarePack
                active={element.classes}
                src={element.src}
                width={260}
                height={260}
              />
            </a>
          </Tilt>
        ))}
      </div>
    </div>
  )
}

export default HomeCollection
