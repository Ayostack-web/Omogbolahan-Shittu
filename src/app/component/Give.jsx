"use client";

export default function PartnerCTA({ onOpenPledge }) {
  return (
    <section className="bg-gray-300 py-10 text-center">
      <button
        onClick={onOpenPledge}
        className="inline-block px-8 py-4 text-lg font-semibold text-white 
                   bg-gradient-to-r from-blue-500 to-teal-400 rounded-full 
                   shadow-lg hover:scale-105 transition-transform"
      >
        Partner
      </button>
    </section>
  );
}
