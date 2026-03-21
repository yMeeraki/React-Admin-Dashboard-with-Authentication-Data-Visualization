import {
  Briefcase,
  CircleDashed,
  LoaderCircle,
  SquareCheckBig,
} from "lucide-react";

export default [
  {
    id: 1,
    icon: Briefcase,
    title: "Total Tasks",
    value: 120,
    color: "text-info",
    bg: "bg-info/10",
  },
  {
    id: 2,
    icon: SquareCheckBig,
    title: "Completed",
    value: 85,
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    id: 3,
    icon: LoaderCircle,
    title: "In Progress",
    value: 25,
    color: "text-warning",
    bg: "bg-warning/10",
  },
  {
    id: 4,
    icon: CircleDashed,
    title: "Pending",
    value: 10,
    color: "text-danger",
    bg: "bg-danger/10",
  },
];
