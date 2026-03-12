import {
  TrendingUp,
  Clock,
  CalendarRange,
  Receipt,
  HeadphonesIcon,
  Users,
  Wallet,
  CalendarCheck,
  BarChart,
  Smartphone,
  Shield,
  FileText,
  Settings,
  Sparkles,
} from "lucide-react";

export const solutions = [
  {
    title: "Performance Management",
    description: "Drive growth with customizable review cycles",
    icon: TrendingUp,
    customize: [
      "Choose your review frequency",
      "Custom rating scales and forms",
      "Set your own KPIs and goals",
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Time & Attendance",
    description: "Track work hours your way",
    icon: Clock,
    customize: [
      "Biometric or mobile tracking",
      "Flexible overtime rules",
      "Custom rounding policies",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Shift Scheduling",
    description: "Build schedules that fit your operations",
    icon: CalendarRange,
    customize: [
      "Create custom shift patterns",
      "Set rotation rules",
      "Configure swap approvals",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    title: "Expense Management",
    description: "Configure approval workflows that match your policy",
    icon: Receipt,
    customize: [
      "Set expense limits by role",
      "Custom approval chains",
      "Define expense categories",
    ],
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "HR Advisory",
    description: "Get guidance tailored to your business",
    icon: HeadphonesIcon,
    customize: [
      "Industry-specific advice",
      "Custom policy development",
      "Personalized compliance checks",
    ],
    color: "from-cyan-500 to-cyan-600",
  },
  {
    title: "Core HR",
    description: "Organize employee data your way",
    icon: Users,
    customize: [
      "Custom fields and sections",
      "Tailored employee profiles",
      "Flexible org chart views",
    ],
    color: "from-indigo-500 to-indigo-600",
  },
  {
    title: "Payroll",
    description: "Configure payroll to match your compensation structure",
    icon: Wallet,
    customize: [
      "Custom earnings and deductions",
      "Flexible pay periods",
      "Multiple payroll groups",
    ],
    color: "from-red-500 to-red-600",
  },
  {
    title: "Leave Management",
    description: "Set leave policies that work for your team",
    icon: CalendarCheck,
    customize: [
      "Custom leave types",
      "Flexible accrual rules",
      "Configure blackout dates",
    ],
    color: "from-yellow-500 to-yellow-600",
  },
  {
    title: "Reports & Analytics",
    description: "Get the insights you actually need",
    icon: BarChart,
    customize: [
      "Build custom reports",
      "Choose your metrics",
      "Schedule automated exports",
    ],
    color: "from-pink-500 to-pink-600",
  },
  {
    title: "Mobile Access",
    description: "Give employees access to what matters most",
    icon: Smartphone,
    customize: [
      "Choose visible modules",
      "Custom mobile approval flows",
      "Branded employee app",
    ],
    color: "from-teal-500 to-teal-600",
  },
  {
    title: "Compliance",
    description: "Stay compliant with configurable rules",
    icon: Shield,
    customize: [
      "Set jurisdiction-specific rules",
      "Custom compliance checklists",
      "Automated report generation",
    ],
    color: "from-slate-500 to-slate-600",
  },
  {
    title: "Document Management",
    description: "Organize files your way",
    icon: FileText,
    customize: [
      "Custom folder structures",
      "Set retention policies",
      "Configure access permissions",
    ],
    color: "from-amber-500 to-amber-600",
  },
];

export const customizationOptions = [
  {
    title: "Pick What You Need",
    description: "Choose only the modules that matter to your business",
    icon: Settings,
  },
  {
    title: "Configure to Fit",
    description: "Adjust rules, policies, and workflows",
    icon: Sparkles,
  },
  {
    title: "Scale as You Grow",
    description: "Add modules when you're ready",
    icon: TrendingUp,
  },
];
