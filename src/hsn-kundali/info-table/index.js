import Image from 'next/image';
import { infoCircle } from '../../../public/images';
import './style.scss';

const InfoTable = () => {
  return (
    <section className='infotable'>
      <div className='infotable__wrapper'>
        <div className='infotable__heading-wrapper'>
          <span className='infotable__heading information'>Information</span>
          <span className='infotable__heading'>Export</span>
          <span className='infotable__heading'>Import</span>
        </div>
        <div className='infotable__values-wrapper'>
          <div className='infotable__values-grid'>
            <span className='infotable__value information'>
              GST/SGST
              <div className='infotable__info-circle-wrapper'>
                <Image
                  src={infoCircle}
                  width={16}
                  height={16}
                  className='infotable__info-circle'
                  alt='Info circle'
                />
                <p className='infotable__info-desc'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry, Lorem Ipsum is simply dummy text of the
                  printing.
                </p>
              </div>
            </span>
            <span className='infotable__value'>xxxx</span>
            <span className='infotable__value'>xxxx</span>
          </div>
          <div className='infotable__values-grid'>
            <span className='infotable__value information'>
              Duties(<span className='percentage'>%</span>)
            </span>
            <span className='infotable__value'>
              <span className='blur'>xxxx</span>
              <div className='infotable__info-circle-wrapper'>
                <Image
                  src={infoCircle}
                  width={16}
                  height={16}
                  className='infotable__info-circle'
                  alt='Info circle'
                />
                <p className='infotable__info-desc'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry, Lorem Ipsum is simply dummy text of the
                  printing.
                </p>
              </div>
            </span>
            <span className='infotable__value'>
              <span>xxxx</span>
              <div className='infotable__info-circle-wrapper'>
                <Image
                  src={infoCircle}
                  width={16}
                  height={16}
                  className='infotable__info-circle'
                  alt='Info circle'
                />
                <p className='infotable__info-desc'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry, Lorem Ipsum is simply dummy text of the
                  printing.
                </p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoTable;
