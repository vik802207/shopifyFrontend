/* eslint-disable no-undef */
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, TextField, Stack } from "@mui/material";
import "./StoreReportTable.css";

/* ================================
   🔹 STORE MASTER
================================ */
// const STORE = JSON.parse(
//   process.env.REACT_APP_STORE_LIST || "[]"
// );
// console.log("🔥 STORE LIST loaded:", STORE.length);

const STORE_LIST = [
  {
    domain: "xfauc1-x1.myshopify.com",
    storename: "Bangles For Women",
    adAccountId: "985356260251074",
  },
  {
    domain: "eirfu0-jc.myshopify.com",
    storename: "Biba India (Laxmi)",
    adAccountId: "3813309132314642",
    customerId: "3924824158",
  },
  {
    domain: "ff7gju-1m.myshopify.com",
    storename: "House of Bunkari",
    adAccountId: "1439996873932930",
  },
  {
    domain: "1br9tm-se.myshopify.com",
    storename: "Lume Jewels",
    adAccountId: "1229382701732036",
  },
  {
    domain: "1awwc0-qw.myshopify.com",
    storename: "Raag Varnam",
    adAccountId: "512495595200445",
    customerId: "6436230500",
  },
  {
    domain: "xchkbr-xk.myshopify.com",
    storename: "Trendz Jewelry",
    adAccountId: "994084379537653",
    customerId: "8285636442",
  },
  {
    domain: "hpqykh-8s.myshopify.com",
    storename: "Modern Minnies",
    adAccountId: "1491853345014194",
    customerId: "7539569580",
  },
  {
    domain: "31cf7c-b9.myshopify.com",
    storename: "Jaipur Cotton Kurti (Laxmi)",
    adAccountId: "1563769617775044",
    customerId: "6471118093",
  },
  {
    domain: "00qj4d-6r.myshopify.com",
    storename: "Jaipur Kurta (Navya)",
    adAccountId: "2034143927110319",
    customerId: "5533706693",
  },
  {
    domain: "a67d5c-0a.myshopify.com",
    storename: "Libas Kurtas (Laxmi)",
    adAccountId: "414261671330052",
  },
  {
    domain: "a152ff-db.myshopify.com",
    storename: "Jaipuri Trendz (Laxmi)",
    adAccountId: "746316834737537",
    customerId: "9296306607",
  },
  {
    domain: "a68cb8-80.myshopify.com",
    storename: "Vastra Jaipur (Laxmi)",
    adAccountId: "1465021304361078",
  },
  {
    domain: "thebibastore.myshopify.com",
    storename: "Kurta Jaipur (Naresh)",
    adAccountId: "352192974604671",
    customerId: "7961316066",
  },
  {
    domain: "qvf4qv-kb.myshopify.com",
    storename: "House of Bunai (Naresh)",
    adAccountId: "1062669295556400",
  },
  {
    domain: "63fe3d-2.myshopify.com",
    storename: "Global Desi",
    adAccountId: "477738921551148 ",
  },
  {
    domain: "0pdiec-q4.myshopify.com",
    storename: "Biba Kurta (Navya)",
    adAccountId: "",
    customerId: "3924824158",
  },

  {
    domain: "0dds7v-ms.myshopify.com",
    storename: "Libas S",
    adAccountId: "2103097980166685",
  },
  {
    domain: "n2ua2d-mb.myshopify.com",
    storename: "Kalamandir Sarees",
    adAccountId: "1386193529259281",
  },
  {
    domain: "fr7qiu-1m.myshopify.com",
    storename: "House of Bunkari",
    adAccountId: "1439996873932930",
    customerId: "3544670525",
  },
  {
    domain: "wfb2g3-2e.myshopify.com",
    storename: "Libas P",
    adAccountId: "1326084679088292",
  },
  {
    domain: "f71bq4-t1.myshopify.com",
    storename: "Royal Libas",
    customerId: "2724124095",
  },
  { domain: "7mvqxz-ug.myshopify.com", storename: "Nari Kash" },
  {
    domain: "9tnkwm-pk.myshopify.com",
    storename: "BLBA (KJ)",
    adAccountId: "2297590947324716",
    customerId: "3924824158",
  },
  { domain: "r8uz05-7p.myshopify.com", storename: "Kanigiri Saree" },
  {
    domain: "w0bcy7-e7.myshopify.com",
    storename: "W For Women (S)",
    adAccountId: "1099844644989824",
  },
  { domain: "d3wrg8s.myshopify.com", storename: "Fabindya" },
  {
    domain: "navyatasolutions.myshopify.com",
    storename: "Ethnic Sarees",
    adAccountId: "9122990554474258",
  },
  {
    domain: "jaipur-kurta-fashion.myshopify.com",
    storename: "Jaipur Kurta Fashion",
    adAccountId: "1834569097145129",
  },
  {
    domain: "yrye9p-3p.myshopify.com",
    storename: "Libas Kurta Store",
    adAccountId: "1633881027961041",
  },
  {
    domain: "t12rzj-m9.myshopify.com",
    storename: "Bazar Kurti",
    adAccountId: "849395014617779",
  },
  {
    domain: "cu1fn1-14.myshopify.com",
    storename: "Jaipuri Ethnic",
    adAccountId: "1764100764502071",
  },
  {
    domain: "rauhza-6b.myshopify.com",
    storename: "Three Butterfly",
    adAccountId: "838816955134819",
  },
  {
    domain: "spdbg8-c8.myshopify.com",
    storename: "Libas Kurta - Pawan",
    adAccountId: "4109179969411777",
  },
  {
    domain: "6dqt0q-ab.myshopify.com",
    storename: "Studio Jaipur",
    customerId: "3348286405",
  },
  { domain: "pep9dc-m5.myshopify.com", storename: "Royal Jaipur" },
  {
    domain: "5ffq2q-fg.myshopify.com",
    storename: "Fabindia Kurti",
    adAccountId: "1912892672941189",
  },
  {
    domain: "ws5kks-t1.myshopify.com",
    storename: "Shades of Jaipur",
    adAccountId: "1930580844456334",
    customerId: "4834920001",
  },
  {
    domain: "jaipuri-fashion-2.myshopify.com",
    storename: "Jaipuri Fashion",
    adAccountId: "1905399050392971",
    customerId: "2473031090",
  },
  {
    domain: "cmqd7a-hv.myshopify.com",
    storename: "Gulabri Kurti",
    adAccountId: "2463452317390126",
  },
  {
    domain: "heew6u-gn.myshopify.com",
    storename: "Nazakat Jaipur",
    adAccountId: "2492150281155570",
    customerId: "8675391774",
  },
  {
    domain: "jrbr8x-zg.myshopify.com",
    storename: "Sanjh Jaipur",
    adAccountId: "868262652198084",
  },
  {
    domain: "jcvh4a-sr.myshopify.com",
    storename: "Sui Dhaga",
    adAccountId: "1123805468680977",
  },
  {
    domain: "stuybh-d5.myshopify.com",
    storename: "House of Bangles",
    adAccountId: "1010829417504050",
  },
];

