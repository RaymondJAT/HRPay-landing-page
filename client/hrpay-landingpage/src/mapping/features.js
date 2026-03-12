import {
  Users,
  Clock,
  CalendarCheck,
  Wallet,
  FileText,
  Smartphone,
  Receipt,
  Star,
  GraduationCap,
  FileSpreadsheet,
  Link,
  HeadphonesIcon,
} from "lucide-react";

export const mainFeatures = [
  {
    name: "Core HR",
    description: "Employee records, history & org structure",
    icon: Users,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Time & Attendance",
    description: "Biometrics, scheduling & overtime",
    icon: Clock,
    color: "from-green-500 to-green-600",
  },
  {
    name: "Leave Management",
    description: "Types, approvals & balance tracking",
    icon: CalendarCheck,
    color: "from-yellow-500 to-yellow-600",
  },
  {
    name: "Payroll",
    description: "Auto-computation & government contributions",
    icon: Wallet,
    color: "from-red-500 to-red-600",
  },
  {
    name: "Reports",
    description: "Attendance, leave & compliance reports",
    icon: FileText,
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Mobile App",
    description: "GPS attendance & employee self-service",
    icon: Smartphone,
    color: "from-orange-500 to-orange-600",
  },
];

export const addOns = [
  { name: "Expense Management", icon: Receipt },
  { name: "Performance Reviews", icon: Star },
  { name: "Training", icon: GraduationCap },
  { name: "Documents", icon: FileSpreadsheet },
  { name: "Integrations", icon: Link },
  { name: "Support", icon: HeadphonesIcon },
];
