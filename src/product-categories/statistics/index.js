import './style.scss';
import Image from 'next/image';
import bubble from '../../../public/images/product-categories/bubble.png';
import statisticsLine from '../../../public/images/product-categories/statistics-line.png';

const About = () => {
  return (
    <section className='statistics'>
      <div className='statistics__bubble-section-left'>
        <Image
          src={bubble}
          width={218}
          height={100}
          alt='bubble-stats'
          className='statistics__bubble-section-left-img'
        />
        <span className='statistics__bubble-section-left__circle'>
            21
        </span>
        <span className='statistics__bubble-section-left__circle'>
            99
        </span>
      </div>
      <div className='statistics__title'>
        <h2 className='statistics__title-text'>STATISTICS</h2>
        <Image
          src={statisticsLine}
          width={480}
          alt='letter-shine'
          className='statistics__title-line-img'
        />
      </div>
      <div className='statistics__bubble-section-right'>
        <Image
          src={bubble}
          width={218}
          height={100}
          alt='bubble-stats'
          className='statistics__bubble-section-left-img'
        />
        <span className='statistics__bubble-section-right__circle'>
            1244
        </span>
        <span className='statistics__bubble-section-right__circle'>
            5224
        </span>
      </div>
    </section>
  );
};

export default About;

