import PropTypes from 'prop-types';
import { StyledButton, StyledLink, ButtonGroupStyled } from './ButtonStyled';

const Button = (props) => {
  const { type = 'primary', text = '버튼', icon, blind, disabled = false, onClick, href = false } = props;
  const buttonClassName = icon ? `icon-${icon} button is-${type}` : `button is-${type}`;
  const StyledComponent = href ? StyledLink : StyledButton;

  return (
    <StyledComponent 
      className={buttonClassName} disabled={disabled} onClick={onClick} {...(href ? { href } : {})} >
      {blind ? <span className="blind">{blind}</span> : text}
    </StyledComponent>
  );
}

// ✅ PropTypes 추가
Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  blind: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.bool,
};

export default Button;
export { ButtonGroupStyled as ButtonGroup };
