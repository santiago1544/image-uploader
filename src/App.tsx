import imagen from './assets/image.svg'
import './App.css'
import {useRef, useState} from 'react'

function App() {
  //Variables globales
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const btn ={backgroundColor: '#193798'};

  //variable para dar clic
  const handleImageClick = () =>{
    inputRef.current.click();    
  }

  //variable para cambiar el estado de la imagen
  const handleImageChange = (event) =>{
    setImage(event?.target.files[0]);
  }

  return (
    <div style={btn}>
      <div className="centro">
        <div className='prueba'>
        <center>
        <br></br><br></br>
          <h1>Oprima el boton o arrastre una imagen para mostrarla en pantalla</h1> 
          <br></br>
          {image ? <img onClick={handleImageClick} src={URL.createObjectURL(image)} className='imagen'/> : <img onClick={handleImageClick} src={imagen} className='imagen'/>}
          <input type="file" className='input' onChange={handleImageChange} ref={inputRef}/>
          <br></br><br />
          <button  type="button" className="btn btn-primary" onClick={handleImageClick}>Subir Imagen</button>
          </center>
        </div>
      </div>
    </div>
  )

}

export default App
