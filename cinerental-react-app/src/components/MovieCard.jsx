/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { MovieContext } from "../context";
import { getImageUrl } from "../utils/utils";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { cartMovie, setCartMovie } = useContext(MovieContext);

  function handleModalClose() {
    setSelectedMovie(null);
    setShowModal(false);
  }
  function handleMovieSelection(movie) {
    setSelectedMovie(movie);
    setShowModal(true);
  }
  function handleAddToCart(event, movie) {
    event.preventDefault();
    event.stopPropagation();
    const found = cartMovie.find((item) => {
      return item.id === movie.id;
    });

    if (!found) {
      setCartMovie([...cartMovie, movie]);
      toast.success(`The movie added to the cart...`, {
        position: "bottom-right",
      });
    } else {
      toast.error(`The movie added already cart!`, {
        position: "bottom-right",
      });
    }
  }
  return (
    <>
      {showModal && (
        <MovieDetailsModal
          onClose={handleModalClose}
          movie={selectedMovie}
          handleAddCart={handleAddToCart}
        />
      )}
      <a href="#" onClick={() => handleMovieSelection(movie)}>
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
          <img
            className="w-full object-cover"
            src={getImageUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </figure>
      </a>
    </>
  );
}
