import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import TodoList from './TodoList';
import AddTaskModal from '../../components/AddTaskModal';
import useTask from '../../Hooks/useTask';

const DashboardHome = () => {
  const [showModal, setShowModal] = useState(false);

  const { data, refetch, isLoading } = useTask();

  const to_do = data?.filter((todo) => todo.taskProgress === 'to-do');
  const ongoing = data?.filter((todo) => todo.taskProgress === 'ongoing');
  const completed = data?.filter((todo) => todo.taskProgress === 'completed');

  console.log(to_do);
  // console.log(completed);

  return (
    <>
      <h2 className="text-2xl font-bold text-stone-900 mt-6 md:ml-10 ml-6">
        Dashboard{' '}
      </h2>
      <button
        className="mt-6 ml-6 md:ml-10 text-center flex items-center gap-2 text-primaryColor text-xl font-semibold"
        onClick={() => setShowModal(true)}
      >
        <IoIosAddCircleOutline size={27} /> <span>Add New Task</span>
      </button>

      {!data?.length ? (
        <h4 className="text-center text-red-500 text-xl sm:text-2xl md:text-3xl font-semibold h-[65vh] flex flex-col items-center justify-center">
          No tasks have been added yet
        </h4>
      ) : (
        <>
          <section className="mx-6 md:mx-10 -z-40">
            <TodoList
              data={to_do}
              refetch={refetch}
              title="Todo List"
              status="to-do"
            />
          </section>

          <section className="mx-6 md:mx-10">
            <TodoList
              data={ongoing}
              refetch={refetch}
              title="Ongoing Task"
              status="ongoing"
            />
          </section>

          <section className="mx-6 md:mx-10">
            <TodoList
              data={completed}
              refetch={refetch}
              title="Completed Task"
              status="completed"
            />
          </section>
        </>
      )}

      {showModal ? (
        <AddTaskModal refetch={refetch} setShowModal={setShowModal} />
      ) : null}
    </>
  );
};

export default DashboardHome;
