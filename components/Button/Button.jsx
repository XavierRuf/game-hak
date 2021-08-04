import Link from 'next/link'
import styles from './Button.module.scss'

const Button = ({ props }) => {
  return (
    <Link href={props.route}>
      <a className={styles.button}>
        {props.text}
        <svg
          width='11'
          height='18'
          viewBox='0 0 11 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M10.6446 9.86153L3.7793 16.7538C3.30479 17.2302 2.53749 17.2302 2.06803 16.7538L0.927174 15.6085C0.452661 15.1321 0.452661 14.3618 0.927174 13.8905L5.79346 9.00507L0.927174 4.11965C0.452661 3.64327 0.452661 2.87295 0.927174 2.40164L2.06298 1.24617C2.53749 0.769791 3.30479 0.769791 3.77425 1.24617L10.6396 8.13846C11.1191 8.61484 11.1191 9.38515 10.6446 9.86153Z'
            fill='white'
          />
        </svg>
      </a>
    </Link>
  )
}

export default Button
