let btn = document.getElementById('claimBtn');
btn.onclick = function () {
    document.querySelector('img').src = '/assets/chocolate.gif';

    setTimeout(function () {
        firebase.auth().signOut().then(() => {
            alert('You have been signed out. Thank you for playing this game');
        }).catch((error) => {

        });
    }, 5000);
}