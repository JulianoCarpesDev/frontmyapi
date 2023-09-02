import React, { useState, useEffect } from 'react';
import FormBudget from './FormBudget';
import TableBudget from './TableBudget';

const Budget = () => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    // Busca os clientes do banco de dados
    fetch('https://juliano-myapp-4a216f1c0093.herokuapp.com/clients')
      .then(response => response.json())
      .then(data => setClients(data))
      .catch(error => console.error('Erro ao buscar clientes:', error));
  }, []);

  useEffect(() => {
    // Busca os produtos do banco de dados
    fetch('https://juliano-myapp-4a216f1c0093.herokuapp.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  const handleClientSelect = selectedValue => {
    setSelectedClient(selectedValue);
  };

  const handleProductSelect = selectedValue => {
    setSelectedProducts([...selectedProducts, selectedValue]);
  };

  return (
    <div>
      <FormBudget
        data={clients}
        onSelect={handleClientSelect}
        dataProd={products}
        onSelectProduct={handleProductSelect} // Corrigido: Nome da propriedade
        selectedClient={selectedClient}
        selectedProducts={selectedProducts}
      />
      <TableBudget selectedClient={selectedClient} tableData={selectedProducts} /> {/* Corrigido: Passando tableData */}
    </div>
  );
};

export default Budget;
