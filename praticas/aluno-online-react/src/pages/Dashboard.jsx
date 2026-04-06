import Main from "../components/Main.jsx"
import Sidebar from "../components/Sidebar.jsx"

function Dashboard() { 
    return (
        <section className="flex h-screen gap-4">
            <Sidebar />
            <Main />
        </section>
    );
 }

 export default Dashboard;