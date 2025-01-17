import { PlayGame } from './uiDom'

document.getElementById('buttonStart').addEventListener('click' , () => {

    PlayGame();
})


document.getElementById('buttonRefresh').addEventListener('click' , () => {

    PlayGame();
})

//Aqui estaria bien juntar los dos botones asi: 
//document.getElementById('buttonStart').addEventListener('click' , () => {
// document.getElementById('buttonRefresh').addEventListener('click' , () => {
//    PlayGame();
//})
