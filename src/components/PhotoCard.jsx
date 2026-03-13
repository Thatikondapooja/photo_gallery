const PhotoCard = ({ photo, isFavourite, toggleFavourite }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow">
      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-60 object-cover"
      />

      <div className="flex justify-between items-center p-3">
        <p className="text-sm font-medium">{photo.author}</p>

        <button
          onClick={() => toggleFavourite(photo.id)}
          className="text-red-500 text-xl"
        >
          {isFavourite ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;