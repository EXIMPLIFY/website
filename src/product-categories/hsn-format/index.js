import './style.scss';
import Image from 'next/image';
import formatSeparator from '../../../public/images/product-categories/format-separator.png';

const HSNFormat = () => {
  return (
    <>
      <div className='hsn-format'>
        <p className='hsn-format__floating-left'>HSN</p>
        <div className='hsn-format__structure'>
          <div className='hsn-format__structure-bg-line' />
          <div className='hsn-format__structure-description'>
            <div className='hsn-format__structure-description__code-container'>
              <span>1</span>
              <span>1</span>
            </div>
            <div className='hsn-format__structure-description__arrow-img'>
              <Image src={formatSeparator} alt='format separator' />
              <p>Chapter</p>
            </div>
          </div>
          <div className='hsn-format__structure-description'>
            <div className='hsn-format__structure-description__code-container'>
              <span>1</span>
              <span>1</span>
            </div>
            <div className='hsn-format__structure-description__arrow-img'>
              <Image src={formatSeparator} alt='format separator' />
              <p>Heading</p>
            </div>
          </div>
          <div className='hsn-format__structure-description'>
            <div className='hsn-format__structure-description__code-container'>
              <span>1</span>
              <span>1</span>
            </div>
            <div className='hsn-format__structure-description__arrow-img'>
              <Image src={formatSeparator} alt='format separator' />
              <p>Sub-Heading</p>
            </div>
          </div>
          <div className='hsn-format__structure-description'>
            <div className='hsn-format__structure-description__code-container'>
              <span>1</span>
              <span>1</span>
            </div>
            <div className='hsn-format__structure-description__arrow-img'>
              <Image src={formatSeparator} alt='format separator' />
              <p>Tariff Item</p>
            </div>
          </div>
        </div>
      </div>
      <p className='hsn-format__floating-right'>STRUCTURE</p>
    </>
  );
};

export default HSNFormat;

