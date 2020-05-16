import React, { useState, ChangeEvent } from "react";
import Link from 'next/link'
import { RootState } from '../../reducers/index'




const SignIn = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    // const signInWithEmailAndPasswordHandler =
    //     (event: React.MouseEvent<HTMLButtonElement>, email: string, password: string) => {
    //         event.preventDefault();
    //         auth.signInWithEmailAndPassword(email, password).catch(error => {
    //             setError("Error signing in with password and email!");
    //             console.error("Error signing in with password and email", error);
    //         });
    //     };

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;

        if (name === 'userEmail') {
            setEmail(value);
        }
        else if (name === 'userPassword') {
            setPassword(value);
        }
    };

    const loginWithGoogle = () => {
        firebase.login({ provider: 'google', type: 'popup' })
    }

    return (
        <div className="mt-8">
            <h1 className="text-3xl mb-2 text-center font-bold">Sign In</h1>
            <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
                {error !== null && <div className="py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
                {/* <form className="">
                    <label htmlFor="userEmail" className="block">
                        Email:
                    </label>
                    <input
                        type="email"
                        className="my-1 p-1 w-full"
                        name="userEmail"
                        value={email}
                        placeholder="E.g: faruq123@gmail.com"
                        id="userEmail"
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <label htmlFor="userPassword" className="block">
                        Password:
                    </label>
                    <input
                        type="password"
                        className="mt-1 mb-3 p-1 w-full"
                        name="userPassword"
                        value={password}
                        placeholder="Your Password"
                        id="userPassword"
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <button className="bg-green-400 hover:bg-green-500 w-full py-2 text-white" onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}>
                        Sign in
                    </button>
                </form> */}
                <p className="text-center my-3">or</p>
                {
                    !isLoaded(auth)
                        ? <span>Loading...</span>
                        : isEmpty(auth)
                            // <GoogleButton/> button can be used instead
                            ? <button onClick={loginWithGoogle}>Login With Google</button>
                            : <pre>{JSON.stringify(auth, null, 2)}</pre>
                }
                <button onClick={loginWithGoogle}>Login With Google</button>
                <p className="text-center my-3">
                    Don't have an account?{" "}
                    <Link href="/signup" >
                        <a className="text-blue-500 hover:text-blue-600">Sign up here</a>

                    </Link>{" "}
                    <br />{" "}
                    <Link href="/passwordReset" >
                        <a className="text-blue-500 hover:text-blue-600">
                            Forgot Password?
                        </a>
                    </Link>
                </p>
            </div>
        </div>
    );
};
export default SignIn;