import { useState, useEffect } from "react";
import axios from "helpers/axios";

const ImageList = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [activePage, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios.get(`/v2/list?page=${activePage}&limit=10`).then((data) => {
      setImages([...images, ...data]);
      setLoading(false);
    });
  }, [activePage]);

  const handleShowMore = () => setPage(activePage + 1);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Image Gallery</h1>
      <ul>
        {images.map(({ id, download_url, author }) => (
          <li key={id}>
            <img src={download_url} alt={author} />
          </li>
        ))}
      </ul>
      <button onClick={handleShowMore}>Show more</button>;
    </>
  );
};

export default ImageList;
