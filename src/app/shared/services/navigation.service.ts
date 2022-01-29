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
// DepartmentHead;
// Administrator;
// FinanceManager;
// Purchaser;
// StoreMan;
// ProcurementManager;

@Injectable()
export class NavigationService {
  constructor() {}
  iconMenu: IMenuItem[] = [
    {
      name: "Home",
      type: "link",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "dashboard",
    },
    {
      name: "Register",
      type: "link",
      tooltip: "Forms",
      icon: "how_to_reg",
      state: "user/register",
      role: ["Administrator"],
    },
    {
      name: "Users",
      type: "link",
      tooltip: "Forms",
      icon: "manage_accounts",
      state: "users",
      role: ["Administrator"],
    },
    {
      name: "Request",
      type: "link",
      tooltip: "Forms",
      icon: "shopping_cart",
      state: "request/create",
      role: ["DepartmentHead"],
    },
    {
      name: "Requests",
      type: "link",
      tooltip: "Forms",
      icon: "shopping_bag",
      state: "requests",
      role: [
        "DepartmentHead",
        "FinanceManager",
        "Purchaser",
        "ProcurementManager",
        "StoreMan",
      ],
    },
    {
      name: "Store",
      type: "link",
      tooltip: "Forms",
      icon: "add_business",
      state: "store/create",
      role: ["Purchaser"],
    },
    {
      name: "Stores",
      type: "link",
      tooltip: "Forms",
      icon: "store",
      state: "storesitem",
      role: ["DepartmentHead"],
    },
    {
      name: "Stores",
      type: "link",
      tooltip: "Forms",
      icon: "store",
      state: "stores",
      role: ["Purchaser", "ProcurementManager","StoreMan"],
    },
    {
      name: "Employee",
      type: "link",
      tooltip: "Forms",
      icon: "person_add_alt",
      state: "employee/create",
      role: ["Administrator"],
    },
    {
      name: "Employees",
      type: "link",
      tooltip: "Forms",
      icon: "people",
      state: "employees",
      role: ["Administrator"],
    },
    {
      name: "Company",
      type: "link",
      tooltip: "Forms",
      icon: "domain_add",
      state: "company/create",
      role: ["Administrator"],
    },
    {
      name: "Companies",
      type: "link",
      tooltip: "Forms",
      icon: "business",
      state: "companies",
      role: ["Administrator"],
    },
    {
      name: "Report",
      type: "link",
      tooltip: "Forms",
      icon: "domain_add",
      state: "report/create",
      role: ["ReportCreater"],
    },
    {
      name: "Reports",
      type: "link",
      tooltip: "Forms",
      icon: "business",
      state: "reports",
      role: ["ReportCreater","ReportViwer"],
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
