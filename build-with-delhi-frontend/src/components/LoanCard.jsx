import React from 'react';

const LoanCard = ({ loan }) => {
  return (
    <div className="p-4 mb-4 bg-white border text-black border-gray-300 rounded shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">{loan.loanType}</h2>
      </div>
      <div className="mb-2">
        <p><strong>Interest Rate:</strong> {loan.interestRate}%</p>
        <p><strong>Loan Amount:</strong> ${loan.loanAmount}</p>
        <p><strong>Tenure:</strong> {loan.tenure} years</p>
        <p><strong>Processing Fee:</strong> ${loan.processingFee}</p>
      </div>
      <div className="mt-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Apply Now</button>
      </div>
    </div>
  );
};

export default LoanCard;