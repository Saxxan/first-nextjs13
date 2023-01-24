"use client";
/**
 * Al poner un string "use client" señalas que el componente deberá renderizarse
 * en el cliente, después de haberse renderizado en el servidor. Para incluir las dependencias que
 * necesita y completar su funcionalidad.
 */

import { useState } from "react";

export function LikeButton(props) {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)}>{liked ? "❤️" : "🤍"}</button>
  );
}
