import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
    title: "About Page",
    description: "About description",
};

function AboutPage() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h2 className={styles.subtitle}>About Me</h2>
                    <h1 className={styles.title}>
                        I create digital experiences that are bigger, bolder, braver, and better.
                    </h1>
                    <p className={styles.desc}>
                        I create digital ideas that are bigger, bolder, braver and better. I believe
                        in good ideas, flexibility, and precision. I provide a wide range of web and
                        software development services.
                    </p>
                    <div className={styles.boxes}>
                        <div className={styles.box}>
                            <h1>6+</h1>
                            <p>Years of experience</p>
                        </div>
                        <div className={styles.box}>
                            <h1>200+</h1>
                            <p>Github Projects</p>
                        </div>
                        <div className={styles.box}>
                            <h1>1500+</h1>
                            <p>LinkedIn Connections</p>
                        </div>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src="/mepic.jpg"
                        alt="Picture of the author"
                        fill
                        className={styles.img}
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
