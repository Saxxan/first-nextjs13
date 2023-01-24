import Link from "next/link";
import styles from "./Navigation.module.css";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Posts",
    route: "/posts",
  },
];

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul>
        {links.map((link) => (
          <li key={link.route}>
            <Link className={styles.navigation__link} href={link.route}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
