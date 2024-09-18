import Links from "./links/Links";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Perry</div>
      <div>
        <Links />
      </div>
    </div>
  );
}

export default Navbar;
