/** Este es un componente de servidor, por lo que no se puede hacer el fetch
 * como antes se hacía (useState, useEffect), eso solo funciona en los componenentes
 * que se renderizan en el cliente. En las nuevas versiones de React, por lo tanto en Next también,
 * si los componentes se encuentran en la carpeta app, se renderizaran en el servidor y el fetch de datos
 * se hace mediante una función y creando el componente funcional como async
 *  */

import Link from "next/link";
import { LikeButton } from "./LikeButton";
import styles from "./postCard.module.css";

/**
 * Función que hace el fetch de datos
 * @returns los datos solicitados transformados en json
 */
const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};

export async function ListOfPosts() {
  const posts = await fetchPosts();

  return posts.slice(0, 5).map((post) => (
    <article key={post.id} className={styles.postCard}>
      <Link className={styles.postCard__link} href={`/posts/${post.id}`}>
        <h2 className={styles.postCard__title}>{post.title.toUpperCase()}</h2>
        <p>{post.body}</p>
        <LikeButton id={post.id} />
      </Link>
    </article>
  ));
}
