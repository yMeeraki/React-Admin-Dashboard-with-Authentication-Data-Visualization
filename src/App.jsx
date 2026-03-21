import SideBar from "./components/SideBar/SideBar.jsx";
import StatsCard from "./components/StatsCard/StatsCard.jsx";
import TopBar from "./components/TopBar/TopBar.jsx";
import stats_datas from "../stats_data.js";

function App() {
  const allStats = stats_datas.map((stat) => {
    return (
      <StatsCard
        key={stat.id}
        title={stat.title}
        value={stat.value}
        icon={stat.icon}
        color={stat.color}
        bg={stat.bg}
      />
    );
  });

  return (
    <>
      <SideBar />
      <div className="flex-2 flex flex-col bg-background">
        <TopBar />
        <section>
        <div className="grid grid-cols-1 p-5 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allStats}
        </div>
        </section>
      </div>
    </>
  );
}

export default App;
