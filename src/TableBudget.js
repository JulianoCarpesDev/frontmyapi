import React, { useState } from 'react';
import './style.css';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { format } from 'date-fns';
import { formatPhoneNumber } from './config/Configs';




// Suponha que 'Roboto-Bold.ttf' esteja no diretório 'fonts' do seu projeto
pdfMake.vfs = pdfFonts.pdfMake.vfs;


const currentDate = format(new Date(), 'dd/MM/yyyy'); // Formate a data como preferir

const TableBudget = ({ tableData , selectedClient }) => {
  let total = 0;
  let discount= 0;
  let  increase = 0;
  const [maoDeObra, setMaoDeObra] = useState('0.00');
  const [desconto, setDesconto] = useState("0.00");
  const [acrescimo, setAcrescimo] = useState("0.00");
 
  const handleMaoDeObraChange = (e) => {
    const value = e.target.value.replace(/,/g, '.');
    setMaoDeObra(value); // Agora, setMaoDeObra sempre receberá o valor, mesmo que seja '0'
  };
  const handleDesconto = (e) => {
    const value = e.target.value.replace(/,/g, '.');
    setDesconto(value); // Agora, setMaoDeObra sempre receberá o valor, mesmo que seja '0'
  };
  const handleAcrescimo = (e) => {
    const value = e.target.value.replace(/,/g, '.');
    setAcrescimo(value); // Agora, setMaoDeObra sempre receberá o valor, mesmo que seja '0'
  };
  const generatePDF = () => {
  // Leia a imagem como um arquivo
    
    const documentDefinition = {
      content: [
        {
          stack: [
         
           
            {
              text: "Carpes sistemas Eletronicos de Seguranca",
              style: "header",
              alignment: "center",
              margin: [10, 0, 0, 0],
            },
          ],
        },
        { text: "\n" },
        { text: "Orçamento", style:"title" },
        { text: "\n" },
    { text: `Data: ${currentDate}`, alignment: 'right' }, // Inclua a data aqui
        {
          // Dados do cliente
          text: [
            "Cliente: ",
            { text: selectedClient?.name || "", bold: true },
          ],
        },
        {
          text: [
            "E-mail: ",
            { text: selectedClient?.email || "" },
          ],
        },
        {
          text: [
            "Telefone: ",
            { text: formatPhoneNumber(selectedClient?.phone || "") },
          ],
        },
        
        { text: "\n" },
        {
          table: {
            alignment: "center",
            headerRows: 1,
            widths: ["*", "*", "*", "*"],
            body: [
              // Cabeçalho da tabela
              [
                { text: "Produto", style: "tableHeader",alignment: "center" },
                { text: "Quantidade", style: "tableHeader",alignment: "center" },
                { text: "Preço", style: "tableHeader",alignment: "center" },
                { text: "Subtotal", style: "tableHeader",alignment: "center" },
              ],
              // Dados da tabela
              ...tableData.map((row) => [
                row.produto,
                { text: row.qto, alignment: "center" }, // Alinhar à direita
                { text:"R$: "+ row.preco, alignment: "right" }, // Alinhar à direita
                { text:"R$: "+ row.subtotal, alignment: "right" }, // Alinhar à direita
                
              ]),
            ],
          },
        },
        { text: "\n" },
        // Linha da mão de obra e total em uma única célula
        [
          {
            table: {
              widths: ["*", "*"],
              body: [
                ["Mão de Obra:", { text: "R$: " + parseFloat(maoDeObra).toFixed(2), alignment: "right" }],
                ["Desconto:", { text: "R$: " + parseFloat(desconto).toFixed(2), alignment: "right" }],
                ["Acessórios Instalação:", { text: "R$: " + parseFloat(acrescimo).toFixed(2), alignment: "right" }],
                ["Total dos Serviços:", { text: "R$: " + (parseFloat(total) + parseFloat(maoDeObra) - parseFloat(desconto) + parseFloat(acrescimo)).toFixed(2), alignment: "right" }],
              ],
            },
            layout: "Borders",
          },
        ],
      ],
      styles: {
        title:{ fontSize: 24, bold: true, alignment: 'center' },
        header: { fontSize: 18, bold: true },
        tableHeader: { fontSize: 12, bold: true },
      },
      defaultStyle: { fontSize: 14 },
    };
  
    pdfMake.createPdf(documentDefinition).download(selectedClient?.name);
   
  };
  

  
  return (<>
  
    <div>
      
      {tableData.length > 0 && (
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Preço</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => {
              const preco = parseFloat(row.preco);
              const subtotal = parseFloat(row.subtotal);
              const precoValido = !isNaN(preco); // Verifica se o preço é um número válido
              const subtotalValido = !isNaN(subtotal); // Verifica se o subtotal é um número válido
              
              total += subtotalValido ? subtotal : 0; // Soma ao total apenas se o subtotal for válido
              discount-=subtotalValido ? subtotal:0;
              increase += total;
              return (
                <tr key={index}>
                  <td className='nomes'>{row.produto}</td>
                  <td>{row.qto}</td>
                  <td className='valores'>{precoValido ? preco.toFixed(2) : 'Preço Inválido'}</td>
                  <td className='valores'>{subtotalValido ? subtotal.toFixed(2) : 'Subtotal Inválido'}</td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

{tableData.length > 0 && (
  <table className="table">
    <tbody>
      <tr>
        <td>Digite valor da mao de obra</td>
        <td>Desconto</td>
        <td>Acessórios</td>
      </tr>
      <tr>
        <td className='tdinput'>
         
          <input
            type='text'
            value={maoDeObra }
            onChange={handleMaoDeObraChange}
            className="maoObra"
            placeholder='Valor da Mão de Obra'
            onFocus={(e) => e.target.select()}
          />
        </td>
        <td className='tdOutros'>
        <input
            type='text'
            value={desconto }
            onChange={handleDesconto}
            className="outros"
            placeholder='Desconto'
            onFocus={(e) => e.target.select()}
          />
        </td>
        <td className='tdOutros'>
        <input
            type='text'
            value={acrescimo}
            onChange={handleAcrescimo}
            className="outros"
            placeholder='Acrescimo'
            onFocus={(e) => e.target.select()}
          />
        </td>
        <td>Total  </td>
        <td className='valores'>&nbsp;{(parseFloat(total) + parseFloat(maoDeObra) + parseFloat(acrescimo) - parseFloat(desconto) ).toFixed(2)}</td>
       
        
      </tr>
      <tr className='trbtn'>
      <td><button className='pdf' onClick={generatePDF}>Imprimir</button></td>
      
      </tr>
      
    </tbody>
    
    
    
  </table>
  
  
)}
     
    </div>
    </>
  );
};

export default TableBudget;
