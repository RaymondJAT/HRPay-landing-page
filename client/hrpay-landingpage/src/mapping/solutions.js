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
  Building2,
  Briefcase,
  Truck,
  Store,
  HardHat,
  HeartPulse,
  GraduationCap,
  Globe,
  Target,
  Gauge,
  PiggyBank,
  RefreshCw,
  Rocket,
} from "lucide-react";

export const solutions = [
  // Industry Solutions
  {
    category: "By Industry",
    items: [
      {
        title: "Retail & Hospitality",
        description:
          "Manage high-volume, shift-based teams across multiple locations",
        icon: Store,
        benefits: [
          "Simplified shift scheduling for seasonal staff",
          "Mobile time tracking for remote teams",
          "Compliance with retail labor laws",
        ],
        color: "from-orange-500 to-orange-600",
      },
      {
        title: "Construction & Field Services",
        description:
          "Track time, attendance, and compliance for mobile workforces",
        icon: HardHat,
        benefits: [
          "GPS-enabled mobile time tracking",
          "Project-based labor costing",
          "Safety certification tracking",
        ],
        color: "from-amber-500 to-amber-600",
      },
      {
        title: "Healthcare",
        description: "Manage complex schedules and certifications with ease",
        icon: HeartPulse,
        benefits: [
          "License and certification tracking",
          "Shift swapping and overtime management",
          "Compliance with healthcare regulations",
        ],
        color: "from-red-500 to-red-600",
      },
      {
        title: "Professional Services",
        description: "Track billable hours and streamline people operations",
        icon: Briefcase,
        benefits: [
          "Project-based time tracking",
          "Expense management",
          "Performance reviews and feedback",
        ],
        color: "from-blue-500 to-blue-600",
      },
    ],
  },

  // Business Challenge Solutions
  {
    category: "By Challenge",
    items: [
      {
        title: "Reduce Administrative Work",
        description:
          "Automate repetitive HR tasks so you can focus on strategy",
        icon: Gauge,
        benefits: [
          "Automated payroll runs",
          "One-click compliance reports",
          "Bulk employee updates",
        ],
        color: "from-green-500 to-green-600",
      },
      {
        title: "Control Labor Costs",
        description: "Gain real-time visibility into your biggest expense",
        icon: PiggyBank,
        benefits: [
          "Overtime alerts and controls",
          "Budget vs. actual tracking",
          "Labor cost forecasting",
        ],
        color: "from-emerald-500 to-emerald-600",
      },
      {
        title: "Stay Compliant",
        description: "Never miss a compliance deadline with automated updates",
        icon: Shield,
        benefits: [
          "Automated government remittances",
          "Audit-ready reports",
          "Compliance alerts and reminders",
        ],
        color: "from-purple-500 to-purple-600",
      },
      {
        title: "Improve Employee Engagement",
        description: "Give your team the tools they need to thrive",
        icon: Target,
        benefits: [
          "Self-service mobile access",
          "Transparent leave and attendance",
          "Recognition and feedback tools",
        ],
        color: "from-pink-500 to-pink-600",
      },
    ],
  },

  // Company Size Solutions
  {
    category: "By Company Size",
    items: [
      {
        title: "Startups & Small Business",
        description: "Everything you need to build a solid HR foundation",
        icon: Building2,
        benefits: [
          "Core HR and employee records",
          "Simplified time tracking",
          "Affordable monthly pricing",
        ],
        color: "from-cyan-500 to-cyan-600",
      },
      {
        title: "Mid-Market",
        description: "Scale your HR operations as you grow",
        icon: TrendingUp,
        benefits: [
          "Advanced reporting and analytics",
          "Multi-location support",
          "Custom approval workflows",
        ],
        color: "from-indigo-500 to-indigo-600",
      },
      {
        title: "Enterprise",
        description: "Enterprise-grade security and customization",
        icon: Globe,
        benefits: [
          "SSO and advanced permissions",
          "Dedicated account manager",
          "Custom integrations",
        ],
        color: "from-slate-500 to-slate-600",
      },
    ],
  },

  // Implementation & Support
  {
    category: "Implementation & Support",
    items: [
      {
        title: "Quick Start",
        description: "Get up and running in days, not months",
        icon: Rocket,
        benefits: [
          "Pre-configured templates",
          "Data migration assistance",
          "Team training session",
        ],
        color: "from-teal-500 to-teal-600",
        popular: true,
      },
      {
        title: "Enterprise Launch",
        description: "Full-service implementation for complex needs",
        icon: Settings,
        benefits: [
          "Dedicated implementation manager",
          "Custom configuration",
          "API integration support",
        ],
        color: "from-violet-500 to-violet-600",
      },
      {
        title: "Ongoing Support",
        description: "24/7 support when you need it",
        icon: HeadphonesIcon,
        benefits: [
          "Priority phone and chat support",
          "Quarterly business reviews",
          "Custom training for new features",
        ],
        color: "from-rose-500 to-rose-600",
      },
    ],
  },
];

// Keep customizationOptions as-is - it's good!
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
