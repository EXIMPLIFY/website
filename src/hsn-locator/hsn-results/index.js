'use client';

import './style.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { gradientBorder, searchIcon } from '../../../public/images';
import constants from '../../utils/constants';
import useDeviceSize from '../../hooks/use-device-size';

const HsnResults = () => {
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
    <section className='hsn'>
      <div className='hsn__search-type-wrapper' onClick={selectSearchType}>
        <span className='hsn__search-type active' id={HSN_LOCATOR}>
          HSN Locator
          {selectedId !== HSN_LOCATOR && (
            <Image
              src={gradientBorder}
              width={184}
              height={71}
              alt='Non active border'
              className='hsn__non-active-border left'
            />
          )}
        </span>
        <span className='hsn__search-type' id={PRODUCTS}>
          Products
          {selectedId !== PRODUCTS && (
            <Image
              src={gradientBorder}
              width={184}
              height={71}
              alt='Non active border'
              className='hsn__non-active-border right'
            />
          )}
        </span>
        <div
          className='hsn__search-type--active-bg'
          style={{
            left: offsetLeft || 0
          }}
        >
          <span className='right_curve' />
          <span className='left_curve' />
        </div>
      </div>
      <div className='hsn__input-wrapper'>
        <input
          type='text'
          placeholder='Search keyword here...'
          className='hsn__input'
        />
        <Image
          src={searchIcon}
          width={64}
          height={64}
          alt='Search'
          className='hsn__search-icon'
        />
      </div>
    </section>
  );
};

export default HsnResults;
