import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const items = [
  {
    title: "Home",
    url: "#",
  },
  {
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    title: "Calendar",
    url: "#",
  },
  {
    title: "Search",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },
];

export const MenuBar = () => {
  return (
    <nav className="bg-blue-600 mb-1.5  mx-auto w-full fixed">
      <NavigationMenu className="p-2 ">
        <NavigationMenuList className="flex flex-row justify-center items-center gap-4">
          {items.map((item) => (
            <NavigationMenuItem
              key={item.title}
              className="px-4 py-2  text-white rounded transition  duration-300  hover:shadow-lg hover:bg-red-600 "
            >
              <span className=" ">
                <a href={item.url}>{item.title}</a>
              </span>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};
