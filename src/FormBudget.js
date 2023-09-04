// FormBudget.js
import React, { useState } from 'react';
import './style.css'; // Certifique-se de ter um arquivo CSS para estilizar o formulário
import { FaPlus} from 'react-icons/fa';
import TableBudget from './TableBudget.js'; // Importe o componente TableBudget
import { format } from 'date-fns';
const currentDate = format(new Date(), 'dd/MM/yyyy'); // Formate a data como preferir

const FormBudget = ({ data, onSelect, dataProd }) => {

  const [clientInputValue, setClientInputValue] = useState('');
  const [showClientOptions, setShowClientOptions] = useState(false);

  const [productInputValue, setProductInputValue] = useState('');
  const [showProductOptions, setShowProductOptions] = useState(false);

  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null); // Adicionado
  const [selectedProducts, setSelectedProducts] = useState([]); // Alterado para array
  const [quantity, setQuantity] = useState(1);
  const [profit, setProfit] = useState(50);

  const [tableData, setTableData] = useState([]);

  const handleClientInputClick = () => {
    setShowClientOptions(true);
    setShowProductOptions(false);
  };

  const handleProductInputClick = () => {
    setShowProductOptions(true);
    setShowClientOptions(false);
  };

  const handleClientOptionClick = selectedClient => {
    setClientInputValue(selectedClient.name);
    setShowClientOptions(false);
    setSelectedClient(selectedClient);
    onSelect(selectedClient);
  };

  const handleProductOptionClick = selectedProduct => {
    setProductInputValue(selectedProduct.name);
    setSelectedProduct(selectedProduct); // Alterado para definir selectedProduct
    setSelectedProducts([...selectedProducts, selectedProduct]); // Adiciona ao array
    setShowProductOptions(false);
    setQuantity(1);
    setProfit(profit);
  };

  const handleAddToTable = () => {
    if (selectedProduct && !isNaN(quantity) && !isNaN(profit)) {
      const preco = selectedProduct.price * (1 + profit / 100);
      const subtotal = preco * quantity;
  
      const newRow = {
        produto: selectedProduct.name,
        qto: quantity,
        preco: preco.toFixed(2),
        subtotal: subtotal.toFixed(2),
      };
  
      setTableData([...tableData, newRow]);
      setProductInputValue('');
      setSelectedProduct(null);
      setQuantity(1);
      setProfit(50); // Reinicie o valor padrão de lucro
      setSelectedProducts([]);
    }
  };
  
  
  const clientOptions = showClientOptions && data ? (
    <ul className="options">
      {data.map(client => (
        <li key={client.id} onClick={() => handleClientOptionClick(client)}>
          {client.name}
        </li>
      ))}
    </ul>
  ) : null;

  const productOptions = showProductOptions && dataProd ? (
    <ul className="options">
      {dataProd.map(product => (
        <li key={product.id} onClick={() => handleProductOptionClick(product)}>
          {product.name}
        </li>
      ))}
    </ul>
  ) : null;

  return (
    <div className="form-container">
      <form className="my-form">
        <h1>Orcamento</h1>
        <div className="autocomplete">
          <input
            type="text"
            value={clientInputValue}
            onClick={handleClientInputClick}
            onChange={() => {}}
            placeholder="Clientes"
            className="form-control"
          />
          {clientOptions}
        </div>
        <div className="autocomplete">
          <input
            type="text"
            value={productInputValue}
            onClick={handleProductInputClick}
            onChange={() => {}}
            placeholder="Produtos"
            className="form-control"
          />
          {productOptions}
        </div>

        <div className="quantity-profit">
          <input
            type="number"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            placeholder="Quantidade"
            className="form-control"
          />
          <input
            type="number"
            value={profit}
            onChange={e => setProfit(e.target.value)}
            placeholder="Lucro (%)"
            className="form-control"
          />
        </div>
      

        <div>
          <FaPlus size={20} className="btn btn-primary" onClick={handleAddToTable} />
         
        </div>
      </form>
      <div>
      <table className="table">
        <thead >
          <tr>
            <th scope="col">Cliente</th>
            <th scope="col">E-mail</th>
            <th scope="col">Phone</th>
            <th scope="col">Date</th>
            <th>Servico</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedClient?.name}</td>
            <td>{selectedClient?.email}</td>
            <td>{selectedClient?.phone}</td>
            <td>{currentDate}</td>
          </tr>
         
        </tbody>
      </table>
      </div>

      {/* Renderize o componente TableBudget aqui, passando selectedProducts e tableData */}
      <TableBudget selectedClient={selectedClient} selectedProducts={selectedProducts} tableData={tableData} />
    </div>
  );
};

export default FormBudget;
