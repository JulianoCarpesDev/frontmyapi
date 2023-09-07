import './style.css';
import { FaPenAlt, FaTrash,FaArrowRight,FaPlus  } from 'react-icons/fa';

// ...



function FormProducts({event,register,obj,cancel,remove,update}){
    return(
       
        
      <form className="my-form">
        <h1>Cadastro de Produtos</h1>
        
      <input type="text"value={obj.name} onChange={event} name="name" placeholder="Nome" className="form-control" />
      <input type="number" value={obj.price} onChange={event} name="price" placeholder="Preço" className="form-control" />
      <input type="txt" value={obj.description} onChange={event} name="description" placeholder="Descrição" className="form-control" />
      
      
      <div>
    <FaPlus size={20} onClick={register} className="btn btn-primary"/>
    <FaPenAlt size={20} onClick={update} className="btn btn-warning"/>
    <FaTrash size={20} onClick={remove} className="btn btn-danger"/>
    
    <FaArrowRight size={20} onClick={cancel} className="btn btn-secondary" />
    </div>



  </form>)
  
}

export default FormProducts;
