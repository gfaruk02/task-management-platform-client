import { useDrag } from "react-dnd";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";



const TaskLists = ({ task }) => {
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
  const { _id, title, deadlines, priority, descriptions } = task;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  console.log(isDragging);

  const handleDeleteRequest = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/createTask/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
      }
      navigate('/dashboard')
    });
  }
  const handleUpdateTask = event => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const deadlines = form.deadlines.value;
    const priority = form.priority.value;
    const descriptions = form.descriptions.value;
    const taskItem = { _id, title, deadlines, priority, descriptions };
    console.log(taskItem);
    fetch(`https://task-management-platform-server-fawn.vercel.app/createTask/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(taskItem)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: 'Successfully!',
            text: 'Update Coffee Successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          })

        }
        form.reset();
      })
      navigate('/dashboard/userdashboard')
  }

  const handleViewTask = (taskId) => {
    const modalId = `my_modal_${taskId}`;
    document.getElementById(modalId).showModal();
  }
  return (
    <div>
      <div ref={drag} className="mb-2 p-3 bg-gray-900 text-gray-100">
        <h4 className="font-bold text-xl py-3">{title}</h4>

        <div className="flex justify-between text-gray-50 gap-5 items-center">
          <span className="text-md ">Deadline: {deadlines} </span>
          <span className="text-md ">Priority: {priority}</span>
        </div>
        <div className="p-4 space-y-2 text-sm text-gray-400">
          <p>{descriptions}</p>
        </div>
        <div className="p-4 space-x-4 text-sm text-gray-400">


        <span>
  <button className="btn" onClick={() => handleViewTask(_id)}>View</button>
  <dialog id={`my_modal_${_id}`} className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className="text-black">
                  <h3 className="font-bold text-lg">{title}</h3>
                  <p className="py-4">Deadline: {deadlines} </p>
                  <p className="py-4">Priority: {priority}</p>
                  <p className="py-4">Descriptions: {descriptions}</p>
                </div>

              </div>
            </dialog>
          </span>


          <span>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Edit</button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <form onSubmit={handleUpdateTask} className="container flex flex-col mx-auto space-y-12">
                  <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                      <div className="col-span-full">
                        <label className="text-sm">Title</label> <br />
                        <input defaultValue={title} type="text" name="title" placeholder="Write Title" className="w-full py-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                      </div>
                      <div className="col-span-full">
                        <label className="text-sm">Descriptions</label> <br />
                        <textarea defaultValue={descriptions} name="descriptions" placeholder="descriptions" className="w-full py-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 text-gray-900"></textarea>
                      </div>
                      <div className="col-span-full">
                        <label className="text-sm">Deadlines</label> <br />
                        <input defaultValue={deadlines} name="deadlines" type="date" placeholder="deadlines" className="w-full py-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                      </div>
                      <div className="col-span-full">
                        <label className="text-sm">Priority</label> <br />
                        <select defaultValue={priority} name="priority" className="select select-info w-full max-w-xs text-black">
                          <option disabled selected>Select Priority</option>
                          <option value="Low">Low</option>
                          <option value="Moderate">Moderate</option>
                          <option value="High">High</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-span-full">
                      <div className="flex items-center space-x-2">
                        <input className="btn btn-block my-10 bg-orange-400  text-white hover:bg-green-500" type="submit" value="Update Task" />
                      </div>
                    </div>
                  </fieldset>
                </form>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>


          </span>
          <span>
            <button onClick={() => handleDeleteRequest(_id)} className="btn btn-ghost text-red-600 bg-orange-500"> Delete </button></span>
        </div>
      </div>
    </div>
  );
};

export default TaskLists;