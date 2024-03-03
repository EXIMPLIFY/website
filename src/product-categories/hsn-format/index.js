import './style.scss';
import Image from 'next/image';
import hsnFormat from '../../../public/images/product-categories/hsn-format.png';

const HSNFormat = () => {
  return (
    <>
      <div className='hsn-format'>
        <p className='hsn-format__floating-left'>HSN</p>
        <Image src={hsnFormat} alt='hsn-format' className='hsn-format__img' />
      </div>
      <p className='hsn-format__floating-right'>STRUCTURE</p>
    </>
  );
};

export default HSNFormat;