/* ================================
   🔹 MAPS
================================ */
const STORE_MAP = STORE_LIST.reduce((acc, s) => {
  acc[s.domain] = s.storename;
  return acc;
}, {});

const STORE_MAP_FACEBOOK = STORE_LIST.reduce((acc, s) => {
  acc[s.domain] = s.adAccountId;
  return acc;
}, {});
const STORE_MAP_GOOGLE = STORE_LIST.reduce((acc, s) => {
  if (s.customerId) {
    acc[s.domain] = String(s.customerId);
  }
  return acc;
}, {});

/* ================================
   🔹 TABLE COLUMNS
================================ */
// const columns = [
//   {
//     field: "accountName",
//     headerName: "Account Name",
//     width: 220,
//     pinned: "left", // 🔥 Excel-style pin
//     headerClassName: "sticky-col",
//     cellClassName: "sticky-col",
//   },
//   {
//     field: "orderCount",
//     headerName: "Order Count",
//     width: 120,
//     cellClassName: "order-count-bold",
//   },
//   {
//     field: "orderValue",
//     width: 160,
//     valueFormatter: ({ value }) => `₹${Number(value || 0).toLocaleString()}`,
//   },
//   {
//     field: "facebookSpend",
//     headerName: "Facebook Spend",
//     width: 160,
//     valueFormatter: ({ value }) => `₹${Number(value || 0).toLocaleString()}`,
//   },
//   {
//     field: "googleSpend",
//     headerName: "Google Spend",
//     width: 160,
//     cellClassName: "google-spend-cell",
//     valueFormatter: ({ value }) => `₹${Number(value || 0).toLocaleString()}`,
//   },

