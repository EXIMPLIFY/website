import './style.scss';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import SectionLabel from '../../commons/section-label';
import constants from '../../utils/constants';
import { searchIcon } from '../../../public/images';
import useDeviceSize from '../../hooks/use-device-size';

const Locator = () => {
  const { width } = useDeviceSize();

  const { HSN_LOCATOR, PRODUCTS } = constants;
  const [selectedId, setSelectedId] = useState(HSN_LOCATOR);
  const [offsetLeft, setOffsetLeft] = useState(0);

  const selectSearchType = e => {
    const { id } = e.target;
    if (!id || selectedId === id) return;
    if (selectedId) {
      document.getElementById(selectedId).classList.remove('active');
    }
    document.getElementById(id).classList.add('active');
    setSelectedId(id);
    setOffsetLeft(document.getElementById(id)?.offsetLeft);
  };
  useEffect(() => {
    setOffsetLeft(document.getElementById(selectedId)?.offsetLeft);
  }, [width]);

  return (
    <section className='locator'>
      <div className='locator__group'>
        <div className='locator__group--left'>
          <Image
            src='https://placehold.co/550x550'
            width={550}
            height={550}
            alt='Locator'
          />
        </div>
        <div className='locator__group--right'>
          <SectionLabel title='All in one search' />
          <h2 className='locator__heading'>
            A Search finder to help you get the Accurate Info
          </h2>
          <p className='section-description locator__description'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div
            className='locator__search-type-wrapper'
            onClick={selectSearchType}
          >
            <span className='locator__search-type active' id={HSN_LOCATOR}>
              HSN Locator
            </span>
            <span className='locator__search-type' id={PRODUCTS}>
              Products
            </span>
            <div
              className='locator__search-type--active-bg'
              style={{
                left: offsetLeft || 0
              }}
            />
          </div>
          <div className='locator__input-wrapper'>
            <input
              type='text'
              placeholder='Search keyword here...'
              className='locator__input'
            />
            <Image
              src={searchIcon}
              width={64}
              height={64}
              alt='Search'
              className='locator__search-icon'
            />
            <div className='locator__search-background' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locator;
