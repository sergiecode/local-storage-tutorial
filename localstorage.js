

const usuario = {
    name: "SergieCode",
    password: "react_angular456"
}

const usuarioFormateado = JSON.stringify(usuario)
localStorage.setItem("usuario", usuarioFormateado)



const usuarioJSON = localStorage.getItem("usuario");
const JSONtoUsuario = JSON.parse(usuarioJSON)
console.log(JSONtoUsuario)


localStorage.removeItem("usuario")


