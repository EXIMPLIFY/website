import './style.scss';
import Image from 'next/image';
import letterShine from '../../../public/images/product-categories/letter-shine.png';
import SectionLabel from '../../commons/section-label';

const About = () => {
  return (
    <section className='about'>
      <SectionLabel title='Summary of outward supplies' />
      <h2 className='about__heading'>
        Explore HSN <br />
        <span>
          Product Categories
          <Image
            src={letterShine}
            width={34}
            height={28}
            alt='letter-shine'
            className='about__shine-img'
          />
        </span>
      </h2>
      <p className='about__description'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
      </p>
    </section>
  );
};

export default About;