//   {
//     field: "totalSpendPercent",
//     headerName: "Total Spend / GMV %",
//     width: 160,
//     cellClassName: "Total-spend-percent-cell",
//     valueFormatter: ({ value }) =>
//       value === "" ? "" : `${Number(value || 0).toFixed(2)}%`,
//   },
//   {
//     field: "cpp",
//     headerName: "Total CPP",
//     cellClassName: "cpp-cell",
//     width: 140,
//     valueFormatter: ({ value }) => `₹${Number(value || 0).toFixed(2)}`,
//   },
//   {
//     field: "yesterdayTillNowOrders",
//     headerName: "Yesterday Orders",
//     width: 180,
//     cellClassName: "yesterdayorders-cell",
//   },

//   {
//     field: "yesterdayTillNowValue",
//     headerName: "Yesterday Value (₹)",
//     width: 200,
//     valueFormatter: ({ value }) => `₹${Number(value || 0).toLocaleString()}`,
//   },
// {
//   field: "differenceOrders",
//   headerName: "Difference",
//   width: 220,
//   valueFormatter: ({ value }) => {
//     if (value > 0) return `+${value}`;
//     if (value === 0) return "0"; // 👈 leading space
//     return `${value}`; // negative
//   },

//   cellClassName: (params) => {
//     if (params.value > 0) return "diff-positive";
//     if (params.value < 0) return "diff-negative";
//     return " diff-zero";
//   },
// },

//   {
//     field: "commission",
//     headerName: "Commission Monetization",
//     width: 200,
//     valueFormatter: ({ value }) => `₹${Number(value || 0).toFixed(2)}`,
//   },
//   { field: "eligibleShipments", headerName: "Eligible Shipments", width: 160 },
//   {
//     field: "lpMonetization",
//     headerName: "LP Monetization",
//     width: 150,
//     valueFormatter: ({ value }) => `₹${Number(value || 0).toFixed(2)}`,
//   },
//   {
//     field: "totalMonetization",
//     headerName: "Total Monetization",
//     width: 180,
//     valueFormatter: ({ value }) => `₹${Number(value || 0).toFixed(2)}`,
//   },
//   {
//     field: "arrINR",
//     headerName: "ARR (₹)",
//     width: 160,
//     valueFormatter: ({ value }) => `₹${Number(value || 0).toLocaleString()}`,
//   },
// ];





