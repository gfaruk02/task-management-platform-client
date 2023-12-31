import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";


const Dashboard = () => {
	const { user, logOut } = useAuth()
	const navigate = useNavigate()

	const handlesignOut = () => {
		logOut()
			.then(() => {
				console.log('User LogOut Success')
			})
		navigate("/")
			.catch(error => console.error(error))
	}
	return (
		<div className="w-11/12 mx-auto">
			<Navbar></Navbar>
			<div className="flex md:flex-row flex-col mt-5">
				<div className="h-auto p-3 space-y-2 w-60 bg-gray-900 text-gray-100">
					{
						user ? <div className="flex items-center p-2 space-x-4">
							<img src={user.photoURL} alt="" className="w-12 h-12 rounded-full bg-gray-500" />
							<div>
								<h2 className="text-lg font-semibold"> {user.displayName}</h2>
								<p>{user.email}</p>
								<span className="flex items-center space-x-1">
									<a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">View profile</a>
								</span>
							</div>
						</div>
							:
							<></>
					}
					<div className="divide-y divide-gray-700">
						<ul className="pt-2 pb-4 space-y-1 text-sm">
							<li>
								<NavLink to='/dashboard/userdashboard' rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-400">
										<path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
									</svg>
									<span>All Tasks</span>
								</NavLink>
							</li>
							<li>
								<NavLink to='/dashboard/createtask' rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-400">
										<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
									</svg>
									<span>Create Task</span>
								</NavLink>
							</li>
						</ul>
						<ul className="pt-4 pb-2 space-y-1 text-sm">
							<li>

								<NavLink rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-400">
										<path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
										<rect width="32" height="64" x="256" y="232"></rect>
									</svg>
									<span onClick={handlesignOut} >Logout</span>
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex-1">
					<h1 className="text-3xl  pl-5">Welcome to the Task Management Dashbord </h1>
					<Outlet></Outlet>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};


export default Dashboard;