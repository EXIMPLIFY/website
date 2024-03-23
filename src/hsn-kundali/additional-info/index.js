import './style.scss';
import { useState } from 'react';
import SectionLabel from '../../commons/section-label';
import ButtonTransparent from '../../commons/buttons/button-transparent';
import useDeviceSize from '../../hooks/use-device-size';

const data = [
  {
    heading: 'Licences',
    subHead:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's..."
  },
  {
    heading: 'Associated Associations',
    subHead:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's..."
  }
];

const AdditionalInfo = () => {
  const { width } = useDeviceSize();
  const [activeIndex, setActiveIndex] = useState(null);

  const setActiveItemIndex = index => {
    if (activeIndex === index) {
      setActiveIndex(null);
      return;
    }
    setActiveIndex(index);
  };

  return (
    <section className='additionalInfo'>
      <SectionLabel title='Additional Info' />
      <div className='additionalInfo__accordion-panel'>
        {data.map(({ heading, subHead }, index) => (
          <div
            className='additionalInfo__accordion-item'
            key={heading}
            onClick={() => setActiveItemIndex(index)}
          >
            <div className='additionalInfo__accordion-item-content-wrapper'>
              <span className='additionalInfo__item-no'>
                {String(index).length === 1 ? `0${index + 1}` : index + 1}
              </span>
              <h5
                className={`additionalInfo__item-heading ${
                  activeIndex === index ? 'active' : ''
                }`}
              >
                {heading}
              </h5>
              <div
                className={
                  activeIndex === index ? 'show-content' : 'hide-content'
                }
              >
                <p className='section-description'>
                  {subHead}
                  <span>
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </span>
                </p>
                {width > 540 && (
                  <ButtonTransparent title='Login to Know More' />
                )}
              </div>
            </div>
            <div className='additionalInfo__mb-btn-wrapper'>
              {width <= 540 && (
                <ButtonTransparent
                  title='Login to Know More'
                  className={activeIndex === index ? 'show-btn' : 'hide-btn'}
                />
              )}
              <span
                className={
                  activeIndex === index
                    ? 'additionalInfo__item-btn active'
                    : 'additionalInfo__item-btn'
                }
              >
                +
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdditionalInfo;
