import './style.css';
import { FaCog } from 'react-icons/fa';
function TableClients({vect,select}){
    return(<table className="table">
    <thead className="thead-dark">
      <tr>
        <th scope="col">Indice</th>
        <th scope="col">Nome</th>
        <th scope="col">E-mail</th>
        <th scope="col">Phone</th>
        <th>Editar</th>
      </tr>
    </thead>
        <tbody>
            
            {
                vect.map((obj,indice)=>(
                    <tr key={indice}>
                        <td className='centralizar'>{indice + 1}</td>
                        <td>{obj.name}</td>
                        <td>{obj.email}</td>
                        <td>{obj.phone}</td>
                        <td><FaCog onClick={()=>{select(indice)}} className="btn btn-danger"></FaCog></td>
                       
                    </tr>
                ))
            }
        </tbody>
        
    </table>

    )
}
export default TableClients;
