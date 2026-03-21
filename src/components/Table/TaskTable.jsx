import tasks_data from "../../../tasks_data";
import TableRow from "./TableRow";

function TaskTable() {
  return (
    <>
      <div className="bg-card p-6 rounded-xl shadow-sm hover:cursor-pointer">
        <h2 className="text-sm text-font-primary mb-4">Recent Tasks</h2>
        <table className="table-auto w-full">
          <thead>
            <tr className="text-font-secondary text-sm border-b bg-primary/10 rounded-lg p-4">
              <th className="py-2">Task</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks_data.map((task) => {
              return (
                <TableRow
                  key={task.id}
                  title={task.title}
                  status={task.status}
                  dueDate={task.dueDate}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TaskTable;
