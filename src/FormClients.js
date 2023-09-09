import { FaPenAlt, FaTrash,FaArrowRight,FaPlus  } from 'react-icons/fa';
import './style.css';
import{formatPhoneNumber} from '..//src/config/Configs'


function FormClients({event,register,obj,cancel,remove,update}){
  const formatPhone =(number)=>{
    return formatPhoneNumber(number)
  }
  

    return(
      <form className="my-form">
        <h1>Cadastro de Clientes</h1>
  <input type="text" value={obj.name} onChange={event} name="name" placeholder="Nome" className ="form-control" />
  <input type="text" value={obj.email} onChange={event} name="email" placeholder="E-mail" className ="form-control" />
  <input type="text" value={formatPhone(obj.phone)} onChange={event} name="phone" placeholder="(DD)9-9999-9999" className ="form-control" />
    <div>
    <FaPlus size={20} onClick={register} className="btn btn-primary"/>
    <FaPenAlt size={20} onClick={update} className="btn btn-warning"/>
    <FaTrash size={20} onClick={remove} className="btn btn-danger"/>
    
    <FaArrowRight size={20} onClick={cancel} className="btn btn-secondary" />
    </div>
    
</form>)

}

export default FormClients;
