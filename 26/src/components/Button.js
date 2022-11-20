import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButtonBase = styled.button`
  display: block;
  height: ${(props) => (props.size === "small" ? "40px" : "48px")};
  width: ${(props) => {
    switch (props.size) {
      case "large":
        return "81px";
      case "medium":
        return "76px";
      case "small":
        return "68px";
    }
  }};
  padding: ${(props) => (props.size === "small" ? "8px 16px" : "12px 20px")};
  margin: 10px;
  border-radius: 4px;
  border: 1px solid transparent;
  font-size: ${(props) => (props.size === "large" ? "18px" : "16px")};
  line-height: ${(props) => (props.size === "large" ? "25px" : "22px")};
`;

const StyledPrimaryButton = styled(StyledButtonBase)`
  background: #605dec;
  color: #fafafa;

  :hover {
    background: #1513a0;
  }

  :disabled {
    background: #cbd4e64d;
    color: #7c8db0;
  }
`;

const StyledSecondaryButton = styled(StyledButtonBase)`
  background: white;
  color: #7c8db0;

  :hover {
    background: #e9e8fc;
  }

  :disabled {
    background: #7c8db0;
    color: #7c8db0;
  }
`;

const Button = ({ onClick, color, size, disabled, children }) => {
  const buttonProps = {
    disabled,
    onClick,
    children,
    size,
  };

  if (color === "secondary") {
    return <StyledSecondaryButton {...buttonProps} />;
  }

  return <StyledPrimaryButton {...buttonProps} />;
};

Button.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  color: "primary",
  size: "medium",
  disabled: false,
};

export default Button;
