import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import { useEffect, useState} from "react";
import axios from "axios";
import './App.css'

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
	const [modalImage, setModalImage] = useState('');
	const [altDescription, setAltDescription] = useState('');
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (search === null) return;
    async function fetchImagesByData() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://api.unsplash.com/search/photos?client_id=1FrxQdxZqIzEvaS9vHGUY2G62nXyYi7w7y_S4vo6_gg&query=${search.search}&per_page=12&page=${page}`
        );
        setImages((images) => [...images, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchImagesByData();
  }, [search, page]);

  const onSubmit = (value) => {
    setImages([]);
    setSearch(value);
  };

  const loadMore = () => {
    setPage(page + 1)
  };

  const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const modalData = (src, alt) => {
    setModalImage(src);
		setAltDescription(alt);
	};

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {error !== null && (
        <p style={{ color: "red" }}>{error} Please, try again later.</p>
      )}
      {images == [] ? <ErrorMessage /> : <ImageGallery images={images} openModal={openModal} modalData={modalData} />}
      {loading && <Loader />}
      {totalPages > page &&<LoadMoreBtn loadMore={loadMore}/>}
      <ImageModal modalIsOpen={modalIsOpen} closeModal={closeModal} src={modalImage} alt={altDescription}/>
    </div>
  );
}

export default App;
