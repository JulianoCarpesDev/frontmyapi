import { FaCog } from 'react-icons/fa';
import './style.css';

function TableProducts({ vect, select }) {
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Indice</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Preco</th>
                    <th scope="col">Descricao</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>
                {vect.map((obj, indice) => (
                    <tr key={indice}>
                        <td className='centralizar'>{indice + 1}</td>
                        <td >{obj.name}</td>
                        <td className='centralizar'>{parseFloat(obj.price).toFixed(2)}</td>
                        <td>{obj.description}</td>
                        <td className='centralizar'><FaCog onClick={() => { select(indice) }} className="btn btn-danger selecionar"> Select</FaCog></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TableProducts;
