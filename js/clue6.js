let btn= document.querySelector('button');
let input = document.querySelector('input');
let total=0,correct=0.0;

btn.onclick = function(){
    let answerString = input.value.toString().toLowerCase().trim();
    total++;
    var ok = false;

    if(answerString.length==0){
        alert('Invalid input');
    }
    else if(answerString=="fire"){
        correct++;
        ok = true;
    }else{
        alert('wrong answer');
    }
    accuracy = (correct/total)*100;
    console.log(accuracy);
    
    uploadData(accuracy,ok);
}

function uploadData(accuracy,ok) {
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
            var uid = user.uid;
            await firebase.database().ref('data/' + uid + '/clue6').set({
                accuracy: accuracy
            })

            if(ok){
                window.location.href = 'end.html';
            }

        } else {
            alert('data not uploaded');
        }
    });
}