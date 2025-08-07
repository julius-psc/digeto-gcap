import React from 'react';

const Fees: React.FC = () => {
  const primaryBlue = "var(--color-primary-blue)";
  const secondaryBlue = "var(--color-secondary-blue)";

  return (
    <div id="fees" className="relative overflow-hidden py-14 md:py-20">
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5D9C89]/5 to-[#B4D8CC]/20"></div>
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-opacity-20 blur-3xl" style={{ backgroundColor: secondaryBlue }}></div>
        <div className="absolute left-1/4 top-1/3 h-48 w-48 rounded-full bg-opacity-5 blur-2xl" style={{ backgroundColor: primaryBlue }}></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm">
          <h3 className="mb-6 text-center text-3xl font-bold tracking-tight text-gray-900">Financial Details</h3>
          
          <div className="mb-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg text-gray-700">Membership Fee</span>
              <span className="text-2xl font-bold" style={{ color: primaryBlue }}>$500 USD</span>
            </div>
            
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-gray-600">
                <span className="font-medium">Note:</span> One month of project assignment is fully paid and offsets part of the fee.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <a target="_blank" href="https://www.jotform.com/form/250922808027052#preview">
              <button className="group relative overflow-hidden rounded-lg px-8 py-4 text-base font-medium text-white transition-all duration-300" style={{ backgroundColor: primaryBlue }}>
                <span className="relative z-10">Reserve Your Spot</span>
                <span className="absolute inset-0 -translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" style={{ backgroundColor: "#2888A3" }}></span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fees;