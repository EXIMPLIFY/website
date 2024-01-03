const RightArrowSvg = ({ strokeColor = '#5313CA' }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M2 12L21 12'
        stroke={strokeColor}
        strokeWidth='2'
        strokeLinejoin='round'
      />
      <path
        d='M16.5529 17.7956C17.8287 17.4537 18.9561 16.7004 19.7601 15.6526C20.5642 14.6047 21 13.3208 21 12C21 10.6792 20.5642 9.3953 19.7601 8.34743C18.9561 7.29957 17.8287 6.54629 16.5529 6.20445'
        stroke={strokeColor}
        strokeWidth='2'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default RightArrowSvg;
