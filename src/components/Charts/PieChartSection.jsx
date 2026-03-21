import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

function PieChartSection() {
  const data = [
    { name: "Completed", value: 65 },
    { name: "In Progress", value: 21 },
    { name: "Pending", value: 14 },
  ];

  const renderLabel = ({ percent }) => {
    return `${(percent * 100).toFixed(0)}%`;
  };

  return (
    <>
      <div className="bg-card p-6 rounded-xl shadow-sm flex flex-col items-center gap-4 hover:cursor-pointer">
        <h2 className="text-sm text-font-secondary mb-4">Task Breakdown</h2>
        <ResponsiveContainer height={250} width="100%">
          <PieChart >
            <Pie
              data={data}
              dataKey="value"
              innerRadius={30}
              outerRadius={100}
              label={renderLabel}
              labelLine={false}
            >
              <Cell fill="#2b8a3e" />
              <Cell fill="#e67700" />
              <Cell fill="#c92a2a" />
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default PieChartSection;
