import Head from 'next/head'
import Container from '../components/Container/Container'
import styles from '../styles/Store.module.scss'
import Image from 'next/image'
import { Modal } from 'antd'
import { useState } from 'react'

import { useRouter } from 'next/router'
const Store = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const router = useRouter()

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
    router.push('/library-home')
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <div>
      <Head>
        <title>Store</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Modal
          title='Checkout'
          visible={isModalVisible}
          onOk={handleOk}
          okText='Confirm'
          onCancel={handleCancel}>
          <p style={{ fontSize: 24 }}>
            Your card ending with 4432 will be immediately charged <b>$1.99</b>
          </p>
          <p></p>
        </Modal>
        <div className={styles.store}>
          <h1 className={styles.title}>Store</h1>

          <div className={styles.card}>
            <Image
              src='/static/img/store/box_destiny.png'
              width={179}
              height={246}
            />

            <div className={styles.text}>
              <h2 className={styles.subtitle}>Get 10x Destiny Packs</h2>
              <h3 className={styles.description}>
                Add 50 Unique Random Samples To Your Library
              </h3>
              <button className={styles.button} onClick={showModal}>
                <svg
                  width='23'
                  height='26'
                  viewBox='0 0 23 26'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M21.0425 15.6212L22.9031 5.39275C23.0374 4.65424 22.5882 3.95099 21.982 3.95099H6.52223L6.16146 1.74746C6.07156 1.19823 5.68473 0.803795 5.23599 0.803795H1.20049C0.678779 0.803795 0.255859 1.33218 0.255859 1.98399V2.77079C0.255859 3.42261 0.678779 3.95099 1.20049 3.95099H3.95106L6.71599 20.8394C6.05452 21.3147 5.60877 22.2058 5.60877 23.2276C5.60877 24.7485 6.59559 25.9814 7.81291 25.9814C9.03022 25.9814 10.017 24.7485 10.017 23.2276C10.017 22.4568 9.7633 21.7604 9.35486 21.2606H17.6065C17.1981 21.7604 16.9443 22.4568 16.9443 23.2276C16.9443 24.7485 17.9312 25.9814 19.1485 25.9814C20.3658 25.9814 21.3526 24.7485 21.3526 23.2276C21.3526 22.1373 20.8454 21.1951 20.1097 20.7489L20.3268 19.5551C20.4612 18.8166 20.0119 18.1134 19.4057 18.1134H8.84086L8.58325 16.5398H20.1213C20.5624 16.5398 20.9447 16.1585 21.0425 15.6212Z'
                    fill='white'
                  />
                </svg>
                Purchase
              </button>
            </div>

            <div className={styles.price}>
              <s>$4.99</s>
              <div>$1.99</div>
            </div>
          </div>

          <div className={styles.soon}>
            <Image
              src='/static/img/store/packs.png'
              width={1074}
              height={1074}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Store
