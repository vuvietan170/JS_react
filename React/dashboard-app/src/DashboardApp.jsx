import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { FilterProvider } from "./context/FilterContext.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { FilterBar } from "./components/FilterBar.jsx";
import { StatsView } from "./components/StatsView.jsx";

const queryClient = new QueryClient();  

export default function DashboardApp() {
    return (
        <QueryClientProvider client={queryClient}>
            <FilterProvider>
                <h2>Dashboard (Local state + Context + React Query)</h2>
                <Sidebar />
                <FilterBar />
                <StatsView />
            </FilterProvider>
        </QueryClientProvider>
    );
}
