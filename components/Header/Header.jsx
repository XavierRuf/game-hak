import styles from './Header.module.scss'
import Link from 'next/link'
import { constants } from '../../const'

const Header = () => {
  return (
    <header className={styles.header}>
      <a href='/'>
        <div className={styles.logo}>
          <svg
            width='56'
            height='34'
            viewBox='0 0 56 34'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g clipppath='url(#clip0)'>
              <path
                d='M46.6455 2.37184C29.8038 1.6634 12.9621 12.9369 5.08001 27.8758C4.61817 28.7691 5.54185 28.5535 5.14159 29.4775C13.5163 22.0235 23.1841 18.6045 35.2843 18.6045C38.8866 18.6045 40.7956 19.0357 44.1824 19.8057L46.6455 2.37184Z'
                fill='white'
              />
              <path
                d='M36.1156 3.38832C34.9148 1.4478 32.7903 0.0925141 30.3272 0.000108436C27.8641 -0.123099 25.6472 1.01657 24.2617 2.86469C26.6633 2.74148 27.587 6.16049 30.0501 6.25289C32.4825 6.3761 34.7301 5.23643 36.1156 3.38832Z'
                fill='white'
              />
              <path
                d='M35.9312 15.4011C36.7009 17.1876 36.4854 19.3745 35.0999 21.2843C33.7451 23.1632 31.5591 24.3336 29.3423 24.5185C30.851 22.7627 28.7881 20.545 30.1736 18.6353C31.5283 16.7564 33.7144 15.6167 35.9312 15.4011Z'
                fill='white'
              />
              <path
                d='M55.0203 12.7519C54.2506 17.5262 49.7553 20.6988 45.0446 19.8363C40.303 18.9739 37.101 14.3844 37.9015 9.5793C38.6712 4.80501 43.1664 1.63241 47.8772 2.49486C52.588 3.35732 55.79 7.9468 55.0203 12.7519Z'
                fill='white'
              />
              <path
                d='M5.63444 29.2002C5.54207 29.077 4.12576 29.4775 2.83261 28.2762C2.09367 27.5985 0 28.5534 0 28.5534C0.277103 27.9374 3.01735 26.2741 4.92628 26.0585C7.63574 25.7504 8.71336 23.0091 8.71336 23.0091'
                fill='white'
              />
              <path
                d='M4.74171 29.1386C4.83408 29.1694 4.46461 30.3091 5.35749 31.11C5.75775 31.4796 5.60381 33.3277 5.60381 33.3277C6.12723 32.8965 7.32801 30.2167 7.45116 28.6458C7.60511 26.4589 9.91431 24.6416 9.91431 24.6416'
                fill='white'
              />
            </g>
            <defs>
              <clipPath id='clip0'>
                <rect width='55.1436' height='33.3585' fill='white' />
              </clipPath>
            </defs>
          </svg>
          <div className={styles.text}>Sample Ocean</div>
        </div>
      </a>

      <nav className={styles.nav}>
        <ul className={styles.list}>
          {constants.headerNav.map((item, index) => (
            <li
              className={
                index == constants.headerNav.length - 1
                  ? styles.active
                  : styles.item
              }
              key={item.href}>
              <Link href={item.href}>
                <a>{item.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
