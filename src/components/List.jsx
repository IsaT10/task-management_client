import React, { useState } from 'react';
import useAxios from '../Hooks/useAxios';
import { toast } from 'react-toastify';
import { MdEditSquare } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';
import Modal from './Modal';
import { useDrag } from 'react-dnd';

const List = ({ todo, refetch }) => {
  const [showModal, setShowModal] = useState(false);
  const axios = useAxios();

  const inputDate = new Date(todo?.deadline);
  const currentDate = new Date();
  const HoursRemaining = Math.floor(
    (currentDate - inputDate) / (1000 * 60 * 60)
  );
  const daysRemaining = Math.floor(
    (currentDate - inputDate) / (1000 * 60 * 60 * 24)
  );

  const formattedDate = new Date(todo?.deadline)
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\//g, '-');

  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: 'task',
      item: { id: todo._id },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );

  const handleDelete = async (id) => {
    // console.log(id);
    const res = await axios.delete(`/todos/${id}`);

    if (res?.data.deletedCount) {
      toast.success('Task Deleted');
      refetch();
    }
    // console.log(res.data);
  };

  return (
    <tbody key={todo?._id} className="" ref={dragRef} draggable>
      <tr className="border-b-2  border-stone-200 cursor-grab">
        <td className=" font-semibold text-base w-[30%] ">
          <p>{todo?.title}</p>
        </td>
        <td className="text-base  md:block mt-1  hidden w-[30%]">
          <p>{todo?.description}</p>
        </td>
        <td className="sm:text-base w-28">
          <p>{todo?.priority}</p>
        </td>
        <td className="sm:text-base w-32 cursor-default">
          <div
            className="tooltip tooltip-left bg-white"
            data-tip={`${Math.abs(HoursRemaining)} hrs`}
          >
            <p className="">
              {Math.abs(daysRemaining)}{' '}
              {Math.abs(daysRemaining) > 1 ? 'days' : 'day'}
            </p>
          </div>
          {/* <p>{Math.abs(HoursRemaining)}hrs</p> */}
        </td>
        <td className="w-6 text-center ">
          <button onClick={() => setShowModal(true)} className="text-blue-600">
            <MdEditSquare size={25} />
          </button>
        </td>
        <td className="w-6 text-center ">
          <button
            onClick={() => handleDelete(todo?._id)}
            className="text-red-600"
          >
            <FaTrashAlt size={22} />
          </button>
        </td>
      </tr>
      {showModal ? (
        <Modal
          title={todo?.title}
          description={todo?.description}
          priority={todo?.priority}
          deadline={todo?.deadline}
          refetch={refetch}
          id={todo?._id}
          setShowModal={setShowModal}
        />
      ) : null}
    </tbody>
  );
};

export default List;
