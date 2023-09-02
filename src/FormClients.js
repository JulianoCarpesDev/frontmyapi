import { FaPenAlt, FaTrash,FaArrowRight,FaPlus  } from 'react-icons/fa';
import './style.css';
function FormClients({event,register,obj,cancel,remove,update}){
    return(
      <form className="my-form">
        <h1>Cadastro de Clientes</h1>
  <input type="text" value={obj.name} onChange={event} name="name" placeholder="Name" className ="form-control" />
  <input type="text" value={obj.email} onChange={event} name="email" placeholder="Email" className ="form-control" />
  <input type="text" value={obj.phone} onChange={event} name="phone" placeholder="Phone" className ="form-control" />
    <div>
    <FaPlus size={20} onClick={register} className="btn btn-primary"/>
    <FaPenAlt size={20} onClick={update} className="btn btn-warning"/>
    <FaTrash size={20} onClick={remove} className="btn btn-danger"/>
    
    <FaArrowRight size={20} onClick={cancel} className="btn btn-secondary" />
    </div>

</form>)

}

export default FormClients;
