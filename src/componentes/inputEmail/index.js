import { useState} from 'react'
import './inputEmail.css'
import { ValidarEmail } from '../regex'
import { Modal } from '../modal'


const InputEmail = () => {
    const [email, setEmail] = useState ('')
    const [emailError, setEmailError] = useState(false)
    const [modalOpen, setModalOpen] = useState (false)
    const [emailValido, setEmailValido] = useState('')

    const validar = () => {
        if(!ValidarEmail.test(email)){
            setEmailError(true)
            console.log('Email invalido')
          

        } else {          
            setEmailError(false)
            setEmailValido(email)
            setModalOpen(true)
            console.log('Email valido')
           
        }
    }
    const handleModalSubmit = () => {
        setModalOpen(false)
      
        
        
      
    }
    const handleInput = (evento) => {                    /**const que salva o email posto no input */
        const valorInput = evento.target.value;
        setEmail(valorInput);      
        
    }

        const aoSalvar = (evento) => {
            evento.preventDefault();    
            console.log('form foi submitido');
        }

  

const handleClick = () => {          /*const  do botao que verifica se o email foi preenchido corretamente e passar*/ 
    validar();

}

    return (
        <div className='emailCorpo'>
          
          <form onSubmit={aoSalvar}>
            <label>Email Adress</label>
            {emailError && <p className='msgErro'>Insira um email valido</p>}
            <input type="email" placeholder="Insira o seu email"
            value={email}   
            onChange={handleInput}/>

    
<button className="btn-Submit" onClick={() => { setModalOpen(false);  handleClick()}}>Subscribe to monthly newsletter</button>
            
        </form>    
            
        {modalOpen && 
        <Modal onClose={handleModalSubmit} email={emailValido}>
            
        </Modal>} 
        

        </div>

        
    )
}

export default InputEmail;