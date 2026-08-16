import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function RevenueChart({ data = [] }) {
  const chartData = data.map((item) => ({
    month: `${item._id.month}/${item._id.year}`,
    revenue: item.revenue,
    orders: item.orders,
  }));

  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-gray-200/80
        bg-white
        shadow-[0_1px_2px_rgba(0,0,0,0.03)]
      "
    >
      {/* Header */}
      <div className="border-b border-gray-100 p-5 sm:p-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              Analytics
            </p>

            <h2 className="mt-2 text-xl font-bold tracking-[-0.025em] text-gray-950">
              Revenue Overview
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Monthly revenue and order performance.
            </p>
          </div>
        </div>
      </div>

      {chartData.length === 0 ? (
        <div className="flex h-80 items-center justify-center text-sm text-gray-400">
          No revenue data available.
        </div>
      ) : (
        <div className="h-80 w-full px-2 pb-5 pt-6 sm:px-5">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 10,
                right: 15,
                left: 5,
                bottom: 5,
              }}
            >
              <CartesianGrid
                stroke="#eeeeee"
                strokeDasharray="4 4"
                vertical={false}
              />

              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 11,
                  fill: "#9ca3af",
                }}
                dy={8}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 11,
                  fill: "#9ca3af",
                }}
                tickFormatter={(value) => `₹${Number(value).toLocaleString()}`}
                width={65}
              />

              <Tooltip
                cursor={{
                  stroke: "#e5e7eb",
                  strokeDasharray: "4 4",
                }}
                contentStyle={{
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  padding: "10px 12px",
                }}
                labelStyle={{
                  color: "#111827",
                  fontSize: "12px",
                  fontWeight: 600,
                  marginBottom: "4px",
                }}
                formatter={(value, name) => [
                  name === "revenue"
                    ? `₹${Number(value).toLocaleString()}`
                    : value,
                  name === "revenue" ? "Revenue" : "Orders",
                ]}
              />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#111827"
                strokeWidth={2.5}
                dot={{
                  r: 3.5,
                  fill: "#111827",
                  strokeWidth: 0,
                }}
                activeDot={{
                  r: 6,
                  fill: "#111827",
                  stroke: "#ffffff",
                  strokeWidth: 3,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default RevenueChart;
