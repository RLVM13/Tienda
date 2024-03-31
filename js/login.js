// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
import { getFirestore, collection, doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/* // Your web app's Firebase configuration
const firebaseConfig = {
//Paste your Firebase configuration
apiKey: "AIzaSyAJ_lGsWGRRInYouFiEFgiVlEIGe90pwOk",
  authDomain: "lassostore-a73a6.firebaseapp.com",
  projectId: "lassostore-a73a6",
  storageBucket: "lassostore-a73a6.appspot.com",
  messagingSenderId: "333623068421",
  appId: "1:333623068421:web:583bd16fa4e6e72f5884bb"
}; */

// Your web app's Firebase configuration
const firebaseConfig = {
    //Paste your Firebase configuration
    apiKey: "AIzaSyAEQuj_Q0b4ksbpzKhPn5_jweDaIowS_UA",
    authDomain: "prueba-web-55cc0.firebaseapp.com",
    projectId: "prueba-web-55cc0",
    storageBucket: "prueba-web-55cc0.appspot.com",
    messagingSenderId: "40027902690",
    appId: "1:40027902690:web:583bd16fa4e6e72f5884bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize Auth
const auth = getAuth();
const user = auth.currentUser;
//Initialize DDBB
const db = getFirestore(app);
//Initialize cloudstore
const storage = getStorage();


const signUpForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const logout = document.getElementById('logout');
const userData = document.getElementById('user-data');

//SignUp function
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const signUpUser = document.getElementById('signup-user').value;
    const signUpLastNameUser = document.getElementById('signup-lastname').value;
    const signUpEmail = document.getElementById('signup-email').value;
    const signUpTelefono = document.getElementById('signup-movil').value;
    const signUpPassword = document.getElementById('signup-pass').value;
    const signUpRePassword = document.getElementById('signup-repass').value;

    const usersRef = collection(db, "LassoStoreUsers");
    /* const signUpImg = document.getElementById('signup-picture').files[0];
    const storageRef = ref(storage, signUpImg.name);
    let publicImageUrl; */
    if (signUpRePassword === signUpPassword) {
        try {
            //Create auth user
            await createUserWithEmailAndPassword(auth, signUpLastNameUser, signUpEmail, signUpTelefono, signUpPassword)
                .then((userCredential) => {
                    console.log('Usuario Registrado')
                    const user = userCredential.user;
                    signUpForm.reset();
                })
            //Upload file to cloud storage
            /* await uploadBytes(storageRef, signUpImg).then(async (snapshot) => {
                console.log('Uploaded a blob or file!')
                publicImageUrl = await getDownloadURL(storageRef);
            }) */
            //Create document in DB
            await setDoc(doc(usersRef, signUpEmail), {
                username: signUpUser,
                email: signUpEmail,
                /* profile_picture: publicImageUrl */
            })
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    else alert("Las contraseñas no coinciden");
})

//Login function
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-pass').value;
    //Call the collection in the DB
    const docRef = doc(db, "users", loginEmail);
    //Search a document that matches with our ref
    const docSnap = await getDoc(docRef);

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {
            console.log('Usuario Logueado')
            const user = userCredential.user;
            loginForm.reset();
        })
        .then(() => {
            if (docSnap.exists()) {
                userData.style.cssText = 'background-color: #73AB84;width: 50%;margin: 2rem auto;padding: 1rem;border-radius: 5px;display: flex;flex-direction: column;align-items: center';
                userData.innerHTML = `<h3>User Data</h3>
                              <p>Username: ${docSnap.data().username}</p>
                              <p>Email: ${docSnap.data().email}</p>`
                              //<img src=${docSnap.data().profile_picture} alt='User profile picture'>
            } else {
                console.log("No such document!");
            }
        })
        .catch((error) => {
            document.getElementById('msgerr').innerHTML = 'Usuario o Contraseña no válidos';
            const errorCode = error.code;
            const errorMessage = error.message;
        });
})

//Logout function
logout.addEventListener('click', () => {
    signOut(auth).then(() => {
        console.log('Logout user')
        userData.style.cssText = '';
        userData.innerHTML = ``;
    }).catch((error) => {
        console.log('Error: ', error)
    });
})

//Observe the user's state
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('Logged user');
    } else {
        console.log('No logged user');
    }
})
