function StatsCard({ title, value, icon: Icon, color, bg }) {
  return (
    <>
      <div className="bg-card p-6 rounded-xl shadow-sm flex items-center gap-4 hover:cursor-pointer">
        <div className={`p-3 rounded-lg ${bg}`}>
          <Icon className={`w-8 h-8 ${color}`} />
        </div>
        <div>
          <h2 className="text-sm tracking-wide text-primary">
            {title}
          </h2>
          <p className={`text-2xl font-bold ${color}`}>{value}</p>
        </div>
      </div>
    </>
  );
}

export default StatsCard;
