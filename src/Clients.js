import React, { useEffect, useState } from 'react';
//import './App.css';
import FormClients from './FormClients';
import TableClients from './TableClients';



function Clients() {
    const client = {
      id:0,
      name: '',
      email: '',
      phone: ''
    };
  //produtos
    const [btnCreate, setBtnCreate] = useState(true);
    const [listClients, listSetClients] = useState([]);// array de produtos
    const [objClient, setObjClient] = useState(client); // Definindo o estado objProducts aqui
  
    useEffect(() => {
      fetch('https://juliano-myapp-ed782e629c00.herokuapp.com/clients')
        .then((returnClient) => returnClient.json())
        .then((convertingReturn) => listSetClients(convertingReturn));
    }, []);
  // pegando dados do formulario
   const wenTtyping = (e) => {
      setObjClient({...objClient,[e.target.name]:e.target.value})
    };
  
    const save = () => {
      if(objClient.name === ''){
        alert("Nome nao pode ficar vazio")
        return
    }else if(objClient.email === ''){
      alert("E-mail nao foi adicionado")
      return
    }else if (objClient.phone === '') {
        alert("Telefone nao foi incluido");
        return;
      }
      else{

        fetch('https://juliano-myapp-ed782e629c00.herokuapp.com/clients/save', {
          method: 'post',
          body: JSON.stringify(objClient),
          headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
          },
        })
          .then((returnApi) => returnApi.json())
          .then((returnConvert) => {
            if(returnConvert.message !== undefined){
              alert(returnConvert.message); // message refere-se a api 
            } else {
              listSetClients([...listClients, returnConvert]);
              alert("Cliente Cadastrado com sucesso");
              clearForm();
            }
          });
        }
    };
    
    const update = () => {
      fetch('https://juliano-myapp-ed782e629c00.herokuapp.com/clients/update', {
        method: 'put',
        body: JSON.stringify(objClient),
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then((returnApi) => returnApi.json())
        .then((returnConvert) => {
          //console.log(returnConvert)
  
          if(returnConvert.message !== undefined){
            alert(returnConvert.message)// message refere-se a api 
          }else{
            alert("Cliente alterado com sucesso");
              // copiar vetor de produtos
          let vectTemp = [...listClients];
          // verificando se produto selecionado e igual ao id do produto selecionado
          let indice = vectTemp.findIndex((p)=>{
            return p.id === objClient.id;
          })
          // alterar produto
          vectTemp[indice]= objClient;
          // atualizar vetor 
  
         listSetClients(vectTemp);
            clearForm();
          }
        });
    };
  
    const remove = () => {
      fetch('https://juliano-myapp-ed782e629c00.herokuapp.com/clients/remove/' + objClient.id, {
        method: 'delete',
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then((returnApi) => returnApi.json())
        .then((returnConvert) => {
          alert(returnConvert.message)
  
          // copiar vetor de produtos
          let vectTemp = [...listClients];
          // verificando se produto selecionado e igual ao id do produto selecionado
          let indice = vectTemp.findIndex((p)=>{
            return p.id === objClient.id;
          })
          // removendo produto
          vectTemp.splice(indice,1);
          // atualizar vetor 
  
         listSetClients(vectTemp);
          clearForm();
        });
    };
    //cancelar
  
  
    //selecionar produtos
  
    const selectClient = (indice) =>{
      setObjClient(listClients[indice]);
      setBtnCreate(false);
    }
  
  // limpar formulario
  function clearForm(){
    setBtnCreate(true)
    return setObjClient(client)
  }
  
  // testando se esta pegando os valores ao digitar 
  //<p>{JSON.stringify(objProduct)}</p>
  
    return (
      <div>
        
        <FormClients btn={btnCreate} event ={wenTtyping} register ={save} obj ={objClient} cancel={clearForm} remove={remove} update={update}/>
        <TableClients vect={listClients} select ={selectClient} />
      </div>
    );
  }
  
  export default Clients;
  