function StartIdentification(){
    navigator.mediaDevices.getUserMedia({audio:true});

    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xviegeNgo/model.json',modelReady);
}

function modelReady(){

    classifier.classify(gotResults);
}