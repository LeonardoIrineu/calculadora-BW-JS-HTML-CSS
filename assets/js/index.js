let botoes = document.querySelector('.botoes')

let btn = botoes.querySelectorAll('span')

let valor = document.querySelector('.valor')

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', function(){
        if(this.innerHTML == "="){
            valor.innerHTML = eval(valor.innerHTML)
        } else if(this.innerHTML == 'Apagar'){
            valor.innerHTML = ''
        } else{
            valor.innerHTML += this.innerHTML
        }
    })
}