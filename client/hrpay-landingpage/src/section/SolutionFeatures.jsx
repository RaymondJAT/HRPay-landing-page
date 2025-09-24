import {
  FaUsers,
  FaFileInvoiceDollar,
  FaClock,
  FaBriefcase,
  FaBullseye,
  FaHeart,
  FaWallet,
  FaChartBar,
} from "react-icons/fa";

const SolutionFeatures = () => {
  const features = [
    {
      title: "HR Automation & Efficiency",
      desc: "Centralized employee database, onboarding/offboarding, analytics.",
      icon: FaUsers,
    },
    {
      title: "Payroll & Compliance",
      desc: "Automated salary calculations, tax management, and payslips.",
      icon: FaFileInvoiceDollar,
    },
    {
      title: "Time & Attendance Tracking",
      desc: "Track hours, leave, and shifts, integrated with payroll.",
      icon: FaClock,
    },
    {
      title: "Talent Acquisition & Recruitment",
      desc: "Job posting, applicant tracking, resume management.",
      icon: FaBriefcase,
    },
    {
      title: "Performance Management",
      desc: "Goal tracking, appraisals, skill development.",
      icon: FaBullseye,
    },
    {
      title: "Employee Engagement",
      desc: "Feedback collection, reward programs, recognition tools.",
      icon: FaHeart,
    },
    {
      title: "Compensation & Benefits",
      desc: "Salary structures, bonuses, benefits management.",
      icon: FaWallet,
    },
    {
      title: "People Analytics & Insights",
      desc: "Reports on attendance, performance, turnover, engagement.",
      icon: FaChartBar,
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        {/* Headline + Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solve HR Challenges with Powerful Tools
          </h2>
          <p className="text-lg text-gray-700">
            HRPay tackles real HR problems while giving you the features to
            manage your workforce efficiently.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-red-100 text-red-700 rounded-xl">
                  <Icon size={24} />
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionFeatures;
