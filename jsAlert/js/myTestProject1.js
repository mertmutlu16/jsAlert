let isim= prompt("Adınız nedir ?");

const isimYaz = document.querySelector('span');
isimYaz.textContent = `${isim}`;

const clock=document.querySelector('.clock');

var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
const saatYaz = () =>{
    const now= new Date();
    const hours=now.getHours();
    const minutes=now.getMinutes();
    const seconds = now.getSeconds();
    const day= now.getDay();
    //console.log(gunler[day]);

    const html= 
    `
    <span>${hours}</span>:
    <span>${minutes}</span>:
    <span>${seconds}</span>
    <span> ${gunler[day]}</span>
    `
    clock.innerHTML=html;
    
};
setInterval(saatYaz,1000);