var user="";
var contra="";
var usuario = "jhonatan";
var contraseña = "123456";
var newcontra ="";
// if (boolean===false){
//     autenticar();

//   }



function autenticar() {
    
    user = prompt("Ingrese su usuario");
    contra = prompt("Ingrese su contraseña");
    
    if (user === usuario && contra === contraseña) {
      alert("Bienvenido!");
      return true;
    } else {
      alert("Usuario o contraseña incorrectos");
      return false;
    }
  }


  function cambiar(){
    contra = prompt("Ingrese su contraseña actual");
    if (contra === contraseña){
        newcontra= prompt("Ingrese una nueva contraseña");
        contraseña=newcontra;
        alert("Su contraseña se cambio con exito")
    }else{
        alert("Error en su contraseña actual")
    }


  }




  
  