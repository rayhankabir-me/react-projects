import { useContext, useEffect, useState } from "react";
import HeartIconRed from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../context";
export default function AddToFavourite() {
  const [isFavourite, setIsFavourite] = useState(false);
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouriteContext);

  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    if (found) {
      setIsFavourite(true);
    }
  }, [favourites, location]);

  function handleAddFavourite() {
    setIsFavourite(!isFavourite);

    const found = favourites.find((fav) => fav.location === location);

    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
  }

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleAddFavourite}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? HeartIconRed : HeartIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
