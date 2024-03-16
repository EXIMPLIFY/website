import './style.scss';
import Image from 'next/image';
import SectionLabel from '../commons/section-label';
import { aboutHeading, kundaliEllipse } from '../../public/images';
import ButtonArrowFilled from '../commons/buttons/button-arrow-filled';
import RightArrowSvg from '../commons/right-arrow-svg';

const HsnKundali = () => {
  return (
    <main>
      <section className='banner'>
        <div className='banner__group'>
          <div className='banner__group-left'>
            <SectionLabel title='Dive Deep into HSN' />
            <h1 className='section-heading60'>
              HSN <br />
              <span className='banner__kundali-word'>
                Kundali
                <Image
                  src={kundaliEllipse}
                  width={293}
                  height={104}
                  alt='Kundali design'
                />
              </span>
            </h1>
          </div>
          <div className='banner__group-right'>
            <p className='section-description'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <ButtonArrowFilled title='Browse here' />
          </div>
        </div>
      </section>
      <section className='aboutkundali'>
        {/* <Image
          src={aboutBg}
          width={1280}
          height={320}
          alt='about hsn backgeound'
          className='aboutkundali__bg'
        /> */}
        <div className='aboutkundali__group'>
          <div className='aboutkundali__group-left'>
            <h5>About</h5>
            <p className='section-description'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{' '}
            </p>
            <div role='button' className='aboutkundali__more-info-btn'>
              <span>View More Info</span>
              <RightArrowSvg />
            </div>
          </div>
          <div className='aboutkundali__group-right'>
            <Image
              src={aboutHeading}
              width={288}
              height={183}
              alt='HSN logo'
              className='aboutkundali__logo'
            />
            <span className='aboutkundali__hsn-code'>123456</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HsnKundali;
