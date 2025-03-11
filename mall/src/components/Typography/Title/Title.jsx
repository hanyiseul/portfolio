import PropTypes from 'prop-types';
import { TitleStyle } from './TitleStyled';

const Title = (props) => {
  const { title, tag: Tag = "h2", subTit} = props;

  return (
    <TitleStyle>
      <Tag className="Tit">
        {title}
      </Tag>
      <span className="subTit">{subTit}</span>
    </TitleStyle>
  );
}

// ✅ PropTypes 추가
Title.propTypes = {
  title: PropTypes.string,
  tag: PropTypes.string,
  subTit: PropTypes.string,
};

export default Title;
