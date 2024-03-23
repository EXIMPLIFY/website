'use client';

import './style.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { gradientBorder, searchIcon } from '../../../public/images';
import constants from '../../utils/constants';
import useDeviceSize from '../../hooks/use-device-size';
import RightArrowSvg from '../../commons/right-arrow-svg';
import ButtonTransparent from '../../commons/buttons/button-transparent';
import ButtonArrowFilled from '../../commons/buttons/button-arrow-filled';

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
          <span className='left_curve' />
          <span className='right_curve' />
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
      {width > 768 ? (
        <div className='hsn__results-container'>
          <div className='hsn__results-header-wrapper'>
            <span className='hsn__results-header'>Sr. No.</span>
            <span className='hsn__results-header'>HSN Number</span>
            <span className='hsn__results-header'>Description</span>
            <span className='hsn__results-header'>Actions</span>
          </div>
          <div className='hsn__results-wrapper'>
            <div className='hsn__result'>
              <span className='hsn__result-item'>1</span>
              <span className='hsn__result-item'>0910.30</span>
              <span className='hsn__result-item'>
                Ginger, saffron, turmeric (curcuma), thyme, bay leaves, curry
                and other spices.
              </span>
              <button type='button' className='hsn__result-btn'>
                <span className='hsn__btn-label'>View Kundali</span>
                <span className='hsn__btn-arrow'>
                  <RightArrowSvg />
                </span>
              </button>
            </div>
            <div className='hsn__result'>
              <span className='hsn__result-item'>1</span>
              <span className='hsn__result-item'>0910.30</span>
              <span className='hsn__result-item'>
                Ginger, saffron, turmeric (curcuma), thyme, bay leaves, curry
                and other spices.
              </span>
              <button type='button' className='hsn__result-btn'>
                <span className='hsn__btn-label'>View Kundali</span>
                <span className='hsn__btn-arrow'>
                  <RightArrowSvg />
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='hsn__results-container'>
          <div className='hsn__result'>
            <div className='hsn__number-flex'>
              <div>
                <div className='hsn__results-header'>HSN Number</div>
                <div className='hsn__result-item'>0910.30</div>
              </div>
              <span className='hsn__result-item'>1</span>
            </div>
            <div className='hsn__result-desc'>
              <div className='hsn__results-header'>Description</div>
              <div className='hsn__result-item'>
                Ginger, saffron, turmeric (curcuma), thyme, bay leaves, curry
                and other spices.
              </div>
            </div>
            <ButtonArrowFilled title='View Kundali' />
          </div>
          <div className='hsn__result'>
            <div className='hsn__number-flex'>
              <div>
                <div className='hsn__results-header'>HSN Number</div>
                <div className='hsn__result-item'>0910.30</div>
              </div>
              <span className='hsn__result-item'>1</span>
            </div>
            <div className='hsn__result-desc'>
              <div className='hsn__results-header'>Description</div>
              <div className='hsn__result-item'>
                Ginger, saffron, turmeric (curcuma), thyme, bay leaves, curry
                and other spices.
              </div>
            </div>
            <ButtonArrowFilled title='View Kundali' />
          </div>
        </div>
      )}
      <div className='pagination'>
        <div className='pagination__btn-wrapper'>
          <ButtonTransparent title='Prev' className='btn btn-prev' />
          <ButtonTransparent title='Next' className='btn btn-next' />
        </div>
        <div className='pagination__count-wrapper'>
          <span>Page</span>
          <div className='pagination__current-count'>
            <input type='text' />
          </div>
          <span>
            of <span className='pagination__total-count'>12</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HsnResults;
