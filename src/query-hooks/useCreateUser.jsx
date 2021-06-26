import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const createUser = (user) =>
  axios
    .post("https://jsonplaceholder.typicode.com/users", user)
    .then((response) => response.data);

export default function useCreateUser(user) {
  const queryClient = useQueryClient();

  return useMutation((user) => createUser(user), {
    onSuccess: (data) => queryClient.setQueryData(["users", 10], data),
  });
}
