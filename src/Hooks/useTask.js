import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxios from './useAxios';

const useTask = () => {
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

  return { data, isLoading, refetch };
};

export default useTask;
