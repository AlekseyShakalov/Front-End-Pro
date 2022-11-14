import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <div className="not-found">
        <p>Oops, something went wrong</p>
        <h3>Page not found</h3>
        <Link to="/Home">Go to Home page</Link>
      </div>
    </div>
  );
};

export default NotFound;
