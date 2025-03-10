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
        <Button type="primary" text="컴포넌트" onClick={linkToButton} />
        <Button icon="menu" type="primary" blind="전체메뉴" onClick={linkToButton} />
      </ButtonGroup>
    </HeaderStyle>
  );
}
