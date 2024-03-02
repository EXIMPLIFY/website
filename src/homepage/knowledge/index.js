// import 'swiper/css/bundle';

import './style.scss';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import SectionLabel from '../../commons/section-label';
import ButtonArrowFilled from '../../commons/buttons/button-arrow-filled';
import useDeviceSize from '../../hooks/use-device-size';

const Knowledge = () => {
  const knowledgeSwiperRef = useRef();
  const { width } = useDeviceSize();

  useEffect(() => {
    if (width < 767) {
      const params = {
        modules: [Pagination],
        spaceBetween: 15,
        pagination: {
          el: '.knowledge .pagination'
          //   type: 'progressbar'
        }
      };

      Object.assign(knowledgeSwiperRef.current, params);
      knowledgeSwiperRef.current.initialize();
    }
  }, [width]);

  return (
    <section className='knowledge'>
      <SectionLabel title='Knowledge section' />
      <h3 className='section-heading40'>Insightful Content to Consume </h3>
      {width >= 767 ? (
        <div className='knowledge__box-wrapper'>
          <div className='knowledge__box'>
            <Image
              src='https://placehold.co/424x230'
              alt='knowledge'
              width={424}
              height={230}
              className='knowledge__img'
            />
            <div className='knowledge__date-name-wrapper'>
              <span>June 25th, 2024</span>
              <span className='knowledge__name'>Category name</span>
            </div>
            <p className='knowledge__desc'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className='knowledge__box'>
            <Image
              src='https://placehold.co/424x230'
              alt='knowledge'
              width={424}
              height={230}
              className='knowledge__img'
            />
            <div className='knowledge__date-name-wrapper'>
              <span>June 25th, 2024</span>
              <span className='knowledge__name'>Category name</span>
            </div>
            <p className='knowledge__desc'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className='knowledge__box'>
            <Image
              src='https://placehold.co/424x230'
              alt='knowledge'
              width={424}
              height={230}
              className='knowledge__img'
            />
            <div className='knowledge__date-name-wrapper'>
              <span>June 25th, 2024</span>
              <span className='knowledge__name'>Category name</span>
            </div>
            <p className='knowledge__desc'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className='knowledge__box'>
            <Image
              src='https://placehold.co/424x230'
              alt='knowledge'
              width={424}
              height={230}
              className='knowledge__img'
            />
            <div className='knowledge__date-name-wrapper'>
              <span>June 25th, 2024</span>
              <span className='knowledge__name'>Category name</span>
            </div>
            <p className='knowledge__desc'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      ) : (
        <>
          <swiper-container
            ref={knowledgeSwiperRef}
            init='false'
            className='knowledge__swiper'
          >
            <swiper-slide>
              <div className='knowledge__box'>
                <Image
                  src='https://placehold.co/424x230'
                  alt='knowledge'
                  width={424}
                  height={230}
                  className='knowledge__img'
                />
                <div className='knowledge__date-name-wrapper'>
                  <span>June 25th, 2024</span>
                  <span className='knowledge__name'>Category name</span>
                </div>
                <p className='knowledge__desc'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className='knowledge__box'>
                <Image
                  src='https://placehold.co/424x230'
                  alt='knowledge'
                  width={424}
                  height={230}
                  className='knowledge__img'
                />
                <div className='knowledge__date-name-wrapper'>
                  <span>June 25th, 2024</span>
                  <span className='knowledge__name'>Category name</span>
                </div>
                <p className='knowledge__desc'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className='knowledge__box'>
                <Image
                  src='https://placehold.co/424x230'
                  alt='knowledge'
                  width={424}
                  height={230}
                  className='knowledge__img'
                />
                <div className='knowledge__date-name-wrapper'>
                  <span>June 25th, 2024</span>
                  <span className='knowledge__name'>Category name</span>
                </div>
                <p className='knowledge__desc'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </swiper-slide>
          </swiper-container>
          <div className='pagination' />
        </>
      )}
      <ButtonArrowFilled title='See All News' />
    </section>
  );
};

export default Knowledge;
