import './style.scss';
import Image from 'next/image';
import SectionLabel from '../../commons/section-label';
import { downArrow } from '../../../public/images';

const Banner = () => {
  return (
    <section className='banner'>
      <div className='banner__group'>
        <div className='banner__group-left'>
          <div className='banner__label-wrapper'>
            <SectionLabel title='All in one Search' />
          </div>
          <h1 className='banner__heading'>
            Your Search section <br /> to get the most <br />
            <span>Accurate Information</span>
          </h1>
          <p className='section-description banner__description'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
        </div>
        <div className='banner__group-right'>
          <Image
            src='https://placehold.co/560x544'
            width={560}
            height={544}
            alt='HSN locator banner image'
            className='banner__banner-img'
          />
        </div>
      </div>
      <Image
        src={downArrow}
        width={124}
        height={180}
        alt='pointing towards HSN locator search input'
        className='banner__down-arrow'
      />
    </section>
  );
};

export default Banner;