const getColumns = (filterType) => {
  const showYesterdayMetrics = filterType !== "custom";
  const yesterdayMetricColumns = showYesterdayMetrics
    ? [
        {
          field: "yesterdaySpendPercent",
          headerName: "Yesterday Spend / GMV %",
          width: 200,
          valueFormatter: ({ value }) => `${Number(value || 0).toFixed(2)}%`,
        },
        {
          field: "yesterdayCpp",
          headerName: "Yesterday CPP",
          width: 160,
          valueFormatter: ({ value }) => `₹${Number(value || 0).toFixed(2)}`,
        },
      ]
    : [];

  const baseColumns = [
    {
      field: "accountName",
      headerName: "Account Name",
      width: 220,
      pinned: "left",
      headerClassName: "sticky-col",
      cellClassName: "sticky-col",
    },
    {
      field: "orderCount",
      headerName: "Order Count",
      width: 120,
      cellClassName: "order-count-bold",
    },
    {
      field: "orderValue",
      width: 160,
      valueFormatter: ({ value }) => `₹${Number(value || 0).toLocaleString()}`,
    },
    {
      field: "facebookSpend",
      headerName: "Facebook Spend",
      width: 160,
      valueFormatter: ({ value }) => `₹${Number(value || 0).toLocaleString()}`,
    },
    {
      field: "googleSpend",
      headerName: "Google Spend",
      width: 160,
      cellClassName: "google-spend-cell",
      valueFormatter: ({ value }) => `₹${Number(value || 0).toLocaleString()}`,
    },
    {
      field: "totalSpendPercent",
      headerName: "Total Spend / GMV %",
      width: 160,
      cellClassName: "Total-spend-percent-cell",
      valueFormatter: ({ value }) => `${Number(value || 0).toFixed(2)}%`,
    },
    {
      field: "cpp",
      headerName: "Total CPP",
      cellClassName: "cpp-cell",
      width: 140,
      valueFormatter: ({ value }) => `₹${Number(value || 0).toFixed(2)}`,
    },
  ];

  /** 🔥 ONLY FOR TODAY */
  const todayOnlyColumns =
    filterType === "today"
      ? [
          {
            field: "yesterdayTillNowOrders",
            headerName: "Yesterday Orders",
            cellClassName: "yesterdayorders-cell",
            width: 180,
          },
          {
            field: "yesterdayTillNowValue",
            headerName: "Yesterday Value (₹)",
            width: 200,
            valueFormatter: ({ value }) =>
              `₹${Number(value || 0).toLocaleString()}`,
          },
          {
            field: "differenceOrders",
            headerName: "Difference",
            width: 220,
            valueFormatter: ({ value }) => {
              if (value > 0) return `+${value}`;
              if (value === 0) return "0"; // 👈 leading space
              return `${value}`; // negative
            },

            cellClassName: (params) => {
              if (params.value > 0) return "diff-positive";
              if (params.value < 0) return "diff-negative";
              return " diff-zero";
            },
          },
        ]
      : [];

  // const tailColumns = [
  //   {
  //     field: "commission",
  //     headerName: "Commission Monetization",
  //     width: 200,
  //     valueFormatter: ({ value }) => `₹${Number(value || 0).toFixed(2)}`,
  //   },
  //   {
  //     field: "eligibleShipments",
  //     headerName: "Eligible Shipments",
  //     width: 160,
  //   },
  //   {
  //     field: "lpMonetization",
  //     headerName: "LP Monetization",
  //     width: 150,
  //     valueFormatter: ({ value }) => `₹${Number(value || 0).toFixed(2)}`,
  //   },
  //   {
  //     field: "totalMonetization",
  //     headerName: "Total Monetization",
  //     width: 180,
  //     valueFormatter: ({ value }) => `₹${Number(value || 0).toFixed(2)}`,
  //   },
  //   {
  //     field: "arrINR",
  //     headerName: "ARR (₹)",
  //     width: 160,
  //     valueFormatter: ({ value }) => `₹${Number(value || 0).toLocaleString()}`,
  //   },
  // ];

  return [
    ...baseColumns,
    ...yesterdayMetricColumns,
    ...todayOnlyColumns,
  ];
};

