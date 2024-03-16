import './style.scss';
import Link from 'next/link';
import RightArrowSvg from '../../../commons/right-arrow-svg';

const CategoryItem = ({ id, idLabel, description }) => {
  return (
    <div className='category-item' id={id}>
      <div className='category-item__id'>{idLabel}</div>
      <p className='category-item__description'>{description}</p>
      <div>
        <Link href='/' className='category-item__button'>
          <RightArrowSvg />
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;

