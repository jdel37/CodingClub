var myHeaders = new Headers();
let btn1= document.querySelector('#b1')
let btn2= document.querySelector('#b2')
let texto=document.querySelector('#fuck')
myHeaders.append("X-API-KEY", "3f2b34bd0c3ba113f147ddf0f27e5fc94bc65870");
myHeaders.append("Content-Type", "application/json");
texto.value= "Coding"










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
    await console.log(result.peopleAlsoAsk[1].snippet)
    await leerTexto(result.peopleAlsoAsk[1].snippet)
  }

  add
  if()
  {

  }
ejecute(requestOptions)




