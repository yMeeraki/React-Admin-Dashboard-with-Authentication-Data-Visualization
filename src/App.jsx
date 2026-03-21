import SideBar from "./components/SideBar/SideBar.jsx";
import StatsCard from "./components/StatsCard/StatsCard.jsx";
import TopBar from "./components/TopBar/TopBar.jsx";
import stats_datas from "../stats_data.js";
import BarChartSection from "./components/Charts/BarChartSection.jsx";
import PieChartSection from "./components/Charts/PieChartSection.jsx";

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
      <section className="flex-2 flex flex-col bg-background">
        <TopBar />
        <main className="p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allStats}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-5 ">
            <BarChartSection />
            <PieChartSection />
          </div>
        </main>
      </section>
    </>
  );
}

export default App;
