import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as CloseIcon } from "../assets/icons/closeIcon.svg";

const StyledAlert = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 0px;
  margin-top: 20px;
  font-size: 18px;
  line-height: 24.55px;
  text-align: center;
  background: ${(props) => {
    switch (props.color) {
      case "primary":
        return "#605DEC";
      case "error":
        return "#EB5757";
      case "warning":
        return "#FFD12F";
    }
  }};
  color: ${(props) => (props.color === "warning" ? "#1513A0" : "#F6F6FE")};
`;

const StyledButton = styled.button`
  position: absolute;
  right: 32px;
  top: 16px;
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  cursor: pointer;
`;

const StyledCloseIcon = styled(CloseIcon)`
path {
  fill:${(props) => (props.color === "warning" ? "#1513A0" : "#F6F6FE")};
`;

const Alert = ({ color, children, onClose }) => {
  const alertProps = {
    color,
    children,
    onClose,
  };

  return (
    <StyledAlert {...alertProps} color={color}>
      {children}
      <StyledButton onClick={onClose}>
        <StyledCloseIcon color={color} />
      </StyledButton>
    </StyledAlert>
  );
};

Alert.propTypes = {
  onClose: PropTypes.func,
  color: PropTypes.oneOf(["primary", "error", "warning"]),
  children: PropTypes.node.isRequired,
};

export default Alert;
