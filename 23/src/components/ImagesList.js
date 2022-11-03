import { useState, useEffect } from "react";

const ImageList = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [activePage, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`https://picsum.photos/v2/list?page=${activePage}&limit=10`)
      .then((responce) => responce.json())
      .then((data) => {
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
