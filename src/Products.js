import React, { useEffect, useState } from 'react';
import FormProducts from './FormProducts.js';
import TableProducts from './TableProducts.js';
function Products() {

    const product = {
      id:0,
      name: '',
      price: '',
      description: '',
    };
  //produtos
    const [btnCreate, setBtnCreate] = useState(true);
    const [listProducts, listSetProducts] = useState([]);// array de produtos
    const [objProduct, setObjProduct] = useState(product); // Definindo o estado objProducts aqui
  
  
    useEffect(() => {
      fetch('https://juliano-myapp-ed782e629c00.herokuapp.com/products')
        .then((returnProduct) => returnProduct.json())
        .then((convertingReturn) => listSetProducts(convertingReturn));
    }, []);
  // pegando dados do formulario
   const wenTtyping = (e) => {
      setObjProduct({...objProduct,[e.target.name]:e.target.value})
    };
  
    const save = () => {
      if(objProduct.name === ''){
        alert("Nome nao pode ficar vazio")
        return
   
    }else if (objProduct.price === '') {
        alert("Preco nao foi incluido");
        return;
      }else if(objProduct.description === ''){
        alert("Descricao nao pode ficar vazia ")
        return
      }else{
    
        fetch('https://juliano-myapp-ed782e629c00.herokuapp.com/products/save', {
          method: 'post',
          body: JSON.stringify(objProduct),
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
              listSetProducts([...listProducts, returnConvert]);
              alert("Produto Cadastrado com sucesso");
              clearForm();
            }
          });
        }
    };
    
    const update = () => {
      fetch('https://juliano-myapp-ed782e629c00.herokuapp.com/products/update', {
        method: 'put',
        body: JSON.stringify(objProduct),
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
            alert("Produto alterado com sucesso");
              // copiar vetor de produtos
          let vectTemp = [...listProducts];
          // verificando se produto selecionado e igual ao id do produto selecionado
          let indice = vectTemp.findIndex((p)=>{
            return p.id === objProduct.id;
          })
          // alterar produto
          vectTemp[indice]= objProduct;
          // atualizar vetor 
  
         listSetProducts(vectTemp);
            clearForm();
          }
        });
    };
  
    const remove = () => {
      fetch('https://juliano-myapp-ed782e629c00.herokuapp.com/products/remove/' + objProduct.id, {
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
          let vectTemp = [...listProducts];
          // verificando se produto selecionado e igual ao id do produto selecionado
          let indice = vectTemp.findIndex((p)=>{
            return p.id === objProduct.id;
          })
          // removendo produto
          vectTemp.splice(indice,1);
          // atualizar vetor 
  
         listSetProducts(vectTemp);
          clearForm();
        });
    };
    //cancelar
  
  
    //selecionar produtos
  
    const selectProduct = (indice) =>{
      setObjProduct(listProducts[indice]);
      setBtnCreate(false);
    }
  
  // limpar formulario
  function clearForm(){
    setBtnCreate(true)
    return setObjProduct(product)
  }
  
  // testando se esta pegando os valores ao digitar 
  //<p>{JSON.stringify(objProduct)}</p>
  
    return (
      <div>
        
        <FormProducts btn={btnCreate} event ={wenTtyping} register ={save} obj ={objProduct} cancel={clearForm} remove={remove} update={update}/>
        <TableProducts vect={listProducts} select ={selectProduct} />
      </div>
    );
  }
  
  export default Products;
  