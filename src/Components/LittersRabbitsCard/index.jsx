import PropTypes from 'prop-types';
import LittersRabbitsCardStyles from './LittersRabbitsCardStyles.module.css';

const LittersRabbitsCard = ({
  rabbitName,
  rabbitPhoto,
  rabbitBreed,
  rabbitWeight,
  rabbitAge,
  rabbitId,
  sold,
  onClick = () => {},
}) => {
  return (
    <div
      onClick={() => onClick}
      className={`${LittersRabbitsCardStyles.littersCards} d-inline-flex justify-content-evenly align-items-center border border-secondary-subtle rounded m-2 p-0`}
    >
      <div>
        <img
          src={rabbitPhoto || 'https://dummyimage.com/107x107/000/fff'}
          alt=''
        />
      </div>

      <div className='p-2'>
        <div className='card-top ms-2'>
          <h5>{rabbitName}</h5>
          <div className='d-flex justify-content-between'>
          <span className='text-secondary'>{rabbitBreed}</span>
          <span className='text-secondary ms-5'>Id: {rabbitId}</span>
          </div>
          <hr className='my-2' />
        </div>

        <div className='card-info d-flex ms-2 justify-content-around'>
          <div className='card-info-left mx-2'>
            <h6 className='m-0 fw-bold text-center'>{rabbitWeight}</h6>
            <span>Peso</span>
          </div>

          <div className='card-info-mid mx-2'>
            <h6 className='m-0 fw-bold text-center'>{rabbitAge}</h6>
            <span>Edad</span>
          </div>

          {/* if sold is true render */}
          {sold ? (
            <div className='card-info-right mx-2'>
              <h6 className='m-0 fw-bold text-center'>
                <svg
                  width='18'
                  height='15'
                  viewBox='0 0 25 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    x='0.833008'
                    width='24'
                    height='24'
                    rx='12'
                    fill='#858585'
                  />
                  <path
                    d='M12.833 5.5V18.5'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M16.333 9.5C16.333 9.1717 16.2683 8.84661 16.1427 8.54329C16.0171 8.23998 15.8329 7.96438 15.6008 7.73223C15.3686 7.50009 15.093 7.31594 14.7897 7.1903C14.4864 7.06466 14.1613 7 13.833 7H11.583C10.92 7 10.2841 7.26339 9.81524 7.73223C9.3464 8.20107 9.08301 8.83696 9.08301 9.5C9.08301 10.163 9.3464 10.7989 9.81524 11.2678C10.2841 11.7366 10.92 12 11.583 12H14.333C14.996 12 15.6319 12.2634 16.1008 12.7322C16.5696 13.2011 16.833 13.837 16.833 14.5C16.833 15.163 16.5696 15.7989 16.1008 16.2678C15.6319 16.7366 14.996 17 14.333 17H11.333C10.67 17 10.0341 16.7366 9.56524 16.2678C9.0964 15.7989 8.83301 15.163 8.83301 14.5'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </h6>
              <span>Vendido</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LittersRabbitsCard;

LittersRabbitsCard.propTypes = {
  rabbitName: PropTypes.string.isRequired,
  rabbitPhoto: PropTypes.string.isRequired,
  rabbitBreed: PropTypes.string.isRequired,
  rabbitWeight: PropTypes.string.isRequired,
  rabbitAge: PropTypes.string.isRequired,
  sold: PropTypes.bool.isRequired,
  rabbitId: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['md', 'xs', 'lg', 'sm']),
};
