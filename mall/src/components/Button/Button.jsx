import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledButton, StyledLink, ButtonGroupStyled } from './ButtonStyled';

// 스타일 정의
export const ButtonStyled = styled.button`
  ${StyledButton}
`;

export const LinkStyled = styled.a`
  ${StyledLink}
`;

export { ButtonGroupStyled as ButtonGroup };

// Button 컴포넌트
const Button = (props) => {
  const { type = 'primary', text = '버튼', icon, blind, disabled = false, onClick, href = false } = props;
  const buttonClassName = icon ? `icon-${icon} button is-${type}` : `button is-${type}`;
  const StyledComponent = href ? LinkStyled : ButtonStyled;

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
