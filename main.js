

function startClassification() {
    navigator.mediaDevices.getUserMedia({
audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vVjEJF50Q/model.json', modelReady)    
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } 
    else {
        console.log(results);  
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
    document.getElementById("result_label").innerHTML = 'Escucho - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precision - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+ random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb("+ random_number_r+","+random_number_g+","+random_number_b+")";

    img = document.getElementById('listen'); // esto fue el error 


if(results[0].label == "Pinguino"){
img.src = "ping.jpg";     
} else if (results[0].label == "conejo") {
img.src = "conejo.jpg";   
} else if(results[0].label == "gato") {
img.src = "gat.jpg";   
}else if(results[0].label == "perro") {
img.src = "husky.jpg";   
} else{
    }
}
}


