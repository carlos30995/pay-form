import { useState } from 'react'
import './App.css'

function App() {
  const [Form, setForm] = useState({ })

  const handleSubmit=e=>{
    e.preventDefault();
    alert("se envio");
  }
  const handleChange = (e) =>{//MUY IMPORTANTE
    setForm({
        ...Form,
        [e.target.name]:e.target.value,//USA LA  DESESTRUCTURACION
        //CAMBIA LOS VALUE SI EL NAME EXUSTE
    });
  }
  return (
    <>
      <div className='contenedor'>
        <div className='cabeza'>
          <h1>Payment Form</h1>
          <h2>Contact Information</h2>
          <h2>Required fields are followed by *</h2>
        </div>
      <form onSubmit={handleSubmit}>
        <div className="nombres">
          <label htmlFor="nombre">Name:*</label>
          <br />
          <input type='text' id='nombre' name='nombre' required onChange={handleChange}/>
          <br />
        </div>
        <div className='Generos'>
          <p>Genero:</p>
          <input type="radio" name='genero' id='Male' value='Male' onChange={handleChange}/>
          <label htmlFor="Male">Male</label>
          <input type="radio" name='genero' id='Female' value='Female' onChange={handleChange}/>
          <label htmlFor="Female">Female</label>
        </div>
        <br />
        <div className='Address'>
          <label htmlFor="direccion">Address: </label><br />
          <input type="text" name='direccion' id='direccion' onChange={handleChange}/>
        </div>
        <br />
        <div className='correoinf'>
          <label htmlFor="correo">Email:* </label><br />
          <input type="email" name='correo' id='correo' required onChange={handleChange}/><br />
          <label htmlFor="pin">Pincode:*</label><br />
          <input type="text" name='pin'id='pin' required onChange={handleChange}/>
        </div>
        <div className="payinfo">
          <h2>Payment Information</h2>
          <label htmlFor="cardtipe">Card type*</label><br />
          <select name="cardtipe" id="cardtipe" onChange={handleChange}>
            <option value="Banco de Venezuela">Banco de Venezuela</option>
            <option value="Bicentenario">Bicentenario</option>
            <option value="Sofitasa">Sofitasa</option>
            <option value="Mercantil">Mercantil</option>
          </select>
          <br />
          <label htmlFor="cardnumber">Card Number*</label>
          <input type="text" name='cardnumber' id='cardnumber'/><br />
          <label htmlFor="CCV">CCV*</label><br />
          <select name="CCV" id="CCV" onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button type='submit'>PAY</button>
      </form>
      </div>
      <div className='footers'>
        <p>@yo</p>
      </div>
   </>
  )
}

export default App
