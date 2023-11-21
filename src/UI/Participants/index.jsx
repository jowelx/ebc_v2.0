import React from 'react';

const Participants = ({ nombre, rol, linkedin, colStart, headshot, github }) => {
  const colStartClasses = [
    'col-start-1',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
  ];

  const rowStartClasses = ['row-start-1', 'row-start-2'];
  const index = colStartClasses.indexOf(colStart);

  return (
    <div className={`col-6 col-lg-3 ${colStartClasses[index]}  ${rowStartClasses[index % 2]}`}>
        <div className='d-flex justify-content-center align-items-center mx-auto overflow-hidden rounded-circle'>
            <img src={headshot} alt="headshot" className='img-fluid' style={{width: '100px', height: '100px', borderRadius: '50%'}} />
        </div>
        <div className='d-flex flex-column align-items-center mt-2'>
        <p className='h4 font-weight-bold text-center'>{nombre}</p>
        <p className='font-weight-medium h5 text-success'>{rol}</p>
        <div className='d-flex align-items-center justify-content-center gap-2'>
            <a href={linkedin} target='_blank'>
            <img className='img-fluid' style={{width: '20px'}} src="/people/linkedin.png" alt="Linkedin logo" />
            </a>
            <a href={github} target='_blank'>
            <img className='img-fluid' style={{width: '20px'}} src="/people/github.png" alt="Github logo" />
            </a>
        </div>
        </div>
    </div>
  );
}

export default Participants;
