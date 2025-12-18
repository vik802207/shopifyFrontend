import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, TextField, Stack } from "@mui/material";
import "./StoreReportTable.css";

/* ================================
   🔹 STORE MASTER
================================ */
const STORE_LIST = [
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
  },
  {
    domain: "xchkbr-xk.myshopify.com",
    storename: "Trendz Jewelry",
    adAccountId: "994084379537653",
  },
  {
    domain: "hpqykh-8s.myshopify.com",
    storename: "Modern Minnies",
    adAccountId: "1491853345014194",
  },
  {
    domain: "31cf7c-b9.myshopify.com",
    storename: "Jaipur Cotton Kurti (Laxmi)",
    adAccountId: "1563769617775044",
  },
  {
    domain: "00qj4d-6r.myshopify.com",
    storename: "Jaipur Kurta (Navya)",
    adAccountId: "2034143927110319",
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
  },
  {
    domain: "31c7c-b9.myshopify.com",
    storename: "Jaipur Cotton Kurti (Laxmi)",
    adAccountId: "1563769617775044",
  },
  {
    domain: "a68cb8-80.myshopify.com",
    storename: "Vastra Jaipur (Laxmi)",
    adAccountId: "1465021304361078",
  },
  {
    domain: "thebibastore.myshopify.com",
    storename: "Kurta Jaipur (Naresh)",
    adAccountId: "1487775638903195",
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
  },
  {
    domain: "00qi4d-6r.myshopify.com",
    storename: "Jaipur Kurta (Navya)",
    adAccountId: "2034143927110319",
  },
  {
    domain: "hpqyk-8s.myshopify.com",
    storename: "Modern Minnies",
    adAccountId: "1491853345014194",
  },
  {
    domain: "0dds7v-ms.myshopify.com",
    storename: "Libas S",
    adAccountId: "2103097980166685",
  },
  {
    domain: "1bf9tm-se.myshopify.com",
    storename: "Lume Jewels",
    adAccountId: "",
  },
  {
    domain: "ws5kks-t1.myshopify.com",
    storename: "Thelibaskurti",
    adAccountId: "1679103402773971",
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
  },
  {
    domain: "wfb2g3-2e.myshopify.com",
    storename: "Libas P",
    adAccountId: "1326084679088292",
  },
  {
    domain: "1avwc0-qw.myshopify.com",
    storename: "Raag Varnam",
    adAccountId: "512495595200445",
  },
  {
    domain: "eirfu0-ic.myshopify.com",
    storename: "Biba India (Laxmi)",
    adAccountId: "3813309132314642",
  },
  { domain: "f71bq4-t1.myshopify.com", storename: "Royal Libas" },
  { domain: "7mvqxz-ug.myshopify.com", storename: "Nari Kash" },
  { domain: "9tnkwm-pk.myshopify.com", storename: "BLBA (KJ)" },
  { domain: "r8uz05-7p.myshopify.com", storename: "Kanigiri Saree" },
  { domain: "9tnkwm-ok.myshopify.com", storename: "BLBA (KJ)" },
  { domain: "w0bcy7-e7.myshopify.com", storename: "W For Women (S)" },
  { domain: "heew6u-en.myshopify.com", storename: "Nazakat Jaipur" },
  { domain: "d3wrg8s.myshopify.com", storename: "Fabindya" },
  { domain: "navyatasolutions.myshopify.com", storename: "Ethnic Sarees" },
  { domain: "stuvbh-d5.myshopify.com", storename: "House of Bangles" },
  { domain: "xchxbr-xk.myshopify.com", storename: "Trendz Jewelry" },
  { domain: "cu1fn1-14.myshopify.com", storename: "Jaipuri Ethnic" },
  {
    domain: "jaipur-kurta-fashion.myshopify.com",
    storename: "Jaipur Kurta Fashion",
  },
  { domain: "cmqd7a-nv.myshopify.com", storename: "Gulabri Kurti" },
  { domain: "jaipuri-fashion-2.myshopify.com", storename: "Jaipuri Fashion" },
  {
    domain: "yrye9p-3p.myshopify.com",
    storename: "Libas Kurta Store",
    adAccountId: "1633881027961041",
  },
  {
    domain: "t12rzj-m9.myshopify.com",
    storename: "Jaipur Weave",
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
  { domain: "6dqt0q-ab.myshopify.com", storename: "Studio Jaipur" },
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
  },
  {
    domain: "jaipuri-fashion-2.myshopify.com",
    storename: "Jaipuri Fashion",
    adAccountId: "1905399050392971",
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
  },
  {
    domain:"jrbr8x-zg.myshopify.com",
    storename: "Sanjh Jaipur",
    adAccountId: "868262652198084",
  },{
    domain:"jcvh4a-sr.myshopify.com" ,
    storename: "Sui Dhaga",
    adAccountId: "1123805468680977",
  },{
    domain:"stuybh-d5.myshopify.com",
    storename: "House of Bangles",
    adAccountId: "1010829417504050",
  }
  ,{
    domain:"jaipuri-fashion-2.myshopify.com",
    storename: "Jaipuri Fashion",
  }
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

