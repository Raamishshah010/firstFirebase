


function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email == "" || password == "") {
        window.alert('Please Enter All Fields');
    } else {

        $('#submitBtn').html('Please Wait....')

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                

                window.location.href = '../../home.html';

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                window.alert(errorMessage)
            });

    }
}