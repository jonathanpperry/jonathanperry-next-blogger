import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

function PostCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className="imgContainer">
          <Image
            className={styles.img}
            src="/post.png"
            alt=""
            fill
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Desc</p>
        <Link className={styles.link} href={"/blog/post"}>
          READ MORE
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
