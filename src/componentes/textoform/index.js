import './textoForm.css'
import Icone from "../icone"

const TextoForm = () => {
    return (
    <div>

         <div>
            <h1 className="titulo">Stay update!</h1>
            <p className='subDesc'>Join 60,000+ product managers receiving monthly updates on:</p>

         </div>
            
         <div className="textForm ">
            <Icone className="icone"/>
            <p>Product discovery and building what matters</p>
        </div>

        <div className="textForm ">
        <Icone className="icone"/>
            <p>Measuring to ensure updates are a sucess</p>
        </div>

        <div className="textForm ">
        <Icone className="icone"/>
            <p>And much more</p>
         </div>

     </div>
        
    )
}

export default TextoForm