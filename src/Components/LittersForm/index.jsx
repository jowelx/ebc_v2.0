import { useEffect, useState } from 'react';
import LittersFormStyles from './LittersFormStyles.module.css';

const LittersForm = () => {
  const [check, setCheck] = useState(false);
  const [littersImage, setLittersImage] = useState(
    '/static/images/littersPlaceHolder.svg'
  );
  const handleCheck = () => {
    // if the checkbox is checked, the gestation period already ends
    setCheck(!check);
    console.log(check);
  };

  // save the data of the new litter
  const saveLitter = (event) => {
    event.preventDefault();
    // get the data of the new litter
    if (check) {
      // if the gestation period already ends
      const litterData = {
        image: event.target.image.value,
        father: event.target.father.value,
        mother: event.target.mother.value,
        breed: event.target.breed.value,
        cage: event.target.cage.value,
        gestationStartDate: event.target.gestationStartDate.value,
        bornDate: event.target.bornDate.value,
        bornRabbitsAlive: event.target.bornRabbitsAlive.value,
        bornRabbitsDead: event.target.bornRabbitsDead.value,
        totalWeight: event.target.totalWeight.value,
      };
      console.log(litterData);
    } else {
      // if the gestation period doesn't end
      const litterData = {
        image: event.target.image.value,
        father: event.target.father.value,
        mother: event.target.mother.value,
        breed: event.target.breed.value,
        cage: event.target.cage.value,
        gestationStartDate: event.target.gestationStartDate.value,
      };
      console.log(litterData);
    }
  };

  useEffect(() => {
    // // get the data of the rabbits
    // const getRabbits = async () => {
    //   const response = await fetch('http://localhost:3000/api/rabbits');
    //   const data = await response.json();
    //   console.log(data);
    // };
    // getRabbits();
  }, []);
  return (
    //on submit, save the data of the new litter
    <form
      className='form-litters border rounded px-3 py-4'
      onSubmit={saveLitter}
    >
      <h4>Agregar nueva camada</h4>
      <h6 className='fw-normal'>Añade los datos de una camada</h6>
      <label htmlFor='formFile'>
        <h6>Imagen de la camada</h6>
      </label>
      {/* after upload the image render on component */}
      {/* and convert the image to the size 72x72*/}
      <div className='d-flex align-items-center'>
        <img
          src={littersImage}
          alt='camadaExample'
          className='rounded-circle w-auto'
          width='72'
          height='72'
        />
        {/* if a image is uploaded in the input change the state of the image */}
        <input
          type='file'
          name='image'
          id='formFile'
          className={`ms-1 ${LittersFormStyles.inputFileC}`}
          onChange={(event) => {
            setLittersImage(URL.createObjectURL(event.target.files[0]));
          }}
        />
        {/* <input type='file' name='image' id='formFile' className='ms-1' /> */}
      </div>

      <div className='mt-2'>
        <div className='d-flex'>
          <div className='form-group'>
            <label className='form-label'>Padre</label>
            {/* choose father from options input */}
            <select className='form-select' name='father'>
              <option value='1'>Conejo 1</option>
              <option value='2'>Conejo 2</option>
              <option value='3'>Conejo 3</option>
            </select>
          </div>

          <div className='form-group ms-2'>
            <label className='form-label'>Madre</label>
            {/* choose mother from options input */}
            <select className='form-select' name='mother'>
              <option value='1'>Conejo 1</option>
              <option value='2'>Conejo 2</option>
              <option value='3'>Conejo 3</option>
            </select>
          </div>
        </div>
      </div>
      <label className='form-label'>Raza</label>
      {/* choose breed from options input */}
      <select className='form-select' name='breed'>
        <option value='1'>Raza 1</option>
        <option value='2'>Raza 2</option>
        <option value='3'>Raza 3</option>
      </select>
      <label className='form-label'>Jaula</label>
      {/* choose cage from options input */}
      <select className='form-select' name='cage'>
        <option value='1'>Jaula 1</option>
        <option value='2'>Jaula 2</option>
        <option value='3'>Jaula 3</option>
      </select>
      {/* gestation start date */}
      <label className='form-label'>Fecha de inicio de gestación</label>
      <input type='date' className='form-control' name='gestationStartDate' />
      {/* check if the gestation period already ends */}
      {/* <label className="form-label">¿Terminó la gestación?</label> */}
      <div className='form-check mt-2'>
        <input
          className='form-check-input'
          type='checkbox'
          name='flexRadioDefault'
          id='flexRadioDefault1'
          onClick={() => handleCheck()}
        />
        <label className='form-check-label' htmlFor='flexRadioDefault1'>
          Ya termino el periodo de gestación
        </label>
      </div>

      {/* if the gestation period already ends, show this input */}
      {check && (
        <div className='mt-2'>
          {/* born date */}
          <label className='form-label'>Fecha de parto</label>
          <input type='date' className='form-control' name='bornDate' />
          {/* number of born rabbits alive */}
          <label className='form-label'>Gazapos nacidos vivos</label>
          <input
            type='number'
            className='form-control'
            name='bornRabbitsAlive'
          />
          {/* number of born rabbits dead */}
          <label className='form-label'>Gazapos nacidos muertos</label>
          <input
            type='number'
            className='form-control'
            name='bornRabbitsDead'
          />
          {/* total weight of litters in kg */}
          <label className='form-label'>Peso total de la camada (en kg)</label>
          <input type='number' className='form-control' name='totalWeight' />
        </div>
      )}

      <div className='mt-2'>
        {/* add and save button */}
        <button className='btn btn-primary me-3' type='submit'>
          Agregar y guardar
        </button>
        {/* cancel button */}
        <button className='btn btn-danger' type='button'>
          Cancelar
        </button>
        .
      </div>
    </form>
  );
};

export default LittersForm;
