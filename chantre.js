const recognition=new webkitSpeechRecognition()
var myHeaders = new Headers();
const video= document.querySelector('#vid')
let btn1= document.querySelector('#b1')
let btn2= document.querySelector('#b2')
let texto=document.querySelector('#fuck')
myHeaders.append("X-API-KEY", "3f2b34bd0c3ba113f147ddf0f27e5fc94bc65870");
myHeaders.append("Content-Type", "application/json");
var voices = speechSynthesis.getVoices();


var voices =  window.speechSynthesis.getVoices();

recognition.lang ='en-US'


recognition.continuous = true


recognition.interimResults = false
recognition.onresult = (evens)=> {
   const results = evens.results
   const frase = results[results.length-1][0].transcript




   texto.value = frase
 




}













var raw = JSON.stringify({
  "q": texto.value
});




var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};


const leerTexto = (texto)=>
{
    const speech= new SpeechSynthesisUtterance()
    speech.text=texto
   speech.lang='en-US'
    speech.volume=10
    speech.rate=1
    speech.pitch=1.3
    window.speechSynthesis.speak(speech)
}


var ejecute=async(requestOptions)=>
  {
    
    let res = await fetch("https://google.serper.dev/search", requestOptions)
    let result= await res.json()
    const gogo= await result.peopleAlsoAsk//[1].snippet
    console.log(gogo)
    return leerTexto(gogo)  
  }
var playing=async(requestOptions)=>
{
  let response= await recognition.abort()
   response && ejecute(requestOptions)
}
  btn1.addEventListener('click',c=>
  {
      recognition.start()
  })
  btn2.addEventListener('click',c=>
  {
     playing(requestOptions)
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
  })
              





