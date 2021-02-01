import { auth, provider } from '../firebase';

const signInWithGoogle = async () => {
    let user;
    await auth
    .signInWithPopup(provider)
    .then((res) => {
        console.log(res.user);
        user = res.user;
    })
    .catch((error) => {
        console.log(error.message);
    });
    
    return user;
};

export const logout = async () => {
    let logout_succes;
    await auth.signOut()
    .then(() => {
        logout_succes = true;
    }).catch((error) => {
        console.log(error.message);
    }) 

    return logout_succes;
};

export { signInWithGoogle };
