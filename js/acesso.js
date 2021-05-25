var logado = false

function acesso(form){
    if (form.email.value == "jockson" && form.senha.value == "mateus100"){
        window.localStorage.setItem("logado", true)
        location = "fazendas-main.html"
    }
    else {
        alert("dados incorretos")
        
    }
}

function sair(){
    if (window.confirm("Você realmente quer sair?")) {
        window.localStorage.setItem("logado", false)
        location = "fazendas.html"
      }
}
