function getPassword() {
    var chars = "0012345678910abcdefgktyisiycnusgueyi@fsi8[]]";
    var passwordLength = 16;
    var password = "";

    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById('password').value = password
  }
  function copiar(){
      const textinput=document.getElementById("password");
      const copybutton=document.getElementById("copy")
      copybutton.addEventListener("click", () => {
          textinput.select();
          document.execCommand("copy");
      });
  }
  function carregar(){
      var all=document.getElementById("all")
      all.style.opacity="8"
      all.style.transition="opacity 5s"
  }