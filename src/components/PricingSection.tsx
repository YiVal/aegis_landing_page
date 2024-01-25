import React from "react";

const PriceingSection = () => {
  // Dummy data (you might want to fetch or calculate this)
  const data = [
    ["Item", "Price", "Quantity", "Total"],
    ["Apple", 0.99, 3, 2.97],
    ["Banana", 0.5, 4, 2.0],
    ["Orange", 0.75, 2, 1.5],
    // Add more data...
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="overflow-x-auto">
        <div className="align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                {data.slice(0, 1).map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, idx) => (
                      <th
                        key={idx}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {cell}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.slice(1).map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, idx) => (
                      <td
                        key={idx}
                        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceingSection;
