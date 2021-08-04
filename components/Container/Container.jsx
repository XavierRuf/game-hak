import styles from './Container.module.scss'
import Header from '../Header/Header'
import HomeCollection from '../HomeCollection/HomeCollection'
import Footer from '../Footer/Footer'

const Container = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Container
