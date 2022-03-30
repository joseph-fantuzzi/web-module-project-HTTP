import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { baseURL } from "./EditMovieForm";
import axios from "axios";

const initialAddMovie = {
  title: "",
  director: "",
  genre: "",
  metascore: 0,
  description: "",
};

const AddMovieForm = (props) => {
  const { push } = useHistory();
  const [addMovie, setAddMovie] = useState(initialAddMovie);
  const { setMovies } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddMovie({
      ...addMovie,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(baseURL, addMovie)
      .then((res) => {
        setMovies(res.data);
        push("/movies");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="col">
      <div className="modal-content">
        <form>
          <div className="modal-header">
            <h4 className="modal-title">
              Add <strong>{addMovie.title}</strong>
            </h4>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Title</label>
              <input
                name="title"
                type="text"
                className="form-control"
                value={addMovie.title}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Director</label>
              <input
                name="director"
                type="text"
                className="form-control"
                value={addMovie.director}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Genre</label>
              <input
                name="genre"
                type="text"
                className="form-control"
                value={addMovie.genre}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Metascore</label>
              <input
                name="metascore"
                type="number"
                className="form-control"
                value={addMovie.metascore}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                className="form-control"
                value={addMovie.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <input type="submit" className="btn btn-info" value="Add" onClick={handleSubmit} />
            <Link to={`/movies`}>
              <input type="button" className="btn btn-default" value="Cancel" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovieForm;
