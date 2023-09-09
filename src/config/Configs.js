export const formatPhoneNumber = (valor) => {
  
    // Remove todos os caracteres não numéricos do valor do telefone
    const numeroLimpo = valor.replace(/\D/g, "");
  
    // Aplica a formatação desejada
    const telefoneFormatado = numeroLimpo.replace(
      /^(\d{2})(\d{1})(\d{4})(\d{4})$/,
      "($1)$2-$3-$4"
    );
  
    return telefoneFormatado;
  };
  