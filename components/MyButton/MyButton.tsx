import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function MyButton() {
    return (
      <div className="container-sm flex-column d-flex ">
        <button className={styles.mybutton1}> First payproff Button</button>
        <button className={styles.mybutton2}> Second payproff Button</button>
        <button className={styles.mybutton3}> Third payproff Button <i className="bi bi-exclamation-octagon"></i></button>
      </div>
    )
  }
  

  