Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
})

camera=document.getElementById("camera")
Webcam.attach(camera);

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';

    })
}
console.log("Versão do ml5",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/[...]/model.json",modelLoaded)

function modelLoaded(){
    console.log("Model Loaded funcionando")

}

function check(){
    img=document.getElementById("captured_image")//img é a variável que guarda a imagem que a câmera capturou

    classifier.classify(img,gotResult)
}
function gotResult(error,results){
    if(error){
    console.log(error)
    }
    else{
        console.log(results)
        document.getElementById("resultObjectName").innerHTML=results[0].label
        document.getElementById("resultObjectAccuracy").innerHTML=results[0].confidance 
    }
}
