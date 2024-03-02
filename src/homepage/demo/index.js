/* eslint-disable max-lines-per-function */
import './style.scss';
import { Navigation, EffectCreative } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player/youtube';
import SectionLabel from '../../commons/section-label';
import playIcon from '../../../public/images/common/play-icon.svg';
import SwiperNavigationArrows from '../../commons/swiper-navigation-arrows';
import Modal from '../../commons/modal';
import { demoClose, demoCloseCircle } from '../../../public/images';
import RightArrowSvg from '../../commons/right-arrow-svg';

const Demo = () => {
  const demoDescriptionRef = useRef();
  const demoVideoRef = useRef();
  const demoVideoModalRef = useRef();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [modalDemoVideos, setModalDemoVideos] = useState([
    {
      url: 'https://youtu.be/OPazrdwYAm0?si=yG0PbVuW3j9md1Q_',
      isPlaying: false
    },
    {
      url: 'https://youtu.be/Q7F6ZlEoIUI?si=zL0-gulKdWbarSmY',
      isPlaying: false
    },
    {
      url: 'https://youtu.be/abiL84EAWSY?si=5EqCkkpFcpPHzSGt',
      isPlaying: false
    }
  ]);

  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  const pausePlayingVideos = () => {
    setModalDemoVideos(
      modalDemoVideos.map(el => ({ ...el, isPlaying: false }))
    );
  };

  useEffect(() => {
    const params = {
      modules: [Navigation, EffectCreative],
      navigation: {
        prevEl: '.demo .navigation--left',
        nextEl: '.demo .navigation--right'
      },
      allowTouchMove: false,
      speed: 500
    };
    const modalParams = {
      modules: [Navigation],
      allowTouchMove: false,
      navigation: {
        prevEl: '.demo-modal .navigation--left',
        nextEl: '.demo-modal .navigation--right'
      }
    };
    Object.assign(demoDescriptionRef.current, params);
    Object.assign(demoVideoRef.current, {
      ...params,
      effect: 'creative',
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -1]
        },
        next: {
          translate: ['100%', 0, 0]
        }
      }
    });
    Object.assign(demoVideoModalRef.current, modalParams);

    demoDescriptionRef.current.initialize();
    demoVideoRef.current.initialize();
    demoVideoModalRef.current.initialize();

    demoVideoModalRef.current.addEventListener('swiperslidechange', () => {
      pausePlayingVideos();
    });
  }, []);

  const onDemoIconClick = () => {
    demoVideoModalRef.current.swiper.slideTo(
      demoVideoRef.current.swiper.activeIndex
    );
    setIsDemoModalOpen(true);
  };

  const onDemoPlayOrPause = (index, isPlay) => {
    setModalDemoVideos(
      modalDemoVideos.map((el, i) => {
        if (i === index) {
          return { ...el, isPlaying: isPlay || false };
        }
        return el;
      })
    );
  };
  const onModalClose = () => {
    pausePlayingVideos();
    setIsDemoModalOpen(false);
  };

  return (
    <>
      <section className='demo'>
        <SectionLabel title='Specially crafted Demo' />
        <h2 className='demo__heading'>
          Learn with us <br />
          How <span>Ex-Implify</span> work
        </h2>
        <div className='demo__desc-wrapper'>
          <p className='section-description demo__description'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <SwiperNavigationArrows />
        </div>
        <div className='demo__video-details'>
          <div className='demo__video-details-left'>
            <swiper-container
              ref={demoDescriptionRef}
              className='demo__description'
              init='false'
            >
              <swiper-slide>
                <span className='demo__video-number'>01</span>
                <h3 className='demo__video-name'>Dashboard Demo</h3>
                <p className='section-description demo__video-descrption'>
                  Learn to Easily manage the Dashboard through live Demo
                </p>
              </swiper-slide>
              <swiper-slide>
                <span className='demo__video-number'>02</span>
                <h3 className='demo__video-name'>Dashboard Demo 2</h3>
                <p className='section-description demo__video-descrption'>
                  Learn to Easily manage the Dashboard through live Demo
                </p>
              </swiper-slide>
              <swiper-slide>
                <span className='demo__video-number'>02</span>
                <h3 className='demo__video-name'>Dashboard Demo 2</h3>
                <p className='section-description demo__video-descrption'>
                  Learn to Easily manage the Dashboard through live Demo
                </p>
              </swiper-slide>
            </swiper-container>
          </div>
          <div className='demo__video-details-right'>
            <Image
              src={playIcon}
              alt='Play video'
              width={100}
              height={100}
              className='demo__play-icon'
              onClick={onDemoIconClick}
            />
            <swiper-container
              ref={demoVideoRef}
              class='demo__video-container'
              init='false'
            >
              <swiper-slide>
                <Image
                  src='https://placehold.co/580x340'
                  width={550}
                  height={550}
                  alt='Eximplify Demo'
                  className='demo__video-thumb'
                />
              </swiper-slide>
              <swiper-slide>
                <Image
                  src='https://placehold.co/580x340'
                  width={550}
                  height={550}
                  alt='Eximplify Demo'
                  className='demo__video-thumb'
                />
              </swiper-slide>
              <swiper-slide>
                <Image
                  src='https://placehold.co/580x340'
                  width={550}
                  height={550}
                  alt='Eximplify Demo'
                  className='demo__video-thumb'
                />
              </swiper-slide>
            </swiper-container>
          </div>
        </div>
      </section>
      <Modal
        isOpen={isDemoModalOpen}
        onClose={onModalClose}
        modalClassName='demo-modal'
      >
        <div className='demo-modal__swiper-wrapper'>
          <swiper-container
            ref={demoVideoModalRef}
            class='demo-modal__video-container'
            init='false'
          >
            {modalDemoVideos.map(({ isPlaying, url }, index) => (
              <swiper-slide class='demo-video__slide' key={url}>
                {hasWindow && (
                  <ReactPlayer
                    controls
                    url={url}
                    playing={isPlaying}
                    width='100%'
                    height='100%'
                    onPlay={() => onDemoPlayOrPause(index, true)}
                    onPause={() => onDemoPlayOrPause(index)}
                  />
                )}
              </swiper-slide>
            ))}
          </swiper-container>
          <div className='demo-modal__close'>
            <span className='navigation navigation--left'>
              <RightArrowSvg />
            </span>
            <span className='navigation navigation--right'>
              <RightArrowSvg />
            </span>
            <Image
              src={demoClose}
              width={256}
              height={64}
              alt='modal close icon'
            />
            <Image
              src={demoCloseCircle}
              width={24}
              height={24}
              className='demo-modal__close-icon'
              onClick={onModalClose}
              alt='modal close icon'
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Demo;
