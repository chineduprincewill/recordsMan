import { HiOutlineReceiptTax, HiOutlineCog, HiOutlineOfficeBuilding, HiOutlineTemplate, HiOutlineUser, HiOutlineUserGroup, HiOutlineBriefcase } from "react-icons/hi";
import { AiOutlineWindows } from 'react-icons/ai'

export const system_admin = [
  {
    id: 0,
    title: "Dashboard",
    icon: <HiOutlineTemplate className="nav-icon" />,
    url: '/dashboard',
  },
  {
    id: 1,
    title: "Revenue windows",
    icon: <AiOutlineWindows className="nav-icon" />,
    url: '/revenue-windows',
  },
  {
    id: 2,
    title: "MDAs",
    icon: <HiOutlineOfficeBuilding className="nav-icon" />,
    url: '/mdas',
  },
  {
    id: 3,
    title: "Utilities",
    icon: <HiOutlineCog className="nav-icon" />,
    url: '/utilities',
  },
  {
    id: 4,
    title: "Taxes",
    icon: <HiOutlineReceiptTax className="nav-icon" />,
    url: '/taxes',
  },
  {
    id: 5,
    title: "Taxpayers",
    icon: <HiOutlineUser className="nav-icon" />,
    url: '/taxpayers',
  },
  {
    id: 6,
    title: "Users",
    icon: <HiOutlineUserGroup className="nav-icon" />,
    url: '/users',
  },
];


export const system_auditor = [
  {
    id: 0,
    title: "Dashboard",
    icon: <HiOutlineTemplate className="nav-icon" />,
    url: "/dashboard"
  },
  {
    id: 1,
    title: "Revenue windows",
    icon: <AiOutlineWindows className="nav-icon" />,
    url: '/revenue-windows',
  },
  {
    id: 2,
    title: "MDAs",
    icon: <HiOutlineOfficeBuilding className="nav-icon" />,
    url: '/MDAs',
  },
  {
    id: 3,
    title: "Utilities",
    icon: <HiOutlineCog className="nav-icon" />,
    url: '/utilities',
  },
  {
    id: 4,
    title: "Taxes",
    icon: <HiOutlineReceiptTax className="nav-icon" />,
    url: '/taxes',
  },
  {
    id: 5,
    title: "Taxpayers",
    icon: <HiOutlineUser className="nav-icon" />,
    url: '/taxpayers',
  },
  {
    id: 6,
    title: "Assets",
    icon: <HiOutlineBriefcase className="nav-icon" />,
    url: '/assets',
  },
  {
    id: 7,
    title: "Users",
    icon: <HiOutlineUserGroup className="nav-icon" />,
    url: '/users',
  },
];