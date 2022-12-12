const imagemSlider = document.querySelectorAll(".slide");
const setaAvancar = document.getElementById('seta-avancar')
const setaVoltar = document.getElementById('seta-voltar')

let imgAtual = 0;

setaAvancar.addEventListener("click", () => {
    if(imgAtual === imagemSlider.length - 1){
        return;
    }
    imgAtual++;
    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas()
})

setaVoltar.addEventListener("click", () =>{
    if(imgAtual === 0){
        return;
    }
    imgAtual --;
    esconderImagemAberta()
    mostrarImagem()
    mostrarOuEsconderSetas()
})

function mostrarImagem() {
    imagemSlider[imgAtual].classList.add("mostrar");
}

function esconderImagemAberta(){
    const imagemAberta = document.querySelector(".mostrar");
    imagemAberta.classList.remove("mostrar")
}

function mostrarOuEsconderSetas(){
    const naoEhAPrimeiraImg = imgAtual !== 0;
    if(naoEhAPrimeiraImg){
        setaVoltar.classList.remove("opacidade");
    }else{
        setaVoltar.classList.add("opacidade");
    }

    const ehUltimaImg = imgAtual !== 0 && imgAtual === imagemSlider.length - 1;
    if(ehUltimaImg){
        setaAvancar.classList.add("opacidade");
    }else{
        setaAvancar.classList.remove("opacidade");
    }
}