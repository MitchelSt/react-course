import { QueryClient, QueryClientProvider } from "react-query";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    </>
  );
}
