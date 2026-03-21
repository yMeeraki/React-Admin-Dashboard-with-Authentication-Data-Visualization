import {
  ChartLine,
  ClipboardList,
  LogOut,
  Presentation,
  Settings,
  User,
} from "lucide-react";
import avatar from "../../assets/avatar.jpg";

function SideBar() {
  return (
    <>
      <nav className="flex flex-col justify-between items-center w-64 h-screen p-8 bg-sidebar text-white">
        <div className="flex flex-col gap-10">
          <div className="flex flex-row gap-2">
            <img
              className="rounded-full size-12 hover:cursor-pointer"
              src={avatar}
              alt="avatar"
            />
            <div>
              <h3 className="text-accent font-semibold hover:cursor-pointer">
                John Doe
              </h3>
              <p className="text-sm hover:cursor-pointer">Frontend Developer</p>
            </div>
          </div>
          <div>
            <ul className="flex flex-col gap-5">
              <li className="p-2 rounded-lg flex gap-8 items-center text-sm hover:bg-accent/20 hover:text-accent hover:cursor-pointer ">
                <Presentation className="ml-3" />
                Dashboard
              </li>
              <li className="p-2 rounded-lg flex gap-8 items-center text-sm hover:bg-accent/20 hover:text-accent hover:cursor-pointer">
                <ClipboardList className="ml-3" />
                Tasks
              </li>
              <li className="p-2 rounded-lg flex gap-8 items-center text-sm hover:bg-accent/20 hover:text-accent hover:cursor-pointer">
                <ChartLine className="ml-3" />
                Analytics
              </li>
              <li className="p-2 rounded-lg flex gap-8 items-center text-sm hover:bg-accent/20 hover:text-accent hover:cursor-pointer">
                <User className="ml-3" />
                Profile
              </li>
              <li className="p-2 rounded-lg flex gap-8 items-center text-sm hover:bg-accent/20 hover:text-accent hover:cursor-pointer">
                <Settings className="ml-3" />
                Settings
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row p-3 gap-2 border border-accent rounded-lg hover:bg-accent hover:text-font-primary hover:cursor-pointer">
          <LogOut />
          logout
        </div>
      </nav>
    </>
  );
}

export default SideBar;
