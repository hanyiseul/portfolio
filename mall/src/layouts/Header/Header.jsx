import Button from '@/components/Button/Button';
import { HeaderStyle } from './Header.styled'; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Header() {

  const navigate = useNavigate();
  const linkToserachPage = () => {
    navigate('/pages/search')
  }

  return (
    <HeaderStyle HeaderStyle as="header" className="header container">
        <Link to="/" className="logo">HANYISEUL</Link>
        
        <div className="item">
          <Button icon='search' text='검색' onClick={linkToserachPage}/>
        </div>
    </HeaderStyle>
  )
}
