import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import chartsection_data from "../../../chartsection_data";

function BarChartSection() {
  return (
    <>
      <div className="bg-card p-6 rounded-xl shadow-sm flex flex-col items-center gap-4 hover:cursor-pointer">
        <h2 className="text-sm text-font-secondary mb-4">Task Overview</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartsection_data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Bar dataKey="completed" fill="#2b8a3e" />
            <Bar dataKey="inProgress" fill="#e67700" />
            <Bar dataKey="pending" fill="#c92a2a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default BarChartSection;
