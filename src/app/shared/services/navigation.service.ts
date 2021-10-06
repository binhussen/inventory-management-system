import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface IMenuItem {
  type: string; // Possible values: link/link/separator/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
  role?: string[];
}
interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string;
  sub?: IChildItem[];
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

@Injectable()
export class NavigationService {
  constructor() {}
  iconMenu: IMenuItem[] = [
    {
      name: "Home",
      type: "link",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "dashboard/analytics",
    },
    {
      name: "New Request",
      type: "link",
      tooltip: "Forms",
      icon: "description",
      state: "view/purchases/create",
      role: ["Department_Head"],
    },
    {
      name: "Requested",
      type: "link",
      tooltip: "Forms",
      icon: "description",
      state: "view/purchases",
      role: ["Department_Head", "Procurer", "Financier"],
    },
    {
      name: "Finance",
      type: "link",
      tooltip: "Forms",
      icon: "description",
      state: "forms",
      role: ["Financier"],
    },
    {
      name: "Financed",
      type: "link",
      tooltip: "Forms",
      icon: "description",
      state: "forms",
      role: ["Financier", "Procurer"],
    },
    {
      name: "Purchase",
      type: "link",
      tooltip: "Forms",
      icon: "description",
      state: "forms",
      role: ["Purchaser"],
    },
    {
      name: "Purchased",
      type: "link",
      tooltip: "Tables",
      icon: "format_line_spacing",
      state: "tables/mat-table",
      role: ["Purchaser", "Procurer"],
    },
    {
      name: "Store",
      type: "link",
      tooltip: "Tables",
      icon: "format_line_spacing",
      state: "view/stores/create",
      role: ["Store_Man"],
    },
    {
      name: "Stored",
      type: "link",
      tooltip: "Forms",
      icon: "description",
      state: "view/storeitems",
      role: ["Store_Man", "Procurer", "Department_Head"],
    },
    {
      name: "Delivered",
      type: "link",
      tooltip: "Tables",
      icon: "format_line_spacing",
      state: "view/storeitems",
      role: ["Department_Head", "Procurer", "Store_Man"],
    },
    {
      name: "Approve",
      type: "link",
      tooltip: "Tables",
      icon: "format_line_spacing",
      state: "tables/mat-table",
      role: ["Procurer"],
    },
    {
      name: "Approved",
      type: "link",
      tooltip: "Tables",
      icon: "format_line_spacing",
      state: "tables/mat-table",
      role: ["Procurer", "Purchaser", "Department_Head"],
    },
    {
      name: "Company",
      type: "link",
      tooltip: "Tables",
      icon: "format_line_spacing",
      state: "view/companies",
      role: ["Purchaser", ""],
    },
    {
      name: "Employee",
      type: "link",
      tooltip: "Tables",
      icon: "format_line_spacing",
      state: "view/employees",
      role: ["Admin"],
    },
    {
      name: "User",
      type: "link",
      tooltip: "Tables",
      icon: "format_line_spacing",
      state: "view/users",
      role: ["Admin"],
    },
  ];

  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle: string = "Frequently Accessed";
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  // Customizer component uses this method to change menu.
  // You can remove this method and customizer component.
  // Or you can customize this method to supply different menu for
  // different user type.
  publishNavigationChange(menuType: string) {
    this.menuItems.next(this.iconMenu);
  }
}
