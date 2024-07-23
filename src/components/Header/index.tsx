"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import NavMenu from "../NavMenu";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link className={styles.navListLink} href='/'>
          Karacan
        </Link>
      </div>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <Link className={styles.navListLink} href='/'>
            Ana Sayfa
          </Link>
        </li>
        <li className={styles.navListItem}>
          <Link className={styles.navListLink} href='/about'>
            Hakkımızda
          </Link>
        </li>
        <li className={styles.navListItem}>
          <Link className={styles.navListLink} href='/services'>
            Hizmetler
          </Link>
        </li>
        <li className={styles.navListItem}>
          <Link className={styles.navListLink} href='/contact'>
            İletişim
          </Link>
        </li>
      </ul>
      <div className={styles.mobileNav}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={styles.menuButton}>
          Menü
        </button>
        {isMenuOpen && <NavMenu />}
      </div>
    </nav>
  );
}
