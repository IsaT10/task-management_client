import { useForm } from 'react-hook-form';
import useAxios from '../Hooks/useAxios';
import { toast } from 'react-toastify';
import useAuth from '../Hooks/useAuth';

const AddTaskModal = ({ refetch, setShowModal }) => {
  const { user } = useAuth();
  const axios = useAxios();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);

    const taskDetails = {
      title: data.title,
      deadline: data.deadline,
      priority: data.priority,
      description: data.description,
      taskProgress: 'to-do',
      email: user?.email,
    };

    const res = await axios.post('/todos', taskDetails);

    if (res?.data?.acknowledged) {
      toast.success('Task added');
      reset();
      refetch();
      setShowModal(false);
    }
  };
  return (
    <>
      <div className="fixed bg-opacity-30 inset-0 z-[999] overflow-y-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="modal-box md:min-w-[600px] mt-36 mx-auto overflow-x-hidden bg-red-100"
        >
          <div className=" flex flex-col items-start gap-2">
            <label className="font-semibold">Title</label>
            <input
              className="px-3 rounded-md py-1.5 w-full outline-none text-lg  border-stone-500 "
              type="text"
              name="title"
              required
              {...register('title', { required: true })}
              aria-invalid={errors.title ? 'true' : 'false'}
            />

            <div className="flex items-center gap-3 justify-between w-full">
              <div className="w-1/2 flex flex-col  gap-2">
                <label className="font-semibold">Priority</label>
                <select
                  className="px-3 py-1.5  w-full  text-stone-800 outline-none   border-stone-600 rounded-md"
                  required
                  defaultValue="null"
                  {...register('priority', { required: true })}
                >
                  <option disabled value="null">
                    Priority
                  </option>
                  <option value="Low">Low</option>
                  <option value="Moderate">Moderate</option>
                  <option value="High">High</option>
                </select>
                {errors.priority && (
                  <span className="text-red-600 font-semibold -mt-1.5 ml-px text-sm tracking-wide">
                    This field is required
                  </span>
                )}
              </div>

              <div className="w-1/2 flex flex-col items-start gap-2">
                <label className="font-semibold">Deadline</label>
                <input
                  className="px-3 py-1.5  w-full  text-stone-800 outline-none   border-stone-600 rounded-md"
                  name="deadline"
                  required
                  type="date"
                  {...register('deadline', {
                    required: true,
                  })}
                />
              </div>
            </div>
            <label className="font-semibold">Description</label>
            <textarea
              className="px-3 py-2  w-full text-stone-800 outline-none text-lg  border-stone-600 rounded-md"
              type="text"
              name="description"
              required
              {...register('description', { required: true })}
              aria-invalid={errors.description ? 'true' : 'false'}
            />
          </div>

          <button className="bg-primaryColor px-4 py-1.5 rounded-md mt-5 text-white font-semibold text-center">
            Add Task
          </button>

          <button
            onClick={() => setShowModal(false)}
            className="absolute top-2 right-2"
          >
            ❌
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTaskModal;
