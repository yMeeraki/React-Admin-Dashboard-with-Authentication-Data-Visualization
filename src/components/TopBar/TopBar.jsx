import { Moon, Sun, Search } from "lucide-react";
import avatar from "../../assets/avatar.jpg";
import React from "react";

function TopBar() {
  const [mode, setMode] = React.useState(true);

  function changeMode() {
    setMode((prev) => !prev);
  }

  return (
    <>
      <header className="bg-section flex justify-between h-24 px-6 items-center shadow-xl/20">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-lg text-primary">Welcome, John!</h1>
          <p className="text-font-secondary text-sm">
            Here's an overview of your projects.
          </p>
        </div>
        <div className="flex gap-6 items-center">
          <form className="flex items-center bg-gray-200 px-2 py-1 rounded-lg">
            <div className="flex items-center px-3 py-2">
              <label htmlFor="search-input">
                <Search className="text-primary w-5 h-5 hover:cursor-pointer" />
              </label>
              <input
                type="text"
                name="search-input"
                id="search-input"
                placeholder="Search"
                className="py-1 px-2 rounded-lg focus:border-primary hover:ring-2 hover:ring-primary/30"
              />
            </div>
            <button className="bg-primary text-white p-2 rounded-lg transition-all duration-200 hover:bg-accent hover:text-font-primary hover:cursor-pointer">
              Search
            </button>
          </form>

          <div className="flex items-center gap-2">
            <button onClick={changeMode}>
              {mode ? (
                <Moon className="text-primary bg-blue-200 rounded-full size-10 p-1 hover:cursor-pointer hover:scale-105 transition" />
              ) : (
                <Sun className="text-primary bg-yellow-200 rounded-full size-10 p-1 hover:cursor-pointer hover:scale-105 transition" />
              )}
            </button>
            <img
              className="rounded-full size-10 border-2 border-primary hover:cursor-pointer hover:scale-105 transition"
              src={avatar}
              alt="avatar"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default TopBar;
