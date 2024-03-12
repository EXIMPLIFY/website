import './style.scss';
import Image from 'next/image';
import SectionLabel from '../commons/section-label';
import { kundaliEllipse } from '../../public/images';
import ButtonArrowFilled from '../commons/buttons/button-arrow-filled';

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
    </main>
  );
};

export default HsnKundali;
