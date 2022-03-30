import React from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { baseURL } from "./EditMovieForm";

const DeleteMovieModal = (props) => {
  const { movie, deleteMovie, setModal } = props;
  const { push } = useHistory();
  const { id } = useParams();

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`${baseURL}/${id}`)
      .then((res) => {
        deleteMovie(movie.id);
        push("/movies");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div id="deleteEmployeeModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <form>
            <div className="modal-header">
              <h4 className="modal-title">Delete {movie.title}</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
                onClick={() => setModal(false)}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete these Records?</p>
              <p className="text-warning">
                <small>This action cannot be undone.</small>
              </p>
            </div>
            <div className="modal-footer">
              <input
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                value="Cancel"
                onClick={() => setModal(false)}
              />
              <input
                type="submit"
                className="btn btn-danger"
                value="Delete"
                onClick={handleDelete}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteMovieModal;
