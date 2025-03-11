import PropTypes from 'prop-types';
import { ListStyle } from './ListStyled';

const List = ({ items }) => {
  return (
    <ListStyle>
      {items.map(({ text, type, href, onClick }, index) => (
        <li key={index}>
          {type === "link" ? (
            <a href={href}>{text}</a>
          ) : type === "button" ? (
            <button onClick={onClick}>{text}</button>
          ) : (
            text
          )}
        </li>
      ))}
    </ListStyle>
  );
};

// ✅ PropTypes 추가
List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["text", "link", "button"]), // 세 가지 타입 지원
      href: PropTypes.string, // 링크용
      onClick: PropTypes.func, // 버튼용
    })
  ).isRequired,
};

export default List;
