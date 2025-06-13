'use client';

export default function FundingOpportunities() {
  const opportunities = [
    { name: 'KY Innovation Grant', deadline: '2025-08-15', amount: '$50,000' },
    { name: 'AgTech Fund', deadline: '2025-07-01', amount: '$100,000' },
    { name: 'Rural Tech Initiative', deadline: '2025-09-30', amount: '$75,000' }
  ];

  return (
    <section className="py-16 bg-blue-50 dark:bg-gray-900 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Funding Opportunities</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="p-4 text-left dark:text-white">Program</th>
                <th className="p-4 text-left dark:text-white">Deadline</th>
                <th className="p-4 text-left dark:text-white">Amount</th>
              </tr>
            </thead>
            <tbody className="dark:bg-gray-800">
              {opportunities.map((opp, i) => (
                <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium dark:text-white">{opp.name}</td>
                  <td className="p-4 dark:text-gray-300">{opp.deadline}</td>
                  <td className="p-4 dark:text-gray-300">{opp.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
