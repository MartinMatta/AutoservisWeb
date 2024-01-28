import React from "react";

const PriceSection = () => {
  return (
    <div className="w-full h-fill container mx-auto px-4 md:px-16 mt-[70px] items-center py-[60px]">
      <table className="w-full mx-auto">
        <thead>
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
              <p className="text-xl mb-4 text-[#576971]">Title</p>
            </th>
            <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">
              <p className="text-xl mb-4 text-[#576971]">price</p>
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr>
            <td class="px-6 py-2 whitespace-nowrap text-left">
              <p className="mb-4 text-[#576971]">Aa</p>
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-right">
              <p className="mb-4 text-[#576971]">11</p>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-2 whitespace-nowrap text-left">
              <p className="mb-4 text-[#576971]">Bb</p>
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-right">
              <p className="mb-4 text-[#576971]">22</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PriceSection;
