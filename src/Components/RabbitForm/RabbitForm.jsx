import { useState } from "react";

const RabbitForm = () => {

  const [littersImage, setLittersImage] = useState(
    '/static/images/littersPlaceHolder.svg'
  );

  const [formData, setFormData] = useState({
    image: '',
    name: '',
    id: '',
    color: '',
    weight: '',
    sex: '',
    cage: '',
    father: '',
    mother: '',
    birthDate: '',
    breed: '',
    genotype: '',
  });

  const saveRabbit = (event) => {
    event.preventDefault();
    // get the data of the new rabbit
    setFormData({
      image: event.target.image.value,
      name: event.target.name.value,
      id: event.target.id.value,
      color: event.target.color.value,
      weight: event.target.weight.value,
      gender: event.target.gender.value,
      cage: event.target.cage.value,
      father: event.target.father.value,
      mother: event.target.mother.value,
      birthDate: event.target.birthDate.value,
      breed: event.target.breed.value,
      genotype: event.target.genotype.value,
    });
    console.log(formData);
  };

  return <>
    <form
      className='form-litters border rounded px-3 py-4'
      onSubmit={saveRabbit}
    >
      <h3>Editar datos del conejo</h3>
      <h6 className='fw-normal'>Modifica los datos de su conejo</h6>
      <label htmlFor='formFile' className="mt-3">
        <h6>Imagen del conejo</h6>
        <h6 className='fw-normal'>Agrega fotos de su conejo</h6>
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
          className='ms-1'
          onChange={(event) => {
            setLittersImage(URL.createObjectURL(event.target.files[0]));
          }}
        />
        {/* <input type='file' name='image' id='formFile' className='ms-1' /> */}
      </div>

      <div className='mt-2'>
        <div className='d-flex'>
          <div className='form-group'>
            <label className='form-label'>Nombre</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name"/>
            {/* choose father from options input */}
          </div>

          <div className='form-group ms-2'>
            <label className='form-label'>ID</label>
            {/* choose mother from options input */}
            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="id" />
          </div>
        </div>
      </div>

      <div className='mt-2'>
        <div className='d-flex'>
          <div className='form-group'>
            <label className='form-label'>Color</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="color"/>
            {/* choose father from options input */}
          </div>

          <div className='form-group ms-2'>
            <label className='form-label'>Peso (en kg)</label>
            {/* choose mother from options input */}
            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="weight" />
          </div>
        </div>
      </div>

      <div className='mt-2'>
        <div className='d-flex'>
          <div className="form-check d-flex flex-column">
            {/* select if the rabbit is male or female with checkbox*/}
            <label htmlFor="" className="form-radio">Sexo</label>
            <div>
              <div className="">
                <input type="radio" value='male' name="gender"/><span className="ps-1">Male</span>
              </div>
              <div>
                <input type="radio" value='female' name="gender"/><span className="ps-1">Female</span>
              </div>
            </div>
          </div>

          <div className='form-group ms-5 w-50'>
            <label className='form-label'>Jaula</label>
            {/* choose breed from options input */}
            <select className='form-select' name='cage'>
              <option value='1'>001</option>
              <option value='2'>002</option>
              <option value='3'>003</option>
            </select>
          </div>
        </div>
      </div>

      <div className="border-top my-3"></div>
      
      <label htmlFor='formFile' className="mt-3">
        <h6>Historia y linaje</h6>
        <h6 className='fw-normal'>Agrega informacion mas detallada del conejo</h6>
      </label>
      <br/>

      <div className='mt-2'>
        <div className='d-flex'>
          <div className='form-group w-100'>
          <label className='form-label mt-2'>Padre</label>
      {/* choose breed from options input */}
      <select className='form-select' name='father'>
        <option value='1'>Elegir</option>
        <option value='2'>Elegir</option>
        <option value='3'>Elegir</option>
      </select>
      </div>

      <div className='form-group ms-2 w-100'>
      <label className='form-label mt-2'>Madre</label>
      {/* choose breed from options input */}
      <select className='form-select' name='mother'>
        <option value='1'>Elegir</option>
        <option value='2'>Elegir</option>
        <option value='3'>Elegir</option>
      </select>
          </div>
        </div>
      </div>

      <label className='form-label mt-2'>Fecha de nacimiento</label>
      <input type='date' className='form-control' name='birthDate' />

      <div className='form-group ms-2 w-100'>
      <label className='form-label mt-2'>Raza</label>
      {/* choose breed from options input */}
      <select className='form-select' name='breed'>
        <option value='1'>Elegir</option>
        <option value='2'>Elegir</option>
        <option value='3'>Elegir</option>
      </select>
          </div>

          <div className='form-group ms-2 w-100'>
      <label className='form-label mt-2'>Genotipo</label>
      {/* choose breed from options input */}
      <select className='form-select' name='genotype'>
        <option value='1'>Elegir</option>
        <option value='2'>Elegir</option>
        <option value='3'>Elegir</option>
      </select>
          </div>

      <div className='mt-2'>
        {/* add and save button */}
        <button className='btn btn-primary me-3' type='submit'>
          Agregar y guardar
        </button>
        {/* cancel button */}
        <button className='btn btn-danger' type='button'>Cancelar</button>.
      </div>
    </form>
  </>
}

export default RabbitForm