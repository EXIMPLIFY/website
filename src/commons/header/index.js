'use client';

import './style.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import ButtonTransparent from '../buttons/button-transparent';
import useDeviceSize from '../../hooks/use-device-size';
import { disableScroll, enableScroll } from '../../utils/utilites';

const Header = () => {
  const pathname = usePathname();
  const { width } = useDeviceSize();
  const [isNavActive, setIsNavActive] = useState(false);

  useEffect(() => {
    if (isNavActive) {
      disableScroll();
      window.scrollTo(0, 0);
    } else {
      enableScroll();
      document.body.style.overflow = 'auto';
    }
  }, [isNavActive]);

  return (
    <>
      <header className={`header ${isNavActive ? 'active' : ''}`}>
        <div className='my-container'>
          <div className='header__items'>
            <div
              className='header__menu-text'
              onClick={() => setIsNavActive(!isNavActive)}
            >
              <div className='header__circles-design'>
                <span className='circle' />
                <span className='circle' />
                <span className='circle' />
                <span className='circle' />
              </div>
              <h5>Menu</h5>
            </div>
            <div className='header__logo-wrapper'>
              <Image
                src='https://placehold.co/58x24'
                width={58}
                height={24}
                alt='Eximplify Logo'
              />
              <span>Ex.Implify</span>
            </div>
            {width > 860 && (
              <div className='header__btn-wrapper'>
                <ButtonTransparent
                  title='Register'
                  className='header__btn-register'
                />
                <ButtonTransparent
                  title='Sign In'
                  className='header__btn-sign-in'
                />
              </div>
            )}
          </div>
        </div>
      </header>
      <div className={`nav ${isNavActive ? 'active' : ''}`}>
        <div className='nav__wrapper'>
          <div className='nav__links'>
            <Link
              href='/'
              className={`nav__item-link ${pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link
              href='/x'
              className={`nav__item-link ${pathname === '/x' ? 'active' : ''}`}
            >
              About Us
            </Link>
            <Link
              href='/x'
              className={`nav__item-link ${pathname === '/x' ? 'active' : ''}`}
            >
              HSN Locator
            </Link>
            <Link
              href='/x'
              className={`nav__item-link ${pathname === '/x' ? 'active' : ''}`}
            >
              Our Pricing
            </Link>
            <Link
              href='/x'
              className={`nav__item-link ${pathname === '/x' ? 'active' : ''}`}
            >
              Container Tracker
            </Link>
            <Link
              href='/x'
              className={`nav__item-link ${pathname === '/x' ? 'active' : ''}`}
            >
              Export Calculator
            </Link>
            <Link
              href='/x'
              className={`nav__item-link ${pathname === '/x' ? 'active' : ''}`}
            >
              Trade Shows
            </Link>
            <Link
              href='/x'
              className={`nav__item-link ${pathname === '/x' ? 'active' : ''}`}
            >
              Blogs
            </Link>
          </div>
          <div className='nav__right-side'>
            {width > 800 && (
              <>
                <div className='tnc-links'>
                  <Link href='/x'>Terms and conditions</Link>
                  <Link href='/x' className='pp'>
                    Privacy policy
                  </Link>
                </div>
                <p className='nav__desc'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className='nav__address-wrapper'>
                  <div className='nav__address-box'>
                    <Image
                      src='https://placehold.co/24x24'
                      width={24}
                      height={24}
                      alt='Eximplify Location'
                    />
                    <p>
                      456 Oak Avenue <br /> Springfield, IL 62704
                    </p>
                  </div>
                  <div className='nav__address-box'>
                    <Image
                      src='https://placehold.co/24x24'
                      width={24}
                      height={24}
                      alt='Eximplify Location'
                    />
                    <p>
                      <a href='tel:+(123)1234567'>+(123) 123-4567</a> <br />
                      <a href='tel:+(123)456789000'>+(123) 456-789-000</a>
                    </p>
                  </div>
                  <div className='nav__address-box'>
                    <Image
                      src='https://placehold.co/24x24'
                      width={24}
                      height={24}
                      alt='Eximplify Location'
                    />
                    <p>
                      <a href='mailto:inquiries@eximplify.com'>
                        inquiries@eximplify.com
                      </a>
                      <br />
                      <a href='mailto:work@eximplify.com'>work@eximplify.com</a>
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {width <= 860 && (
          <div className='header__btn-wrapper'>
            <ButtonTransparent
              title='Register'
              className='header__btn-register'
            />
            <ButtonTransparent
              title='Sign In'
              className='header__btn-sign-in'
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
