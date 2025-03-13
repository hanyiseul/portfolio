import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Image from '../../components/Image';

export default function Nav() {
  const navList = [
    {
      id: "ProductList",
      title: "홈",
      imageUrl: ""
    },
    {
      id: "Setting",
      title: "My",
      imageUrl: ""
    }
  ];
  const [nav, setNav] = useState(navList);

  useEffect(() => {
    const navData = async () => {
      try {
        const response = await fetch("/data/nav.json");
        if (!response.ok) {
          throw new Error('데이터를 불러오는 데 문제가 발생했습니다.');
        }
        setNav(await response.json());
      } catch(error) {
        console.error('데이터를 불러오는 중 에러 발생:', error);
        setNav(navList);
      }
    }
    navData();
  },[]);

  return (
    <nav>
      <ul className="nav">
        {nav.map((navItem, index) => (
          <li key={index}>
            <NavLink className="search__link" to={`/pages/${navItem.id}`}>
              {navItem.imageUrl && (
                <Image src={navItem.imageUrl} alt={`${navItem.title}`}/>
              )}
              <span className="search__title"><strong>{navItem.title}</strong></span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}