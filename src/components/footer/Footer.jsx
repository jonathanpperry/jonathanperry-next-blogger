import styles from "./footer.module.css";
import { FaHeart } from "react-icons/fa";

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <p>jonnyramen</p>
            </div>
            <div className={styles.text}>
                Jonny Ramen creative thoughts agency © All rights reserved.
            </div>
        </div>
    );
}

export default Footer;
