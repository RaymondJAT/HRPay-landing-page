import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import question from "../assets/connect.png";
import Buttons from "../components/Buttons";

const Connect = () => {
  return (
    <section className="py-18">
      <div className="container flex flex-col md:flex-row items-center gap-y-10 md:gap-x-16">
        {/* LEFT SIDE – TEXT */}
        <div className="md:w-1/2 text-center md:text-left">
          <BlockInText />

          {/* CTA stays aligned with other sections */}
          <div className="mt-6">
            <Buttons label="Connect with us" />
          </div>
        </div>

        {/* RIGHT SIDE – IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={question}
            alt="Connect with HRPay team"
            className="w-[350px] max-w-md rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Connect;

// text block
const BlockInText = () => {
  const examples = [
    "Is HRPay suitable for small teams?",
    "Can I migrate existing payroll data?",
    "How secure is employee information?",
    "Do you support PH payroll compliance?",
  ];

  return (
    <div className="space-y-4">
      <p className="text-sm font-light uppercase text-gray-500">/ Connect</p>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Have Questions? Let’s Connect.
      </h2>

      <p className="text-lg text-gray-700">
        <strong>Our team is here to help.</strong> Get answers about HRPay,
        onboarding, or payroll compliance.
      </p>

      <Typewrite examples={examples} />
    </div>
  );
};

// typewriter animation
const LETTER_DELAY = 0.03;
const SWAP_DELAY = 4500;

const Typewrite = ({ examples }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % examples.length);
    }, SWAP_DELAY);

    return () => clearInterval(id);
  }, [examples.length]);

  return (
    <p className="text-sm uppercase text-gray-600">
      <span className="inline-block size-2 bg-gray-900 mr-2" />
      Example:&nbsp;
      {examples[index].split("").map((char, i) => (
        <motion.span
          key={`${index}-${i}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * LETTER_DELAY }}
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
};