/* ================================
   🔹 COMPONENT
================================ */
export default function StoreReportTable({ token }) {
  const [rows, setRows] = useState([]);
  const [facebookSpendMap, setFacebookSpendMap] = useState({});
  const [googleSpendMap, setGoogleSpendMap] = useState({});
  const [filterType, setFilterType] = useState("today");
  const [yesterdayMap, setYesterdayMap] = useState({});
  const [yesterdayFullMap, setYesterdayFullMap] = useState({});
  const [yesterdayFacebookSpendMap, setYesterdayFacebookSpendMap] = useState(
    {}
  );
  const [yesterdayGoogleSpendMap, setYesterdayGoogleSpendMap] = useState({});
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [sortModel, setSortModel] = useState([
    { field: "orderCount", sort: "desc" },
  ]);
//download//
const downloadCSV = () => {
  if (!rows.length) return;

  const dataRows = rows.filter((r) => r.id !== "TOTAL_ROW");

  // 🔥 BASE HEADERS (sab ke liye)
  let headers = [
    "Account Name",
    "Order Count",
    "Order Value",
    "Facebook Spend",
    "Google Spend",
    "Total Spend %",
    "CPP",
  ];

  // 🔥 ONLY FOR TODAY
  if (filterType === "today") {
    headers.push(
      "Yesterday Orders",
      "Yesterday Value",
      "Difference"
    );
  }

  const csvRows = [
    headers.join(","),

    ...dataRows.map((r) => {
      const baseRow = [
        `"${r.accountName}"`,
        r.orderCount,
        r.orderValue,
        r.facebookSpend,
        r.googleSpend,
        r.totalSpendPercent?.toFixed(2),
        r.cpp?.toFixed(2),
      ];

      // 🔥 ONLY FOR TODAY
      if (filterType === "today") {
        baseRow.push(
          r.yesterdayTillNowOrders ?? "",
          r.yesterdayTillNowValue ?? "",
          r.differenceOrders ?? ""
        );
      }

      return baseRow.join(",");
    }),
  ];

  const blob = new Blob([csvRows.join("\n")], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  const label =
    filterType === "custom"
      ? `${startDate}_to_${endDate}`
      : filterType;

  link.href = url;
  link.download = `store_report_${label}.csv`;
  link.click();

  URL.revokeObjectURL(url);
};

  /* ================================
     🔹 FACEBOOK ADS (ALAG)
  ================================ */
  const fetchYesterdayAdsSpend = () => {
    fetchYesterdayFacebookAds();
    fetchYesterdayGoogleAds();
  };
  const fetchYesterdayFull = () => {
    axios
      .get("http://localhost:8000/api/reports/yesterday-summary", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const map = {};
        res.data.forEach((r) => {
          map[r.domain] = {
            orders: Number(r.yesterdayOrderCount || 0),
            value: Number(r.yesterdayOrderValue || 0),
          };
        });
        setYesterdayFullMap(map);
      })
      .catch(() => setYesterdayFullMap({}));
  };
  useEffect(() => {
    fetchYesterdayFull();
  }, []);

  useEffect(() => {
    if (filterType === "custom") return;
    fetchYesterdayAdsSpend();
  }, [filterType]);

  const fetchYesterdayFacebookAds = () => {
    axios
      .get("http://localhost:8000/api/reports/ads-summary", {
        headers: { Authorization: `Bearer ${token}` },
        params: { filterType: "yesterday" },
      })
      .then((res) => {
        const map = {};
        res.data.forEach((r) => {
          map[r.adAccountId] = Number(r.totalSpend || 0);
        });
        setYesterdayFacebookSpendMap(map);
      })
      .catch(() => setYesterdayFacebookSpendMap({}));
  };

  const fetchYesterdayGoogleAds = () => {
    axios
      .get("http://localhost:8000/api/reports/google-ads-summary", {
        headers: { Authorization: `Bearer ${token}` },
        params: { filterType: "yesterday" },
      })
      .then((res) => {
        const map = {};
        res.data.forEach((r) => {
          map[String(r.customerId)] = Number(r.spend || 0);
        });
        setYesterdayGoogleSpendMap(map);
      })
      .catch(() => setYesterdayGoogleSpendMap({}));
  };

  const fetchYesterdayTillNow = () => {
    axios
      .get("http://localhost:8000/api/reports/yesterday-till-now", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const map = {};
        res.data.data.forEach((r) => {
          map[r.accountName] = {
            count: r.yesterdayTillNowOrders,
            value: r.yesterdayTillNowValue,
          };
        });
        setYesterdayMap(map);
      })
      .catch(() => setYesterdayMap({}));
  };

  const handleRefresh = () => {
    setFilterType("today");

    fetchData({ filterType: "today" });
    fetchFacebookAds({ filterType: "today" });
    fetchGoogleAds({ filterType: "today" });
    fetchYesterdayTillNow();
    fetchYesterdayFull();
  };
  const fetchGoogleAds = (params = {}) => {
    axios
      .get("http://localhost:8000/api/reports/google-ads-summary", {
        headers: { Authorization: `Bearer ${token}` },
        params,
      })
      .then((res) => {
        const map = {};
        res.data.forEach((r) => {
          // customerId === adAccountId
          map[String(r.customerId)] = Number(r.spend || 0);
        });

        setGoogleSpendMap(map);
      })
      .catch(() => setGoogleSpendMap({}));
  };

  const fetchFacebookAds = (params = {}) => {
    axios
      .get("http://localhost:8000/api/reports/ads-summary", {
        headers: { Authorization: `Bearer ${token}` },
        params,
      })
      .then((res) => {
        const map = {};
        res.data.forEach((r) => {
          map[r.adAccountId] = r.totalSpend;
        });
        setFacebookSpendMap(map);
      })
      .catch(() => setFacebookSpendMap({}));
  };
  const buildTotalRow = (rows) => {
    const dataRows = rows.filter((r) => r.id !== "TOTAL_ROW");

    if (!dataRows.length) return null;

    const total = dataRows.reduce(
      (acc, r) => {
        acc.orderCount += Number(r.orderCount || 0);
        acc.orderValue += Number(r.orderValue || 0);
        acc.facebookSpend += Number(r.facebookSpend || 0);
        acc.googleSpend += Number(r.googleSpend || 0);
        acc.yesterdayTillNowOrders += Number(r.yesterdayTillNowOrders || 0);
        acc.yesterdayTillNowValue += Number(r.yesterdayTillNowValue || 0);
        acc.commission += Number(r.commission || 0);
        acc.eligibleShipments += Number(r.eligibleShipments || 0);
        acc.lpMonetization += Number(r.lpMonetization || 0);
        acc.totalMonetization += Number(r.totalMonetization || 0);
        acc.arrINR += Number(r.arrINR || 0);
        return acc;
      },
      {
        orderCount: 0,
        orderValue: 0,
        facebookSpend: 0,
        googleSpend: 0,
        yesterdayTillNowOrders: 0,
        yesterdayTillNowValue: 0,
        commission: 0,
        eligibleShipments: 0,
        lpMonetization: 0,
        totalMonetization: 0,
        arrINR: 0,
      }
    );
    const calculatedCpp =
      total.orderCount > 0
        ? (total.facebookSpend + total.googleSpend) / total.orderCount
        : 0;

    const cpp = calculatedCpp > 0 ? calculatedCpp : 0; // fallback to API cpp

    // ✅ TOTAL Spend / GMV %
    const totalSpendPercent =
      total.orderValue > 0
        ? ((total.facebookSpend + total.googleSpend) / total.orderValue) * 100
        : 0;
    const differenceOrders =
      total.orderCount - (total.yesterdayTillNowOrders || 0);
    const yesterdaySpendPercent =
      total.yesterdayTillNowValue > 0
        ? ((total.facebookSpend + total.googleSpend) /
            total.yesterdayTillNowValue) *
          100
        : 0;

    const yesterdayCpp =
      total.yesterdayTillNowOrders > 0
        ? (total.facebookSpend + total.googleSpend) /
          total.yesterdayTillNowOrders
        : 0;

    return {
      id: "TOTAL_ROW",
      accountName: "TOTAL",
      ...total,
      totalSpendPercent, // 👈 AB % AAYEGA
      cpp, // 👈 AB CPP AAYEGA
      differenceOrders,
      yesterdaySpendPercent,
      yesterdayCpp,
    };
  };

  /* ================================
     🔹 STORE SUMMARY (OLD LOGIC)
     ⚠️ ONLY CHANGE: __domain ADDED
  ================================ */
  const fetchData = (params = {}) => {
    axios
      .get("http://localhost:8000/api/reports/store-summary", {
        headers: { Authorization: `Bearer ${token}` },
        params,
      })
      .then((res) => {
        const apiData = Array.isArray(res.data) ? res.data : [];

        // 🔹 API DATA MAP (domain => data)
        const apiMap = {};
        apiData.forEach((r) => {
          apiMap[r.accountName] = r;
        });

        // 🔹 FINAL ROWS (ALL STORES)
        const mappedRows = STORE_LIST.map((store, index) => {
          const apiRow = apiMap[store.domain];

          return {
            id: index,
            __domain: store.domain,
            accountName: store.storename,

            orderCount: Number(apiRow?.orderCount || 0),
            orderValue: Number(apiRow?.orderValue || 0),
            rtoPercent: Number(apiRow?.rtoPercent || 0),
            cpp: Number(apiRow?.cpp || 0),
            commission: Number(apiRow?.commission || 0),
            eligibleShipments: Number(apiRow?.eligibleShipments || 0),
            lpMonetization: Number(apiRow?.lpMonetization || 0),
            totalMonetization: Number(apiRow?.totalMonetization || 0),
            arrINR: Number(apiRow?.arrINR || 0),
            facebookSpend: 0, // later merge hoga
          };
        });

        const totalRow = buildTotalRow(mappedRows);

        const rowsWithTotal = totalRow ? [...mappedRows, totalRow] : mappedRows;

        // 🔹 DEFAULT SORT: Order Count DESC
        const dataRows = rowsWithTotal.filter((r) => r.id !== "TOTAL_ROW");
        const total = rowsWithTotal.find((r) => r.id === "TOTAL_ROW");

        dataRows.sort((a, b) => b.orderCount - a.orderCount);

        setRows(total ? [...dataRows, total] : dataRows);
      })
      .catch(() => setRows([]));
  };

  /* ================================
     🔹 MERGE FACEBOOK SPEND (FIXED)
  ================================ */
  useEffect(
    () => {
      if (!rows.length) return;

      setRows((prev) => {
        const cleanRows = prev.filter((r) => r.id !== "TOTAL_ROW");

        const merged = cleanRows.map((r) => {
          const fbId = STORE_MAP_FACEBOOK[r.__domain];
          const googleId = STORE_MAP_GOOGLE[r.__domain];

          const facebookSpend = Number(facebookSpendMap[fbId] ?? 0);
          const googleSpend = Number(googleSpendMap[googleId] ?? 0);
          const orderValue = Number(r.orderValue || 0);
          const orderCount = Number(r.orderCount || 0);

          // ✅ Total Spend / GMV %
          const totalSpendPercent =
            orderValue > 0
              ? ((facebookSpend + googleSpend) / orderValue) * 100
              : 0;

          // ✅ YESTERDAY CPP FORMULA
          const cpp =
            orderCount > 0 ? (facebookSpend + googleSpend) / orderCount : r.cpp; // today / custom ke liye API wala cpp
          const yesterday = yesterdayMap[r.__domain] || {};

          const yesterdayTillNowOrders = Number(yesterday.count || 0);
          const yesterdayTillNowValue = Number(yesterday.value || 0);
          const differenceOrders =
            Number(r.orderCount || 0) - Number(yesterdayTillNowOrders || 0) ||
            0;
          const yesterdayFbSpend = Number(yesterdayFacebookSpendMap[fbId] ?? 0);
          const yesterdayGoogleSpend = Number(
            yesterdayGoogleSpendMap[googleId] ?? 0
          );

          const yesterdaySpendTotal = yesterdayFbSpend + yesterdayGoogleSpend;

         const yesterdaySpendPercent =
  (filterType === "yesterday" )
    ? totalSpendPercent   // 👈 SAME AS TOTAL
    : yesterdayTillNowValue > 0
      ? (yesterdaySpendTotal / yesterdayTillNowValue) * 100
      : 0;


          const yesterdayCpp =
            yesterdayTillNowOrders > 0
              ? yesterdaySpendTotal / yesterdayTillNowOrders
              : 0;
          const yesterdayData = yesterdayFullMap[r.__domain] || {};

          const yesterdayOrders = Number(yesterdayData.orders || 0);
          const yesterdayValue = Number(yesterdayData.value || 0);

          const yesterdayFbSpend1 = Number(
            yesterdayFacebookSpendMap[fbId] ?? 0
          );
          const yesterdayGoogleSpend1 = Number(
            yesterdayGoogleSpendMap[googleId] ?? 0
          );

          const yesterdaySpendTotal1 = yesterdayFbSpend + yesterdayGoogleSpend;

          // ✅ Yesterday Spend / GMV %
          const yesterdaySpendPercent1 =
            yesterdayValue > 0
              ? (yesterdaySpendTotal / yesterdayValue) * 100
              : 0;

          // ✅ Yesterday CPP
          const yesterdayCpp1 =
            yesterdayOrders > 0 ? yesterdaySpendTotal / yesterdayOrders : 0;

          return {
            ...r,
            facebookSpend,
            googleSpend,
            totalSpendPercent,
            cpp, // 👈 UPDATED
            yesterdayTillNowOrders,
            yesterdayTillNowValue,
            differenceOrders: Number.isFinite(differenceOrders)
              ? differenceOrders
              : 0,
            yesterdayOrders,
            yesterdayValue,
            yesterdaySpendPercent,
            yesterdayCpp,
          };
        });

        const totalRow = buildTotalRow(merged);
        return totalRow ? [...merged, totalRow] : merged;
      });
    },
    [facebookSpendMap, googleSpendMap, yesterdayMap] // depend on,
  );

  /* ================================
     🔹 DEFAULT LOAD
  ================================ */
  useEffect(() => {
    fetchData({ filterType: "today" });
    fetchFacebookAds({ filterType: "today" });
    fetchGoogleAds({ filterType: "today" });
    fetchYesterdayTillNow();
  }, []);
  useEffect(() => {
    // first load
    handleRefresh();

    // auto refresh every 5 minutes
    const interval = setInterval(() => {
      handleRefresh();
      console.log("⏱ Data refreshed automatically");
    }, 5 * 60 * 1000); // 5 min

    // cleanup
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="store-dashboard">
        {/* 🔹 FILTER BAR */}
        <div className="filter-bar-wrapper">
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            className="filter-bar"
          >
            <Button
              variant={filterType === "today" ? "contained" : "outlined"}
              onClick={() => {
                setFilterType("today");
                fetchData({ filterType: "today" });
                fetchFacebookAds({ filterType: "today" });
                fetchGoogleAds({ filterType: "today" });
              }}
            >
              Today
            </Button>

            <Button
              variant={filterType === "yesterday" ? "contained" : "outlined"}
              onClick={() => {
                setFilterType("yesterday");
                fetchData({ filterType: "yesterday" });
                fetchFacebookAds({ filterType: "yesterday" });
                fetchGoogleAds({ filterType: "yesterday" });
              }}
            >
              Yesterday
            </Button>

            <TextField
              type="date"
              size="small"
              label="Start Date"
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setStartDate(e.target.value)}
            />

            <TextField
              type="date"
              size="small"
              label="End Date"
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setEndDate(e.target.value)}
            />

            <Button
              variant="contained"
              disabled={!startDate || !endDate}
              onClick={() => {
                setFilterType("custom");
                fetchData({ filterType: "custom", startDate, endDate });
                fetchFacebookAds({ filterType: "custom", startDate, endDate });
                fetchGoogleAds({ filterType: "custom", startDate, endDate });
              }}
            >
              Apply
            </Button>
            <Button variant="contained" onClick={handleRefresh}>
              Refresh
            </Button>
            <Button
  variant="contained"
  color="success"
  onClick={downloadCSV}
