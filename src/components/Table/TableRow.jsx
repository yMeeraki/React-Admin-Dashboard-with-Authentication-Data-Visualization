import { NotebookPen, Trash2 } from "lucide-react";

function TableRow({ title, status, dueDate, color, bg }) {
  return (
    <>
      <tr className="text-center">
        <td className="py-2">{title}</td>
        <td>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium
                  ${
                    status === "Completed"
                      ? "bg-success/10 text-success"
                      : status === "In Progress"
                        ? "bg-primary/10 text-primary"
                        : "bg-warning/10 text-warning"
                  }`}
          >
            {status}
          </span>
        </td>
        <td>{dueDate}</td>
        <td>
          <td className="flex gap-3 justify-center">
            <button className="text-primary hover:scale-105  text-sm cursor-pointer">
              <NotebookPen />
            </button>
            <button className="text-danger hover:scale-105  text-sm cursor-pointer">
              <Trash2 />
            </button>
          </td>
        </td>
      </tr>
    </>
  );
}

export default TableRow;
