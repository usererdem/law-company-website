import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";

export default function NavMenu() {
  return (
    <motion.div
      className={styles.menu}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}>
      <ul className={styles.menuList}>
        <li>
          <Link href='/'>Ana Sayfa</Link>
        </li>
        <li>
          <Link href='/about'>Hakkımızda</Link>
        </li>
        <li>
          <Link href='/services'>Hizmetler</Link>
        </li>
        <li>
          <Link href='/contact'>İletişim</Link>
        </li>
      </ul>
    </motion.div>
  );
}
