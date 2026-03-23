import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, TrendingDown, Clock, CheckCircle, Zap } from "lucide-react";
import usePageTitle from "../hooks/usePageTitle";
import ctaBg from "../assets/industrybg.png";
import Contact from "../components/Contact";

const TaxCalculator = () => {
  usePageTitle("HRPay Companion | Tax Calculator");

  const [monthlySalary, setMonthlySalary] = useState("");
  const [rawSalary, setRawSalary] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const formatNumberWithCommas = (value) => {
    if (!value) return "";
    const num = parseFloat(value);
    if (isNaN(num)) return value;
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  };

  // Debounce function to wait for user to stop typing
  useEffect(() => {
    if (rawSalary && parseFloat(rawSalary) > 0) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        calculateTax();
      }, 500);

      return () => {
        clearTimeout(timer);
        setIsTyping(false);
      };
    } else if (rawSalary === "" || parseFloat(rawSalary) <= 0) {
      setResult(null);
      setError(null);
    }
  }, [rawSalary]);

  const calculateTax = async () => {
    if (!rawSalary || parseFloat(rawSalary) <= 0) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const salaryNumber = parseFloat(rawSalary);

      const response = await fetch(
        `/tax-api/landing_page/tax-calculator/${salaryNumber}`,
      );

      if (!response.ok) {
        throw new Error(`Failed to calculate tax: ${response.status}`);
      }

      const data = await response.json();

      if (data.msg === "success" && data.data && data.data.length > 0) {
        setResult(data.data[0]);
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      console.error("Tax API Error:", err);
      setError(err.message || "Something went wrong. Please try again.");
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    let value = e.target.value;
    value = value.replace(/,/g, "");
    value = value.replace(/[^\d.]/g, "");

    const parts = value.split(".");
    if (parts.length > 2) {
      value = parts[0] + "." + parts.slice(1).join("");
    }

    setRawSalary(value);

    if (value) {
      setMonthlySalary(formatNumberWithCommas(value));
    } else {
      setMonthlySalary("");
    }

    if (value === "" || parseFloat(value) <= 0) {
      setResult(null);
      setError(null);
    }
  };

  const displayResult = result || {
    monthly_salary: "0.00",
    sss: "0.00",
    philhealth: "0.00",
    pagibig: "0.00",
    tax: "0.00",
    net_salary: "0.00",
  };

  const benefits = [
    {
      icon: Clock,
      title: "Real-Time Calculations",
      description:
        "See your net pay update instantly as you type. No refresh or submit button needed.",
    },
    {
      icon: CheckCircle,
      title: "Accurate & Reliable",
      description:
        "Powered by up-to-date tax tables and government contribution rates.",
    },
    {
      icon: Zap,
      title: "Easy to Use",
      description:
        "Simple interface designed for anyone to use, no accounting knowledge needed.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-0">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#a41313]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#780000]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#f5e6d3] rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Tax Calculator Section */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl"
            style={{
              backgroundImage: `url(${ctaBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-white/20" />

            <div className="absolute -top-20 -right-20 w-36 sm:w-48 md:w-64 h-36 sm:h-48 md:h-64 bg-[#d62828]/10 rounded-full blur-2xl sm:blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-36 sm:w-48 md:w-64 h-36 sm:h-48 md:h-64 bg-[#a41313]/10 rounded-full blur-2xl sm:blur-3xl" />

            <div className="relative z-10 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
              {/* Header */}
              <div className="text-center mb-6 sm:mb-8 md:mb-10">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#2b2d42]">
                    Tax <span className="text-[#d62828]">Calculator</span>
                  </h1>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-[#4a4e69] max-w-2xl mx-auto px-4">
                  Stop wasting time on complex tax computations. Get instant,
                  accurate results with our easy-to-use tax calculator.
                </p>
              </div>

              {/* Salary Input - Responsive width */}
              <div className="max-w-[200px] sm:max-w-xs mx-auto mb-8 sm:mb-10">
                <label
                  htmlFor="monthlySalary"
                  className="block text-sm font-medium text-[#2b2d42] mb-2 text-center"
                >
                  Monthly Salary (PHP)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4a4e69]">
                    ₱
                  </span>
                  <input
                    type="text"
                    id="monthlySalary"
                    value={monthlySalary}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-2.5 sm:py-3 rounded-lg border-2 border-[#780000] focus:border-[#d62828] focus:outline-none focus:ring-1 focus:ring-[#d62828] transition-colors bg-white text-[#2b2d42] placeholder-[#4a4e69]/60 text-base text-center"
                  />
                </div>

                {/* Loading Indicator */}
                {isTyping && isLoading && (
                  <div className="flex items-center justify-center gap-2 text-[#4a4e69] text-xs sm:text-sm mt-3">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-[#d62828] border-t-transparent rounded-full animate-spin" />
                    Calculating...
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="mt-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center text-sm">
                    {error}
                  </div>
                )}
              </div>

              {/* Results - Responsive 2 Columns */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
              >
                {/* Left Column - Government Contributions */}
                <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 border-2 border-[#780000] shadow-md">
                  <h3 className="text-base sm:text-lg font-semibold text-[#2b2d42] mb-3 sm:mb-4 flex items-center gap-2">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#d62828]" />
                    Government Contributions
                  </h3>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-[#780000]/30 text-sm sm:text-base">
                      <span className="text-[#4a4e69]">SSS Contribution</span>
                      <span className="font-medium text-[#2b2d42]">
                        {formatCurrency(displayResult.sss)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center pb-2 border-b border-[#780000]/30 text-sm sm:text-base">
                      <span className="text-[#4a4e69]">
                        PhilHealth Contribution
                      </span>
                      <span className="font-medium text-[#2b2d42]">
                        {formatCurrency(displayResult.philhealth)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center pb-2 border-b border-[#780000]/30 text-sm sm:text-base">
                      <span className="text-[#4a4e69]">
                        Pag-IBIG Contribution
                      </span>
                      <span className="font-medium text-[#2b2d42]">
                        {formatCurrency(displayResult.pagibig)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center pt-2 text-sm sm:text-base">
                      <span className="font-semibold text-[#2b2d42]">
                        Total Deductions
                      </span>
                      <span className="font-bold text-[#d62828]">
                        {formatCurrency(
                          parseFloat(displayResult.sss) +
                            parseFloat(displayResult.philhealth) +
                            parseFloat(displayResult.pagibig),
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Income Tax & Net Pay */}
                <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 border-2 border-[#780000] shadow-md">
                  <h3 className="text-base sm:text-lg font-semibold text-[#2b2d42] mb-3 sm:mb-4 flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#d62828]" />
                    Tax & Net Pay
                  </h3>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-[#780000]/30 text-sm sm:text-base">
                      <span className="text-[#4a4e69]">Withholding Tax</span>
                      <span className="font-medium text-[#2b2d42]">
                        {formatCurrency(displayResult.tax)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <span className="font-semibold text-[#2b2d42] text-sm sm:text-base">
                        Net Salary
                      </span>
                      <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#d62828]">
                        {formatCurrency(displayResult.net_salary)}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Benefits Section - Responsive 3 columns to 2 to 1 */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#2b2d42] mb-3 sm:mb-4">
              Why Use Our <span className="text-[#d62828]">Tax Calculator</span>
              ?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#4a4e69] max-w-2xl mx-auto px-4">
              Fast, accurate, and hassle-free tax computations at your
              fingertips
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 sm:p-5 md:p-6 border-2 border-[#780000] shadow-md text-center hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#d62828]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-[#d62828]/20 transition-all duration-300">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#d62828]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#2b2d42] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4a4e69]">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Contact Section */}
        <Contact />
      </div>
    </div>
  );
};

export default TaxCalculator;
