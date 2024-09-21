import Link from "next/link";
import styles from "./footer.module.css";
import { FaDiscord } from "react-icons/fa6";

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link href="https://discord.com/users/500700533368160292">
                    <FaDiscord />: jonnyramen
                </Link>
            </div>
            <div className={styles.text}>
                Jonny Ramen creative thoughts agency © All rights reserved.
            </div>
        </div>
    );
}

export default Footer;
