import { useForm } from 'react-hook-form';
import useAxios from '../Hooks/useAxios';
import { toast } from 'react-toastify';

const Modal = ({
  deadline,
  priority,
  description,
  title,
  refetch,
  id,
  setShowModal,
}) => {
  const axios = useAxios();

  const currentDate = new Date();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const updateDetails = {
      title: data.title,
      deadline: data.deadline,
      priority: data.priority,
      description: data.description,
    };

    const inputDate = new Date(data.deadline);

    const daysRemaining = Math.floor(
      (currentDate - inputDate) / (1000 * 60 * 60 * 24)
    );

    if (new Date(data.deadline).getTime() <= currentDate.getTime()) {
      toast.error('The Date must be Bigger or Equal to today date');
      return;
    }
    if (Math.abs(daysRemaining) > 15) {
      toast.error('Date difference exceeds limit');
      return;
    }

    const res = await axios.patch(`/todos/${id}`, updateDetails);

    if (res?.data?.acknowledged) {
      toast.success('Task Updated');
      reset();
      refetch();
      setShowModal(false);
    }
  };
  return (
    <>
      <div className="fixed inset-0 z-[999] overflow-y-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-red-100 modal-box  md:min-w-[600px] mt-36 mx-auto overflow-x-hidden"
        >
          <div className=" flex flex-col items-start gap-2">
            <label className="font-semibold">Title</label>
            <input
              className="px-3 rounded-md py-1.5 w-full outline-none text-lg  border-stone-500 "
              type="text"
              defaultValue={title}
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
                  defaultValue={priority}
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
                  defaultValue={deadline}
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
              defaultValue={description}
              required
              {...register('description', { required: true })}
              aria-invalid={errors.description ? 'true' : 'false'}
            />
          </div>

          <button className="bg-primaryColor px-4 py-1.5 rounded-md mt-5 text-white font-semibold text-center">
            Update Task
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

export default Modal;
