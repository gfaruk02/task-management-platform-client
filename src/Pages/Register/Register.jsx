import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const{createUser,googleSignIn} =useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password =form.password.value;
        console.log(name, email, photo, password);
        
        createUser(email, password)
        .then(result => {
            console.log(result);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'CONGRATULATIONS! You have now successfully registered! ',
                showConfirmButton: false,
                timer: 1500
            })
            //update name and photo url
            updateProfile(result.user, {
                displayName: name,
                photoURL: photo,
            })
            .then(()=>{
               const userData ={
                name: name,
                email:email
               }
               axiosPublic.post('/users', userData)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log('User profile info Updated');
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "User Created Successfully.",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            e.target.reset();
                        }
                        navigate('/')
                    })
            })
           
            // navigate('/');

        })
        .catch(error => {
            console.log(error);
        })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result)=>{
                const userData ={
                 name: result.user?.displayName,
                 email: result.user?.email
                }
                axiosPublic.post('/users', userData)
                     .then(res => {
                         if (res.data.insertedId) {
                             console.log('User profile info Updated');
                             Swal.fire({
                                 position: "top-end",
                                 icon: "success",
                                 title: "User Created Successfully.",
                                 showConfirmButton: false,
                                 timer: 1500
                             });
                         }
                         navigate("/");
                     })
             })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    title: 'Error!',
                    text: 'You Email is incorrect. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }
    return (
        <div>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-900 text-gray-100 text-center mx-auto">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <p className="text-sm text-center text-gray-400">Have an account?
                    <Link className="focus:underline hover:underline" to='/login'> Sign in here </Link>
                </p>
                <form onSubmit={handleRegister} className="space-y-8">
                    <div className="space-y-4 pt-3">
                        <div className="space-y-2">
                            <label  className="block  text-left text-sm">Full Name</label>
                            <input type="text" name="name" placeholder="Md Golam Faruk" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required />
                        </div>
                        <div className="space-y-2">
                            <label className="block  text-left text-sm">Email address</label>
                            <input type="email" name="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required />
                        </div>
                        <div className="space-y-2">
                            <label  className="block  text-left text-sm">Photo Url</label>
                            <input type="text" name="photo" placeholder="Photo Url" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label className="text-sm">Password</label>
                            </div>
                            <input type="password" name="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required />
                        </div>
                    </div>
                    <button className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Sign up</button>
                </form>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full text-gray-400" />
                    <p className="px-3 text-gray-400">OR</p>
                    <hr className="w-full text-gray-400" />
                </div>

                <div className="my-6 space-y-4">
                    <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri border-gray-400 focus:ri">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;