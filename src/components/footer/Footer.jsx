import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className="logo">jonnyramen</div>
      <div className="text">
        Jonny Ramen creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
