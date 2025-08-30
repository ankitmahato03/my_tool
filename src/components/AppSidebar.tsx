import {
  Calendar,
  File,
  FileUpIcon,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "PDF to JPG",
    url: "/dashboard/pdf-to-jpg",
    icon: Inbox,
  },
  {
    title: "JPG to PDF",
    url: "/dashboard/jpg-to-pdf",
    icon: Calendar,
  },
  {
    title: "Lock Pdf",
    url: "/dashboard/lock-pdf",
    icon: Search,
  },
  {
    title: "Unlock Pdf",
    url: "/dashboard/unlock-pdf",
    icon: Settings,
  },
  {
    title: "Compress Pdf",
    url: "/dashboard/compress-pdf",
    icon: FileUpIcon,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="pt-4 m-2">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex gap-2 text-2xl text-blue-600 font-bold">
            <File />
            Application
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
