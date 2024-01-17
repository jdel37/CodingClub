const recognition=new webkitSpeechRecognition()
const button1= document.querySelector('#b1')
const button2= document.querySelector('#b2')
const texto= document.getElementById('fuck')
let fill = texto.value
recognition.lang ='es-ES'

recognition.continuous = true

recognition.onresult = (evens)=> { 
   const results = evens.results
   const frase = results[results.length-1][0].transcript

   texto.value = frase
  

}




const leerTexto = (texto)=>
{
    const speech= new SpeechSynthesisUtterance()
    speech.text=texto
    speech.volume=1000000
    speech.rate=0.5
    speech.pitch=0  
    console.log(fill)
    window.speechSynthesis.speak(speech)
}


   
button1.addEventListener('click',c=>
{
    recognition.start()
})
button2.addEventListener('click',c=>
{
    recognition.abort()
    leerTexto(texto.value)
})
            
         
        

   
       
            
           
        
    

