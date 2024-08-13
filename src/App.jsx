import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'

function App() {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://api.unsplash.com/photos?client_id=1FrxQdxZqIzEvaS9vHGUY2G62nXyYi7w7y_S4vo6_gg"
        );
        setImages(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  useEffect(() => {
    if (search === null) return;
    async function fetchImagesByData() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://api.unsplash.com/search/photos?client_id=1FrxQdxZqIzEvaS9vHGUY2G62nXyYi7w7y_S4vo6_gg&query=${search.search}`
        );
        setImages(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchImagesByData();
  }, [search]);

  const onSubmit = (value) => {
    setSearch(value);
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {error !== null && (
        <p style={{ color: "red" }}>{error} Please, try again later.</p>
      )}
      {images == [] ? <ErrorMessage /> : <ImageGallery images={images} />}
      {loading && <Loader />}
    </div>
  );
}

export default App;
