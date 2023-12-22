import { useDrop } from 'react-dnd';
import List from '../../components/List';
import useAxios from '../../Hooks/useAxios';
import { toast } from 'react-toastify';

const TodoList = ({ data, refetch, title, status }) => {
  const axios = useAxios();
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: 'task',
      drop: (item) => addItemToList(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );

  const addItemToList = async (id) => {
    // console.log('dragId', id, title, status);

    if (status === 'ongoing') {
      const res = await axios.patch(`/todos/${id}`, { taskProgress: status });

      console.log(res.data);
      if (res?.data?.acknowledged) {
        toast.success('Task Updated');
        refetch();
      }
    } else if (status === 'completed') {
      const res = await axios.patch(`/todos/${id}`, {
        taskProgress: status,
      });

      console.log(res.data);
      if (res?.data?.acknowledged) {
        toast.success('Task Updated');
        refetch();
      }
    } else {
      const res = await axios.patch(`/todos/${id}`, {
        taskProgress: status,
      });

      console.log(res.data);
      if (res?.data?.acknowledged) {
        toast.success('Task Updated');
        refetch();
      }
    }
  };
  return (
    <div className="   mx-4 md:mx-auto px-3 py-10 ">
      <h2 className="text-center my-5 text-2xl font-semibold">{title}</h2>
      <div className="overflow-x-auto rounded-t-md">
        <table className="table rounded-t-md" ref={drop}>
          {/* head */}
          <thead className="bg-stone-600 text-stone-100 ">
            <tr className="">
              <th className="font-medium">Title</th>
              <th className="font-medium">Description</th>
              <th className="font-medium">Priority</th>
              <th className="font-medium">Deadline</th>
              <th className="font-medium text-center">Action</th>
              <th className="font-medium text-center">Action</th>
            </tr>
          </thead>
          {data.map((todo) => (
            <List key={todo._id} todo={todo} refetch={refetch} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default TodoList;
