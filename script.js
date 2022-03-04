// NÃO SEI O Q É
'use strict';

//DECLARAÇÃO DO ARRAY DE IMAGENS
let imagens = [
    {'id':'1','url':'./IMAGE/1.jpg'},
    {'id':'2','url':'./IMAGE/2.jpg'},
    {'id':'3','url':'./IMAGE/3.png'},
    {'id':'4','url':'./IMAGE/4.jpg'},
    {'id':'5','url':'./IMAGE/5.jpg'},
    {'id':'6','url':'./IMAGE/6.png'},
    {'id':'7','url':'./IMAGE/7.jpg'}
];

//CRIANDO A FUNÇÃO CONTEINER
let conteiner = document.querySelector('#conteudo');

//CRIAR A FUNÇÃO LoadImagens
let loadImagens = (imagens, conteiner) =>{
    imagens.forEach(imagem => {
        conteiner.innerHTML +=
        `<div class="item">
            <img src="${imagem.url}">`
    });
};
//CHAMAR A FUNÇÃO
loadImagens(imagens, conteiner);

//CRIAR VARIAVEL ITEMS
let items = document.querySelectorAll('.item');

//FUNÇÕES DOS BOTÕES
let voltar = () =>{
    conteiner.appendChild(items[0]);
    items = document.querySelectorAll('.item');
};

let passar = () =>{
    let ult_item = items[items.length -1];
    conteiner.insertBefore(ult_item, items[0]);
    items = document.querySelectorAll('.item');
};

//CHAMAR AS FUNÇÕES
document.querySelector('#btn_left').addEventListener('click' , voltar);
document.querySelector('#btn_rigth').addEventListener('click' , passar);