import {
  SidebarGroupContent,
  SidebarMenu,
} from "@workspace/ui/components/sidebar";

import { Route } from "./configs";
import { MenuItem } from "./menu-item";

export type MenuSectionProps = {
  routes: Route[];
};

export const MenuSection = (props: MenuSectionProps) => {
  const { routes } = props;

  return (
    <SidebarGroupContent>
      <SidebarMenu>
        {routes.map((route) => (
          <MenuItem key={route.label} route={route} />
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  );
};

export default MenuSection;
