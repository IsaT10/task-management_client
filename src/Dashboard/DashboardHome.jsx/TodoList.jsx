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
    <>
      <div className=" md:mx-auto py-6  md:py-10 ">
        <h2 className="text-center my-5 text-2xl font-semibold " ref={drop}>
          {title}
        </h2>

        {!data?.length ? (
          <>
            {!status?.length ? (
              <h4 className="text-center text-red-500 text-xl sm:text-2xl md:text-3xl font-semibold h-[55vh] flex flex-col items-center justify-center">
                No tasks have been added yet
              </h4>
            ) : (
              <h4 className="text-center text-red-500 text-xl sm:text-2xl md:text-3xl font-semibold">
                There are currently no {status} items
              </h4>
            )}
          </>
        ) : (
          <div className="overflow-x-auto rounded-t-md">
            <table className="table rounded-t-md">
              {/* head */}
              <thead className="bg-stone-900 text-stone-100">
                <tr className="">
                  <th className="font-medium lg:text-base">Title</th>
                  <th className="font-medium lg:text-base md:block hidden">
                    Description
                  </th>
                  <th className="font-medium lg:text-base">Priority</th>
                  <th className="font-medium lg:text-base">Deadline</th>
                  <th className="font-medium text-center lg:text-base">
                    Action
                  </th>
                  <th className="font-medium text-center lg:text-base">
                    Action
                  </th>
                </tr>
              </thead>
              {data.map((todo) => (
                <List key={todo._id} todo={todo} refetch={refetch} />
              ))}
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default TodoList;
