import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
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

  return (
    <div>
      <SearchBar />
      {error !== null && (
        <p style={{ color: "red" }}>{error} Please, try again later.</p>
      )}
      {images == [] ? <ErrorMessage /> : <ImageGallery images={images} />}
      {loading && <Loader />}
    </div>
  );
}

export default App;
