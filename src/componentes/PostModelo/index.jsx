import styles from "./PostModelo.module.css";
import PropTypes from "prop-types";

export default function PostModelo({ children, fotoCapa, titulo }) {
  return (
    <article className={styles.postModeloContainer}>
      <div
        className={styles.fotoCapa}
        style={{ backgroundImage: `url(${fotoCapa})` }}
      ></div>

      <h2 className={styles.titulo}>{titulo}</h2>

      <div className={styles.postConteudoContaienr}>{children}</div>
    </article>
  );
}

PostModelo.propTypes = {
  children: PropTypes.array.isRequired,
  fotoCapa: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
};