>
  Download
</Button>

          </Stack>
        </div>

        {/* 🔹 TABLE */}
        <div className="table-wrapper">
          <DataGrid
            rows={rows}
            columns={getColumns(filterType)}
            sortingMode="server" // 🔥 MOST IMPORTANT LINE
            sortModel={sortModel}
            onSortModelChange={(model) => {
              setSortModel(model);

              if (!model.length) return;

              const { field, sort } = model[0];

              setRows((prev) => {
                const totalRow = prev.find((r) => r.id === "TOTAL_ROW");
                const dataRows = prev.filter((r) => r.id !== "TOTAL_ROW");

                const sorted = [...dataRows].sort((a, b) => {
                  const aVal = a[field] ?? 0;
                  const bVal = b[field] ?? 0;

                  if (typeof aVal === "number" && typeof bVal === "number") {
                    return sort === "asc" ? aVal - bVal : bVal - aVal;
                  }

                  return sort === "asc"
                    ? String(aVal).localeCompare(String(bVal))
                    : String(bVal).localeCompare(String(aVal));
                });

                return totalRow ? [...sorted, totalRow] : sorted;
              });
            }}
            disableRowSelectionOnClick
            pageSizeOptions={[20, 50, 100]}
            initialState={{
              pagination: { paginationModel: { pageSize: 100, page: 0 } },
            }}
            getRowClassName={(params) =>
              params.id === "TOTAL_ROW" ? "total-row" : ""
            }
            disableVirtualization // 👈 for sticky footer
            sx={{
              "& .total-row": {
                position: "sticky",
                bottom: "-4px", // pagination ke upar
                zIndex: 10,
                backgroundColor: "#f0f4ff",
                fontWeight: 700,
                borderTop: "2px solid #3f51b5",
              },

              /* 🔥 IMPORTANT FIX */
              "& .total-row:hover": {
                backgroundColor: "#f0f4ff !important", // hover pe bhi same
              },

              /* Agar cell hover se color change ho raha ho */
              "& .total-row .MuiDataGrid-cell": {
                backgroundColor: "#f0f4ff",
              },
              "& .total-row:hover .MuiDataGrid-cell": {
                backgroundColor: "#f0f4ff !important",
              },
            }}
          />
        </div>
      </div>
    </>
  );
}
