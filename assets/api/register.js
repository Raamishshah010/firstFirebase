

function register() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email == "" || password == "") {
        window.alert('Please Enter All Fields');
    } else {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                
                console.log(user);
                window.location.href = '../../home.html';


            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..

                window.alert(errorMessage)
            });


    }
}