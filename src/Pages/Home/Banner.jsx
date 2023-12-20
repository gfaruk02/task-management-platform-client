

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/TgstW4z/task-management.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Organize every task hare</h1>
                        <p className="mb-5">Easily manage all your daily lists and tasks without missing a beat</p>
                        <button className="btn btn-primary">Let’s Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;