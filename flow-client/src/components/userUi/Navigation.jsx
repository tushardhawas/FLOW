import { cn } from "@/lib/utils";
import { SettingsIcon, UserIcon } from "lucide-react";
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,
} from "react-icons/go"; // Correct import for icons

const route = [
  {
    label: "Home",
    href: "/",
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: "My Tasks",
    href: "/tasks",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },

  {
    label: "Setting",
    href: "/setting",
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
  {
    label: "Members",
    href: "/members",
    icon: UserIcon,
    activeIcon: UserIcon,
  },
];

const Navigation = () => {
  const currentPath = window.location.pathname; // Get the current path (you can use React Router's `useLocation` for more control)

  return (
    <ul className="flex flex-col">
      {route.map((item) => {
        const isActive = currentPath === item.href; // Dynamically check if the route is active
        const Icon = isActive ? item.activeIcon : item.icon;

        return (
          <li key={item.href}>
            <a href={item.href} className={isActive ? "active" : ""}>
              <div
                
                className={cn(
                  "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500 ",
                  isActive &&
                    "bg-white shadow-sm hover:opacity-100 text-primary "
                )}
              >
                <Icon />
                {item.label}
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
