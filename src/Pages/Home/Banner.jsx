import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/PQGfSBL/1688638564022.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Organize every task hare</h1>
                        <p className="mb-5 text-xl">Easily manage all your daily tasks without missing a beat</p>
                        <Link to='/login'> <button className="btn btn-primary">Let’s Explore</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;