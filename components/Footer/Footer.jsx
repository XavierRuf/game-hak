import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}> Terms Of Use | Privacy Policy</div>
      <div className={styles.bottom}>© 2020, Sample Ocean</div>
    </footer>
  )
}

export default Footer
