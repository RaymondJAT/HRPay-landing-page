const Benefits = () => {
  const benefits = [
    {
      title: "Save Time & Reduce Errors",
      desc: "Automate tasks and minimize mistakes.",
    },
    {
      title: "Ensure Compliance",
      desc: "Keep payroll and HR aligned with labor laws.",
    },
    {
      title: "Boost Productivity",
      desc: "Streamlined operations free your team to focus on growth.",
    },
    {
      title: "Enhance Employee Experience",
      desc: "Engage and motivate your workforce.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        {/* Headline */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Companies Choose <span className="text-red-700">HRPay</span>
          </h2>
          <p className="text-lg text-gray-700">
            HRPay is built to simplify HR and payroll while giving your business
            the tools it needs to thrive.
          </p>
        </div>

        {/* Benefit Blocks in one row */}
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-start text-left p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-700">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
