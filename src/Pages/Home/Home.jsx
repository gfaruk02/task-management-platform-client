import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
           


<section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-3xl font-bold leadi sm:text-4xl"> Who Benefits from Our Platform?
			</h1>
           <div className=" mt-5"> 
           <h3 className="text-2xl font-semibold"> Developers: </h3>
			<p className=" text-lg mb-4">Streamline your project management and task allocation effortlessly.
			</p>
           </div>
           <div className=""> 
           <h3 className="text-2xl font-semibold"> Corporate Professionals: </h3>
			<p className=" text-lg mb-4">Corporate Professionals: Efficiently organize team tasks and projects for maximum productivity.
			</p>
           </div>
           <div className=""> 
           <h3 className="text-2xl font-semibold"> Bankers: </h3>
			<p className=" text-lg mb-4">Simplify task handling and optimize workflow with our intuitive platform.

			</p>
           </div>

		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://i.ibb.co/TgstW4z/task-management.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
        </div>
    );
};

export default Home;