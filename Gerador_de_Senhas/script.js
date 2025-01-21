function gerarSenha(tamanho, incluirSimbolos) {
    const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_-+=<>?/|";
    let caracteres = letras + numeros;
  
    if (incluirSimbolos) {
      caracteres += simbolos;
    }
  
    let senha = "";
    for (let i = 0; i < tamanho; i++) {
      senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
  
    return senha;
  }
  
  document.getElementById("generate-btn").addEventListener("click", () => {
    const tamanho = document.getElementById("length").value;
    const incluirSimbolos = document.getElementById("include-symbols").checked;
  
    // Gera a senha
    const senha = gerarSenha(tamanho, incluirSimbolos);
    const output = document.getElementById("password-output");
    output.value = senha;
  
    // Anima o campo de saída
    const outputContainer = document.querySelector(".output");
    outputContainer.classList.add("visible");
  
    // Efeito de clique no botão
    const btn = document.getElementById("generate-btn");
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
  
  document.getElementById("copy-btn").addEventListener("click", () => {
    const senha = document.getElementById("password-output");
    senha.select();
    senha.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand("copy");
  
    // Exibe uma mensagem temporária
    const btnCopy = document.getElementById("copy-btn");
    btnCopy.textContent = "Copiado!";
    setTimeout(() => {
      btnCopy.textContent = "Copiar";
    }, 1500);
  });
  