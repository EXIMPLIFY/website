import './style.scss';
import SectionLabel from '../../commons/section-label';
import ButtonTransparent from '../../commons/buttons/button-transparent';

const AdditionalInfo = () => {
  return (
    <section className='additionalInfo'>
      <SectionLabel title='Additional Info' />
      <div className='additionalInfo__accordion-panel'>
        <div className='additionalInfo__accordion-item'>
          <div>
            <span className='additionalInfo__item-no'>01</span>
            <h5 className='additionalInfo__item-heading'>Licences</h5>
            <p className='section-description'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's...{' '}
              <span>
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged.
              </span>
            </p>
            <ButtonTransparent title='Login to Know More' />
          </div>
          <span className='additionalInfo__item-btn'>+</span>
        </div>
        <div className='additionalInfo__accordion-item'>
          <div>
            <span className='additionalInfo__item-no'>02</span>
            <h5 className='additionalInfo__item-heading'>
              Associated Associations
            </h5>
            <p className='section-description'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's...{' '}
              <span>
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged.
              </span>
            </p>
            <ButtonTransparent title='Login to Know More' />
          </div>
          <span className='additionalInfo__item-btn'>+</span>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
