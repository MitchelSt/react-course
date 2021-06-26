import { QueryClient, QueryClientProvider } from "react-query";
import GetUser from "./components/GetUser/GetUser";
import SetUser from "./components/SetUser/SetUser";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GetUser />
        <SetUser />
      </QueryClientProvider>
    </>
  );
}
