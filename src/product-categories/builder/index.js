import './style.scss';
import Image from 'next/image';
import builderRightArrow from '../../../public/images/product-categories/builder-right-arrow.png';

const Builder = () => {
  return (
    <section className='builder'>
      <div className='builder__container'>
        <span className='builder__container-label'>HSN</span>
        <span className='builder__container-arrow'>
          <Image
            src={builderRightArrow}
            width={60}
            height={12}
            alt='Builder Right Arrow'
          />
        </span>
        <span className='builder__container-circle'>0</span>
        <span className='builder__container-circle'>0</span>
        <span className='builder__container-circle'>0</span>
        <span className='builder__container-circle'>0</span>
        <span className='builder__container-circle'>0</span>
        <span className='builder__container-circle'>0</span>
      </div>
    </section>
  );
};

export default Builder;

