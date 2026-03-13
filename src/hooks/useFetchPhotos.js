import { useEffect, useState } from "react";

export const useFetchPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  async function fetchPhotos(){
      try {
        const res = await fetch("https://picsum.photos/v2/list?limit=30");
        console.log("fetch response:", res);
        if (!res.ok) {
          throw new Error("Failed to fetch photos");
        }

        const data = await res.json();
        console.log("fetched data:", data);
        setPhotos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return { photos, loading, error };
};