/* ================================
   🔹 TABLE COLUMNS
================================ */
const columns = [
  {
    field: "accountName",
    headerName: "Account Name",
    width: 220,
    pinned: "left", // 🔥 Excel-style pin
    headerClassName: "sticky-col",
    cellClassName: "sticky-col",
  },
  { field: "orderCount", headerName: "Order Count", width: 120 },
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
    field: "rtoPercent",
    headerName: "RTO %",
    width: 100,
    valueFormatter: ({ value }) => `${Number(value || 0).toFixed(2)}%`,
  },
  {
    field: "cpp",
    headerName: "Yesterday CPP",
    width: 140,
    valueFormatter: ({ value }) => `₹${Number(value || 0).toFixed(2)}`,
  },
  {
    field: "commission",
    headerName: "Commission Monetization",
    width: 200,
    valueFormatter: ({ value }) => `₹${Number(value || 0).toFixed(2)}`,
  },
  { field: "eligibleShipments", headerName: "Eligible Shipments", width: 160 },
  {
    field: "lpMonetization",
    headerName: "LP Monetization",
    width: 150,
    valueFormatter: ({ value }) => `₹${Number(value || 0).toFixed(2)}`,
  },
  {
    field: "totalMonetization",
    headerName: "Total Monetization",
    width: 180,
    valueFormatter: ({ value }) => `₹${Number(value || 0).toFixed(2)}`,
  },
  {
    field: "arrINR",
    headerName: "ARR (₹)",
    width: 160,
    valueFormatter: ({ value }) => `₹${Number(value || 0).toLocaleString()}`,
  },
];

/* ================================
   🔹 COMPONENT
================================ */
export default function StoreReportTable({ token }) {
  const [rows, setRows] = useState([]);
  const [facebookSpendMap, setFacebookSpendMap] = useState({});
  const [filterType, setFilterType] = useState("today");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  /* ================================
     🔹 FACEBOOK ADS (ALAG)
  ================================ */
  const fetchFacebookAds = (params = {}) => {
    axios
      .get("https://shopify-6wvc.onrender.com/api/reports/ads-summary", {
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

  /* ================================
     🔹 STORE SUMMARY (OLD LOGIC)
     ⚠️ ONLY CHANGE: __domain ADDED
  ================================ */
  const fetchData = (params = {}) => {
    axios
      .get("https://shopify-6wvc.onrender.com/api/reports/store-summary", {
        headers: { Authorization: `Bearer ${token}` },
        params,
      })
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : [];

        setRows(
          data.map((r, i) => ({
            id: i,

            // 🔥 DISPLAY NAME
            accountName: STORE_MAP[r.accountName] || r.accountName,

            // 🔑 REAL DOMAIN (INTERNAL USE)
            __domain: r.accountName,

            orderCount: r.orderCount,
            orderValue: r.orderValue,
            rtoPercent: r.rtoPercent,
            cpp: r.cpp,
            commission: r.commission,
            eligibleShipments: r.eligibleShipments,
            lpMonetization: r.lpMonetization,
            totalMonetization: r.totalMonetization,
            arrINR: r.arrINR,
          }))
        );
      })
      .catch(() => setRows([]));
  };

  /* ================================
     🔹 MERGE FACEBOOK SPEND (FIXED)
  ================================ */
  useEffect(() => {
    if (!rows.length) return;

    setRows((prev) =>
      prev.map((r) => ({
        ...r,
        facebookSpend: facebookSpendMap[STORE_MAP_FACEBOOK[r.__domain]] || 0,
      }))
    );
  }, [facebookSpendMap]);

  /* ================================
     🔹 DEFAULT LOAD
  ================================ */
  useEffect(() => {
    fetchData({ filterType: "today" });
    fetchFacebookAds({ filterType: "today" });
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
              }}
            >
              Apply
            </Button>
          </Stack>
        </div>

        {/* 🔹 TABLE */}
        <div className="table-wrapper">
          <DataGrid
            rows={rows}
            columns={columns}
            disableRowSelectionOnClick
            pageSizeOptions={[20, 50, 100]}
            initialState={{
              pagination: { paginationModel: { pageSize: 20, page: 0 } },
            }}
            sx={{
              overflowX: "auto",
            }}
          />
        </div>
      </div>
    </>
  );
}
