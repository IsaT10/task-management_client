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

  console.log(isDragging);

  const handleDelete = async (id) => {
    console.log(id);
    const res = await axios.delete(`/todos/${id}`);

    if (res?.data.deletedCount) {
      toast.success('Task Deleted');
      refetch();
    }
    console.log(res.data);
  };

  return (
    <tbody key={todo._id} className="" ref={dragRef}>
      <tr className="border-b-2 border-stone-200">
        <td className=" font-semibold w-[30%] ">
          <p>{todo.title}</p>
        </td>
        <td className="  w-[35%]">
          <p>{todo.description}</p>
        </td>
        <td className="w-20">
          <p>{todo.priority}</p>
        </td>
        <td className="w-20">
          <p>{todo.deadline}</p>
        </td>
        <td className="w-10 text-center">
          <button onClick={() => setShowModal(true)} className="text-blue-600">
            <MdEditSquare size={25} />
          </button>
        </td>
        <td className="w-10 text-center">
          <button
            onClick={() => handleDelete(todo._id)}
            className="text-red-600"
          >
            <FaTrashAlt size={22} />
          </button>
        </td>
      </tr>
      {showModal ? (
        <Modal
          title={todo.title}
          description={todo.description}
          priority={todo.priority}
          deadline={todo.deadline}
          refetch={refetch}
          id={todo._id}
          setShowModal={setShowModal}
        />
      ) : null}
    </tbody>
  );
};

export default List;
