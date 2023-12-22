import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const CreateTask = () => {
    const axiosPublic = useAxiosPublic()
    const handleCreateTask=e=>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const descriptions = form.descriptions.value;
        const deadlines = form.deadlines.value;
        const priority = form.priority.value;
        const createTask = { title, descriptions, deadlines, priority };
        console.log(createTask);

        axiosPublic.post('http://localhost:5000/createTask',createTask)
        .then(res => {
            if (res.data.insertedId) {
                console.log('Create task');
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Data Added in Successfully.",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
            }
        })

    }

    return (
        <div>
            <section className="p-6 bg-gray-800 text-gray-50">
                <form onSubmit={handleCreateTask} className="container flex flex-col mx-auto space-y-12">
                    <h1 className="py-5 text-5xl text-gray-50">Create Task</h1>
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full">
                                <label className="text-sm">Title</label> <br />
                                <input type="text" name="title" placeholder="Write Title" className="w-full py-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full">
                                <label className="text-sm">Descriptions</label> <br />
                                <textarea name="descriptions" placeholder="descriptions" className="w-full py-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 text-gray-900"></textarea>
                            </div>
                            <div className="col-span-full">
                                <label className="text-sm">Deadlines</label> <br />
                                <input name="deadlines" type="date" placeholder="deadlines" className="w-full py-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full">
                                <label className="text-sm">Priority</label> <br />
                                <select name="priority" className="select select-info w-full max-w-xs text-black">
                                    <option disabled selected>Select Priority</option>
                                    <option value="Low">Low</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="High">High</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <div className="flex items-center space-x-2">
                                <button className="px-4 py-2 border rounded-md border-gray-100">Submit</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default CreateTask;