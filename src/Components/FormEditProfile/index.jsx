

export function  FormEditProfile(){
return (<>
   
   <form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Nombre</label>
    <input type="text" className="form-control" id="inputEmail4 " placeholder="John"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Apellido</label>
    <input type="text" className="form-control" id="inputPassword4" placeholder="John" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputAddress" placeholder="johndoe@gmail.com"/>
  </div>
  <div className="col-12">
    <button type="submit" className="btn " style={{background:"#E0E0E0",color:"#A3A3A3"}}>Guardar cambios</button>
  </div>

  
  <div className=" pt-4">
    <span className="fs-5 pt-4">Datos de contacto</span>
    <p style={{color:"#4d4d4d"}}>Es necesario que agregues al menos uno para que puedas publicar en el mercado</p>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Facebook link</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder=""/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Instagram link</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder=""/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Twitter link</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder=""/>
  </div>
  <div className="col-12">
    <button type="submit" className="btn " style={{background:"#E0E0E0",color:"#A3A3A3"}}>Guardar datos de contacto</button>
  </div>


  <div className=" pt-4">
    <span className="fs-5 pt-4">Modificar Contraseña</span>
    
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Contraseña antigua</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder=""/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Contraseña nueva</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder=""/>
  </div>

  <div className="col-12">
    <button type="submit" className="btn " style={{background:"#E0E0E0",color:"#A3A3A3"}}>Modificar contraseña</button>
  </div>

  <div className=" pt-4">
    <span className="fs-5 pt-4">Eliminar cuenta</span>
    <p style={{color:"#4d4d4d"}}>Elimina permanentemente tu cuenta y todo su contenido.</p>
  <div className="col-12">
    <button type="submit" className="btn btn-danger">Eliminar cuenta</button>
  </div>
  </div>
</form>

</>)
}