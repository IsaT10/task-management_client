import React from 'react';
import useTask from '../../Hooks/useTask';
import TodoList from '../DashboardHome.jsx/TodoList';
import Heading from '../../components/Heading';

const AllTask = () => {
  const { data, refetch, isLoading } = useTask();

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-8">
        <Heading title="All Task" subTitle="Your Task Command Center" />
      </div>

      <section className="mx-6 md:mx-10 -z-40">
        <TodoList data={data} t refetch={refetch} />
      </section>
    </>
  );
};

export default AllTask;
