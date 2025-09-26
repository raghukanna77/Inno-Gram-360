import React from 'react';

interface SimpleBarChartProps {
  title: string;
  data: Array<{
    label: string;
    value: number;
    color: string;
  }>;
  maxValue?: number;
}

export const SimpleBarChart: React.FC<SimpleBarChartProps> = ({ 
  title, 
  data, 
  maxValue 
}) => {
  const max = maxValue || Math.max(...data.map(d => d.value));

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-20 text-sm text-gray-600 truncate">
              {item.label}
            </div>
            <div className="flex-1 relative">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="h-4 rounded-full transition-all duration-500"
                  style={{
                    width: `${(item.value / max) * 100}%`,
                    backgroundColor: item.color,
                  }}
                />
              </div>
            </div>
            <div className="w-12 text-right text-sm font-medium text-gray-900">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};