let mode = document.querySelector('#icon')

mode.addEventListener('click',()=>{
    let calculadora = document.querySelector(".calculadora")
    let container = document.querySelector('.container')
    let btn = document.querySelector('.botoes')
    let valor = document.querySelector('.valor')
    let apagar = document.querySelector('.apagar')
    let somar = document.querySelector('.somar')
    let igual = document.querySelector('.igual')

    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun')

        calculadora.classList.add('dark')
        container.classList.add('dark')
        btn.classList.add('dark')
        valor.classList.add('dark')
        apagar.classList.add('dark')
        somar.classList.add('dark')
        igual.classList.add('dark')
    }else{
        mode.classList.add('fa-moon')
        mode.classList.remove('fa-sun')

        calculadora.classList.remove('dark')
        container.classList.remove('dark')
        btn.classList.remove('dark')
        valor.classList.remove('dark')
        apagar.classList.remove('dark')
        somar.classList.remove('dark')
        igual.classList.remove('dark')
    }
})