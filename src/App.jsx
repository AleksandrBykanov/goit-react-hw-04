import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [images, setImages] = useState(null);
  
  useEffect(() => {
    async function fetchImages () {
      try {
        const { data } = await axios.get(
          "https://api.unsplash.com/photos?client_id=1FrxQdxZqIzEvaS9vHGUY2G62nXyYi7w7y_S4vo6_gg"
        );
        setImages(data);
      }
      catch (error) {
        console.log(error);
      }
      // finally {}
      
      
    }
    fetchImages();
  }, []);
  


  return (
    <div>
      <SearchBar />
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
