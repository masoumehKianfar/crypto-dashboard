"use client";
import NavLinksComponent from "../../atoms/nav-links";
import ThemeToggle from "@/src/helper/toggle-theme";
import { usePathname } from "next/navigation";
import { headerRoots } from "./data";

const HeaderComponent = () => {
  const pathname = usePathname();

  return (
    <div className="w-full sticky top-0 z-50 flex justify-between items-center h-[80px] lg:px-24 px-4 backdrop-blur-xl shadow-md dark:shadow-white/10">
      <div className="lg:flex items-center justify-start  w-1/3 hidden">
        {headerRoots.map((item) => (
          <NavLinksComponent
            href={item.href}
            key={item.href}
            active={pathname === item.href}
          >
            {item.title}
          </NavLinksComponent>
        ))}
      </div>

      <div className="flex lg:hidden items-center justify-start w-1/3">
        menu
      </div>

      <div className="flex items-center justify-center w-1/3">
        <div className="w-8 h-8 flex items-center justify-center bg-light-primary-light rounded-full mr-1">
          A
        </div>

        <div>Aurora markets</div>
      </div>

      <div className="flex justify-end w-1/3">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default HeaderComponent;
