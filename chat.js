const recognition=new webkitSpeechRecognition()
const button1= document.querySelector('#b1')
const button2= document.querySelector('#b2')
const texto= document.getElementById('fuck')
const video= document.querySelector('#vid')
var voices = speechSynthesis.getVoices();
let fill = texto.value
video.volume=0
var voices =  window.speechSynthesis.getVoices();
recognition.lang ='en-US'


recognition.continuous = true


recognition.interimResults = false
recognition.onresult = (evens)=> {
   const results = evens.results
   const frase = results[results.length-1][0].transcript




   texto.value = frase
 




}






const leerTexto = (texto)=>
{
    const speech= new SpeechSynthesisUtterance()


    speech.text=texto
   speech.lang='en-US'


    speech.volume=10
    speech.rate=1
    speech.pitch=1.3
    console.log(fill)
    window.speechSynthesis.speak(speech)
}








   
button1.addEventListener('click',c=>
{
    var startTime = 4;
var endTime = 7;
    c.preventDefault();
   
    function checkTime() {
        if (video.currentTime >= endTime) {
           video.pause();
        } else {
           /* call checkTime every 1/10th
              second until endTime */
           setTimeout(checkTime, 100);
        }
    }
    video.currentTime = startTime;
    video.play();
    checkTime();
    video.play();
    video.pause();
    video.currentTime = 4;
    video.play();
   
    leerTexto("Hello,My name is Birdie,Glad to meet you")
   
     
   
   
},false)
button2.addEventListener('click',c=>
{
    var startTime = 4;
var endTime = 10;
    c.preventDefault();
   
    function checkTime() {
        if (video.currentTime >= endTime) {
           video.pause();
        } else {
           /* call checkTime every 1/10th
              second until endTime */
           setTimeout(checkTime, 100);
        }
    }
    video.currentTime = startTime;
    video.play();
    checkTime();
    video.play()
    leerTexto("CCA is a bilingul school that teach children and youngs, who can serve others and improve people's lives")
})
           





