import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxios from '../../Hooks/useAxios';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt } from 'react-icons/fa';
import { MdEditSquare } from 'react-icons/md';
import Modal from '../../components/Modal';
import List from '../../components/List';
import TodoList from './TodoList';
import useAuth from '../../Hooks/useAuth';
import AddTaskModal from '../../components/AddTaskModal';

const DashboardHome = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();
  const axios = useAxios();

  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['todos', user?.email],
    queryFn: async () => {
      const res = await axios.get(`/todos?email=${user?.email}`);

      // console.log(res.data);
      return res.data;
    },
  });

  const to_do = data?.filter((todo) => todo.taskProgress === 'to-do');
  const ongoing = data?.filter((todo) => todo.taskProgress === 'ongoing');
  const completed = data?.filter((todo) => todo.taskProgress === 'completed');

  // console.log(completed);
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
    }
  };

  return (
    <>
      <section className="mx-10">
        <TodoList
          data={to_do}
          refetch={refetch}
          title="Todo List"
          status="to-do"
        />
        <button onClick={() => setShowModal(true)}>Add new task</button>
      </section>

      <section className="mx-10">
        <TodoList
          data={ongoing}
          refetch={refetch}
          title="Ongoing List"
          status="ongoing"
        />
      </section>

      <section className="mx-10">
        <TodoList
          data={completed}
          refetch={refetch}
          title="Completed List"
          status="completed"
        />
      </section>

      {showModal ? (
        <AddTaskModal refetch={refetch} setShowModal={setShowModal} />
      ) : null}
    </>
  );
};

export default DashboardHome;
