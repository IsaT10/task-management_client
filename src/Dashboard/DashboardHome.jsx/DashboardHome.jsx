import React from 'react';
import { useForm } from 'react-hook-form';
import useAxios from '../../Hooks/useAxios';

const DashboardHome = () => {
  const axios = useAxios();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    const taskDetails = {
      title: data.title,
      deadline: data.deadline,
      priority: data.priority,
      description: data.description,
    };

    const res = await axios.post('/todos', taskDetails);
    console.log(res?.data);

    reset();
  };
  return (
    <section>
      <h3>TO-DO Lists</h3>
      <div className="">
        <h3 className="text-2xl font-semibold">Add new task</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start gap-5 w-[400px] md:w-[500px] lg:w-[650px]  "
        >
          <div className="flex lg:flex-row flex-col  lg:items-end w-full justify-between gap-4">
            <div className="flex flex-col  items-start w-full">
              <label className="text-stone-600 font-semibold">Title</label>
              <input
                className="py-1 min-w-full px-2 text-lg outline-none rounded-md border-2 outline-2 border-stone-500"
                type="text"
                required
                {...register('title', { required: true })}
                aria-invalid={errors.title ? 'true' : 'false'}
              />
              {errors.title?.type === 'required' && <p>Title is required</p>}
            </div>

            <div className="flex items-end gap-4 ">
              <div className="flex flex-col gap- items-start">
                <label className="text-stone-600 font-semibold">Deadline</label>
                <input
                  className="py-[3px]  px-2 text-lg outline-none rounded-md border-2 outline-2 border-stone-500"
                  type="date"
                  {...register('deadline', {
                    required: true,
                  })}
                />
              </div>

              <div>
                <select
                  className="py-[6px] px-2 text-lg outline-none rounded-md border-2 outline-2 border-stone-500"
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
            </div>
          </div>
          <div className="flex flex-col items-start min-w-full">
            <label className="text-stone-600 font-semibold">Description</label>
            <input
              className="py-1 min-w-full px-2 text-lg outline-none rounded-md border-2 outline-2 border-stone-500"
              type="text"
              required
              {...register('description', { required: true })}
              aria-invalid={errors.description ? 'true' : 'false'}
            />
            {errors.description?.type === 'required' && (
              <p>Description is required</p>
            )}
          </div>
          <button className="bg-primaryColor px-4 py-1.5 rounded-md text-white font-semibold">
            Add Task
          </button>
        </form>
      </div>
    </section>
  );
};

export default DashboardHome;
