import { BiHomeAlt, BiMenu } from "react-icons/bi";
import NavItem from "./NavItem";
import { useEffect, useState } from "react";
const Nav = () => {
  const [isNavItemMobile, setNavItemMobile] = useState(false);
  const navList = [
    { title: "Home", icon: <BiHomeAlt size="1.875rem" />, active: true },
    { title: "Home", icon: <BiHomeAlt size="1.875rem" />, active: false },
    { title: "Home", icon: <BiHomeAlt size="1.875rem" />, active: false },
  ];

  const [modeTheme, setModeTheme] = useState("light");

  useEffect(() => {
    if (
      modeTheme === "dark"
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [modeTheme]);

  const handleSwitchMode = () => {
    setModeTheme((prev: string) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <nav className="col-span-1 bg-cyan-200 relative">
      <div className="flex md:block mx-4 ml-2 justify-between items-center">
        <h4 className="uppercase font-bold text-primary py-4 border-b border-primary text-right">
          Phimmoi.neT
        </h4>
        <div
          className="md:hidden"
          onClick={() => setNavItemMobile((prev: boolean) => !prev)}
        >
          <BiMenu className="md:hidden" size="1.875rem" />
        </div>
      </div>
      <ul
        className={`mx-4 my-2 ml-2 md:block ${isNavItemMobile ? "" : "hidden"}`}
      >
        {navList.map((item, index) => {
          return (
            <NavItem key={index} title={item.title} icon={item.icon} active={item.active} />
          );
        })}
      </ul>

      <div className="absolute bottom-0 left-[50%] translate-x-[-50%] mb-4 hidden md:block">
        <button className="btn" onClick={handleSwitchMode}>{modeTheme}</button>
      </div>
    </nav>
  );
};

export default Nav;
