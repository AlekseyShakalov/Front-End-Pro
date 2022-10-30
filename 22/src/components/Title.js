import PropTypes from "prop-types";

const Title = ({ name, type }) => {
  return <p style={{ fontWeight: type }}>{name}</p>;
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["bold", "normal"]),
};

export default Title;
