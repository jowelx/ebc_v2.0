import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const Modal = ({ id, title, chat = false, children }) => {
  return (
    <div
      class="modal fade"
      id={id}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header row">
            <h2
              class={`modal-title fs-5 ${chat ? "col-8" : "col-12"}`}
              id="exampleModalLabel"
            >
              {title}
            </h2>
            {chat && (
              <div className="col-4 me-auto d-flex justify-content-between">
                <i class={`bi bi-camera2 ${styles.camera2}`}></i>
                <i class={`bi bi-images ${styles.images}`}></i>
                <i class={`bi bi-gear ${styles.gear}`}></i>
                <i class={`bi bi-question-circle ${styles["question"]}`}></i>
              </div>
            )}
          </div>
          <div class="modal-body">{children}</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.prototype = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  chat: PropTypes.bool,
};

export default Modal;
