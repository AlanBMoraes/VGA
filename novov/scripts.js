const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const nota = document.getElementById("nota");
const recebendo = document.getElementById("recebendo");
var verificaRGA = new Array(53)
var verificaNome = new Array(53)
var verificaCodigo = new Array(53)
var Password = []
var tmLista = verificaRGA.length 

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const passwordValue = password.value;
  const notaValue = nota.value;
  const recebendoValue = recebendo.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (passwordValue === "" ) {
    setErrorFor(password, "O rga é obrigatório.");
  }else if(passwordValue !== ""){
    token = 0

    verificaRGA[0] = 202111310050
    verificaRGA[1] = 202211310001
    verificaRGA[2] = 202211310002
    verificaRGA[3] = 202211310003
    verificaRGA[4] = 202211310004
    verificaRGA[5] = 202211310048
    verificaRGA[6] = 202211310005
    verificaRGA[7] = 202211310040
    verificaRGA[8] = 202211310006
    verificaRGA[9] = 202211310041
    verificaRGA[10] = 202211310042
    verificaRGA[11] = 202211310007
    verificaRGA[12] = 202211310049
    verificaRGA[13] = 202211310008
    verificaRGA[14] = 202211310044
    verificaRGA[15] = 202211310009
    verificaRGA[16] = 202211310045
    verificaRGA[17] = 202211310010
    verificaRGA[18] = 202211310046
    verificaRGA[19] = 202211310011
    verificaRGA[20] = 202211310012
    verificaRGA[21] = 202211310013
    verificaRGA[22] = 202211310014
    verificaRGA[23] = 202211310015
    verificaRGA[24] = 202211310050
    verificaRGA[25] = 202112310003
    verificaRGA[26] = 202211310016
    verificaRGA[27] = 202111310014
    verificaRGA[28] = 202211310017
    verificaRGA[29] = 202211310018
    verificaRGA[30] = 202211310019
    verificaRGA[31] = 202211310020
    verificaRGA[32] = 202211310047
    verificaRGA[33] = 202211310021
    verificaRGA[34] = 202211310022
    verificaRGA[35] = 202211310023
    verificaRGA[36] = 202211310024
    verificaRGA[37] = 202211310025
    verificaRGA[38] = 202211310026
    verificaRGA[39] = 202211310027
    verificaRGA[40] = 202211310028
    verificaRGA[41] = 202211310031
    verificaRGA[42] = 202211310032
    verificaRGA[43] = 201911317024
    verificaRGA[44] = 202211310033
    verificaRGA[45] = 202211310034
    verificaRGA[46] = 202211310035
    verificaRGA[47] = 202211310036
    verificaRGA[48] = 202211310037
    verificaRGA[49] = 202211310038
    verificaRGA[50] = 202211310051
    verificaRGA[51] = 202211310043
    verificaRGA[52] = 202011310035
    verificaRGA[53] = 202011310042

    verificaCodigo[0] = 4389
    verificaCodigo[1] = 6782
    verificaCodigo[2] = 2409
    verificaCodigo[3] = 0657
    verificaCodigo[4] = 4565
    verificaCodigo[5] = 2185
    verificaCodigo[6] = 5304
    verificaCodigo[7] = 1721
    verificaCodigo[8] = 7299
    verificaCodigo[9] = 6887
    verificaCodigo[10] = 1494
    verificaCodigo[11] = 4413
    verificaCodigo[12] = 9500
    verificaCodigo[13] = 3264
    verificaCodigo[14] = 3094
    verificaCodigo[15] = 0271
    verificaCodigo[16] = 9859
    verificaCodigo[17] = 3046
    verificaCodigo[18] = 5286
    verificaCodigo[19] = 8740
    verificaCodigo[20] = 3688
    verificaCodigo[21] = 1312
    verificaCodigo[22] = 5412
    verificaCodigo[23] = 3772
    verificaCodigo[24] = 4048
    verificaCodigo[25] = 1552
    verificaCodigo[26] = 0467
    verificaCodigo[27] = 3673
    verificaCodigo[28] = 7173
    verificaCodigo[29] = 9818
    verificaCodigo[30] = 9105
    verificaCodigo[31] = 4197
    verificaCodigo[32] = 6275
    verificaCodigo[33] = 9812
    verificaCodigo[34] = 7378
    verificaCodigo[35] = 9956
    verificaCodigo[36] = 0941
    verificaCodigo[37] = 2192
    verificaCodigo[38] = 4512
    verificaCodigo[39] = 7209
    verificaCodigo[40] = 7997
    verificaCodigo[41] = 6467
    verificaCodigo[42] = 1638
    verificaCodigo[43] = 1795
    verificaCodigo[44] = 4325
    verificaCodigo[45] = 8459
    verificaCodigo[46] = 0263
    verificaCodigo[47] = 9630
    verificaCodigo[48] = 9867
    verificaCodigo[49] = 1256
    verificaCodigo[50] = 2753
    verificaCodigo[51] = 6345
    verificaCodigo[52] = 1936
    verificaCodigo[53] = 1642

    verificaNome[0] = "Ahmad"
    verificaNome[1] = "Alan"
    verificaNome[2] = "Alisson"
    verificaNome[3] = "André"
    verificaNome[4] = "Andrey"
    verificaNome[5] = "Anthony"
    verificaNome[6] = "Artur"
    verificaNome[7] = "Asafe"
    verificaNome[8] = "Bruno"
    verificaNome[9] = "Caio Guilherme"
    verificaNome[10] = "Caio Vinicius"
    verificaNome[11] = "Carlos"
    verificaNome[12] = "Eloísa"
    verificaNome[13] = "Emanuel"
    verificaNome[14] = "Enricky"
    verificaNome[15] = "Enzo Bondan"
    verificaNome[16] = "Enzo Magalhães"
    verificaNome[17] = "Eric"
    verificaNome[18] = "Érica"
    verificaNome[19] = "Erick"
    verificaNome[20] = "Fernando"
    verificaNome[21] = "Gabriel Bernadelli"
    verificaNome[22] = "Gabriel Roberto"
    verificaNome[23] = "Giovani"
    verificaNome[24] = "Guilherme"
    verificaNome[25] = "Hitalo"
    verificaNome[26] = "Isis"
    verificaNome[27] = "Jhorkef"
    verificaNome[28] = "João Flávio"
    verificaNome[29] = "João Lozi"
    verificaNome[30] = "João Lucas"
    verificaNome[31] = "João Victor"
    verificaNome[32] = "João Vitor"
    verificaNome[33] = "Juan Borba"
    verificaNome[34] = "Julia"
    verificaNome[35] = "Kristiann"
    verificaNome[36] = "Letizia"
    verificaNome[37] = "Lorenzo"
    verificaNome[38] = "Lucas Prado"
    verificaNome[39] = "Lucas Silveira"
    verificaNome[40] = "Luiz"
    verificaNome[41] = "Melissa"
    verificaNome[42] = "Murilo"
    verificaNome[43] = "Natalia"
    verificaNome[44] = "Pedro Fernando"
    verificaNome[45] = "Pedro Valentim"
    verificaNome[46] = "Rakell"
    verificaNome[47] = "Tuliana"
    verificaNome[48] = "Victor"
    verificaNome[49] = "Vinicius"
    verificaNome[50] = "Virginia"
    verificaNome[51] = "Vitor Alves"
    verificaNome[52] = "Vitor Hugo"
    verificaNome[53] = "Yuri"

    if (verificaRGA[0] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[0] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[0] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[1] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[1] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[1] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[2] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99
      if (verificaNome[2] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[2] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[3] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[3] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[3] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[4] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[4] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[4] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[5] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99 
      if (verificaNome[5] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[5] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[6] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99 
      if (verificaNome[6] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[6] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[7] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99      
      if (verificaNome[7] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[7] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[8] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99 
      if (verificaNome[8] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[8] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[9] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99   
      if (verificaNome[9] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[9] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[10] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[10] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[10] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[11] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99
      if (verificaNome[11] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[11] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[12] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99    
      if (verificaNome[12] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[12] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[13] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[13] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[13] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[14] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[14] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[14] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[15] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[15] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[15] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[16] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[16] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[16] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[17] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99 
      if (verificaNome[17] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[17] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[18] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99   
      if (verificaNome[18] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[18] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[19] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[19] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[19] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[20] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[20] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[20] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[21] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[21] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[21] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[22] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[22] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[22] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[23] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[23] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[23] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[24] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[24] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[24] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[25] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[25] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[25] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[26] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[26] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[26] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[27] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[27] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[27] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[28] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[28] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[28] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[29] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[29] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[29] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[30] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99 
      if (verificaNome[30] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[30] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[31] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[31] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[31] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[32] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[32] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[32] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[33] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[33] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[33] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[34] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[34] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[34] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[35] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[35] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[35] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[36] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[36] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[36] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[37] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[37] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[37] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[38] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[38] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[38] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[39] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[39] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[39] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[40] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[40] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[40] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[41] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[41] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[41] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[42] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[42] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[42] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[43] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[43] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[43] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[44] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[44] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[44] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[45] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[45] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[45] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[46] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[46] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[46] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[47] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[47] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[47] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[48] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[48] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[48] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[49] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[49] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[49] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[50] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[50] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[50] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[51] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[51] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[51] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[52] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[52] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[52] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else if(verificaRGA[53] == Number(passwordValue)){ 
      setSuccessFor(password)
      token = 99  
      if (verificaNome[53] == (usernameValue)){
        setSuccessFor(username)
      } else {
        setErrorFor(username, "Nome incorreto para o RGA inserido.")
      }
      if(verificaCodigo[53] == (recebendoValue)){
        setSuccessFor(recebendo)
      } else {
        setErrorFor(recebendo,"Senha incorreta.")
      }
    }else{
      setErrorFor(password, "RGA inválido.")
    }
    if (cont = tmLista){ 
      if (token != 99){ 
        setErrorFor(password, "O número de rga é inválido1") 
      }
    }
  }

  if (notaValue === "" || isNaN(notaValue)) {
    setErrorFor(nota, "A nota é obrigatória.");
  } else if (notaValue.length <= 4 && parseFloat(notaValue) >= 0 && parseFloat(notaValue) <= 10){
    setSuccessFor(nota);
  } else {
    setErrorFor(nota, "Nota inválida.");
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  function timerS(){
    window.location.reload()
  }

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
    const data = {
      Nome: usernameValue,
      RGA: passwordValue,
      Nota: notaValue
    };

    fetch('https://api.sheetmonkey.io/form/a569JxeDpyHEC6pPR2S8Jt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((result) => {
      // Handle the result
    });
    setTimeout(timerS, 1150)
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}