"use client";

import { useState } from "react";

export default function DonateCTA({ onClose }) {
  const [copied, setCopied] = useState(false);
  const accountNumber = "2308068234";
  const bankName = "UBA";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("copy failed", e);
    }
  };

  return (
    <section
      id="give"
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
    >
      <div className="bg-gray-100 p-8 rounded-2xl shadow-2xl max-w-lg w-full text-center relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-blue-800 mb-6">PARTNERSHIP</h2>
        <p className="text-lg text-blue-900 mb-8">
          Give, and it shall be given unto you; good measure, pressed down, and
          shaken together, and running over, shall men give into your bosom.
          (Luke 6:38)
        </p>

        {/* Account Info */}
        <div className="mb-6 flex justify-center items-center space-x-4">
          <span className="text-lg font-semibold text-blue-800">
            Account: <span className="font-bold">{accountNumber}</span> —{" "}
            {bankName}
          </span>
          <button
            onClick={copyToClipboard}
            className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Pledge Button */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 text-lg font-semibold text-white 
                     bg-gradient-to-r from-blue-500 to-teal-400 rounded-full 
                     shadow-lg hover:scale-105 transition-transform"
        >
          Pledge 👆
        </a>
      </div>
    </section>
  );
}
