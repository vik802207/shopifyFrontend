import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  BarChart, Bar, PieChart, Pie, Cell
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

export default function Dashboard() {
  const [kpis, setKpis] = useState({});
  const [daily, setDaily] = useState([]);
  const [storeWise, setStoreWise] = useState([]);
  const [channel, setChannel] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/dashboard/kpis").then(r => setKpis(r.data));
    axios.get("http://localhost:8000/api/dashboard/daily-sales").then(r => setDaily(r.data));
    axios.get("http://localhost:8000/api/dashboard/store-wise").then(r => setStoreWise(r.data));
    axios.get("http://localhost:8000/api/dashboard/channel-wise").then(r => setChannel(r.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>📊 Shopify Dashboard</h2>

      {/* KPI CARDS */}
      <div style={{ display: "flex", gap: 20 }}>
        <div>Orders: {kpis.orders}</div>
        <div>Revenue: ₹{kpis.revenue}</div>
        <div>AOV: ₹{Math.round(kpis.aov || 0)}</div>
      </div>

      {/* DAILY SALES */}
      <h3>Daily Revenue</h3>
      <LineChart width={800} height={300} data={daily}>
        <XAxis dataKey="_id" />
        <YAxis />
        <Tooltip />
        <Line dataKey="revenue" stroke="#8884d8" />
      </LineChart>

      {/* STORE WISE */}
      <h3>Store Wise Revenue</h3>
      <BarChart width={800} height={300} data={storeWise}>
        <XAxis dataKey="_id" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="revenue" fill="#82ca9d" />
      </BarChart>

      {/* CHANNEL PIE */}
      <h3>Channel Distribution</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={channel}
          dataKey="orders"
          nameKey="_id"
          cx="50%"
          cy="50%"
          outerRadius={100}
        >
          {channel.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
