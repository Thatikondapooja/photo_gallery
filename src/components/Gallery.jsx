import { useReducer, useState, useEffect, useMemo, useCallback } from "react";
import { useFetchPhotos } from "../hooks/useFetchPhotos";
import { favouriteReducer } from "../reducer/favouriteReducer";
import PhotoCard from "./PhotoCard";
import SearchBar from "./SearchBar";

const Gallery = () => {
  const { photos, loading, error } = useFetchPhotos();

  const [search, setSearch] = useState("");

  const [favourites, dispatch] = useReducer(
    favouriteReducer,
    JSON.parse(localStorage.getItem("favourites")) || []
  );

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const toggleFavourite = (id) => {
    dispatch({ type: "TOGGLE_FAVOURITE", payload: id });
  };

  const handleSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase())
    );
  }, [photos, search]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10">{error}</p>;

  return (
    <div className="p-4 max-w-6xl mx-auto">

      <SearchBar search={search} setSearch={handleSearch} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isFavourite={favourites.includes(photo.id)}
            toggleFavourite={toggleFavourite}
          />
        ))}
      </div>

    </div>
  );
};

export default Gallery;