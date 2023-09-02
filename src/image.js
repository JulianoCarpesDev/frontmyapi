
 function Imagem(){

    var imagem = new Image();
    imagem.src = './placa.jpg';
    
    // Passo 2: Aguarde o carregamento completo da imagem
    imagem.onload = function () {
      // Passo 3: Crie um elemento de canvas
      var canvas = document.createElement('canvas');
      canvas.width = imagem.width;
      canvas.height = imagem.height;
    
      // Passo 4: Desenhe a imagem no canvas
      var contexto = canvas.getContext('2d');
      contexto.drawImage(imagem, 0, 0, imagem.width, imagem.height);
    
      // Passo 5: Converta o canvas para uma data URL (formato base64)
      var dataURL = canvas.toDataURL('image/jpeg'); // Você pode escolher o formato, como 'image/jpeg' ou 'image/png'
    
      // Agora, 'dataURL' contém a imagem codificada como uma data URL
      console.log(dataURL);
    };

 }

 export default Imagem;