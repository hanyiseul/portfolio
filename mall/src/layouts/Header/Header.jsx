import Button, { ButtonGroup } from '@/components/Button/Button';
import { HeaderStyle } from './Header.styled'; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const linkToButton = () => {
    navigate('/guide/Button');
  };


  return (
    <HeaderStyle as="header" className="header container">
      <Link to="/" className="logo">HANYISEUL</Link>
      <ButtonGroup>
        <Button icon="cart" type="primary" blind="장바구니" onClick={linkToButton} />
        <Button icon="login" type="primary" blind="로그인" onClick={linkToButton} />
        <Button icon="menu" type="primary" blind="전체메뉴" onClick={linkToButton} />
      </ButtonGroup>
    </HeaderStyle>
  );
}