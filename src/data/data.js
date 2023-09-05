export const dataS = [
  {
    "id": 1,
    "mac": "5c:70:a3:68:82:48",
    "ip": "192.168.65.250",
    "latencia": 3,
    "date": "1/9/2023",
    "rssi": -71,
    "SNR": 30,
    "RX": 6,
    "TX": 433.3
},
{
    "id": 2,
    "mac": "1c:cc:d6:45:d0:b7",
    "ip": "192.168.65.143",
    "latencia": 75,
    "date": "1/9/2023",
    "rssi": -73,
    "SNR": 28,
    "RX": 6,
    "TX": 433.3
},
{
  "id": 3,
  "mac": "56:27:A0:31:D9:52",
  "ip": "192.168.65.10",
  "latencia": 30,
  "date": "1/9/2023",
  "rssi": -58,
  "SNR": 33,
  "RX": 15,
  "TX": 200
},
{
  "id": 4,
  "mac": "E8:D8:19:1E:8E:E1",
  "ip": "192.168.65.100",
  "latencia": 90,
  "date": "1/9/2023",
  "rssi": -53,
  "SNR": 40,
  "RX": 6,
  "TX": 180
},

{
  "id": 5,
  "mac": "00:22:90:e0:e6:bf",
  "ip": "192.168.65.160",
  "latencia": 65,
  "date": "1/9/2023",
  "rssi": -70,
  "SNR": 31,
  "RX": 6,
  "TX": 433.3
},
{
  "id": 6,
  "mac": "AC:67:B2:3D:6C:34",
  "ip": "192.168.65.149",
  "latencia": 250,
  "date": "1/9/2023",
  "rssi": -49,
  "SNR": 25,
  "RX": 16,
  "TX": 433.3
},

{
  "id": 7,
  "mac": "AC:67:B2:3D:6C:34",
  "ip": "192.168.65.112",
  "latencia": 60,
  "date": "1/9/2023",
  "rssi": -80,
  "SNR": 30,
  "RX": 6,
  "TX": 433.3
},
{
  "id": 8,
  "mac": "f2:7f:a8:11:a9:e6",
  "ip": "192.168.65.115",
  "latencia": 100,
  "date": "1/9/2023",
  "rssi": -51,
  "SNR": 32,
  "RX": 6,
  "TX": 433.3
},
 
];

export const Data2 = [
  {
    id: "TX Data",
    data: [
      {
        x: "2023-08-26",
        y: 245525.791,
      },
      {
        x: "2023-08-27",
        y: 2532737.807,
      },
      {
        x: "2023-08-29",
        y: 1542146.022,
      },
      {
        x: "2023-08-30",
        y: 1366663.682,
      },
      {
        x: "2023-08-31",
        y: 346678.444,
      },
    ],
  },

  {
    id: "RX Data",
    data: [
      {
        x: "2023-08-26",
        y: 0,
      },
      {
        x: "2023-08-27",
        y: 7786.48,
      },
      {
        x: "2023-08-29",
        y: 578.934,
      },
      {
        x: "2023-08-30",
        y: 6432.3,
      },
      {
        x: "2023-08-31",
        y: 0,
      },
    ],
  },
];

export const mactxrx = [
  {
    txId: "01e4dsa",
    mac: "AC:67:B2:3D:6C:34",
    tx: "72.2 Mbps",
    rx: "6 Mbps",
  },
  {
    txId: "0315dsaa",
    mac: "4E:EC:84:BF:BC:67",
    tx: "58.5 Mbps",
    rx: "8 Mbps",
  },
  {
    txId: "01e4dsa",
    mac: "E6:C3:2A:0C:63:8E",
    tx: "65 Mbps",
    rx: "6 Mbps",
  },
  {
    txId: "51034szv",
    mac: "1C:CC:D6:45:D0:B7",
    tx: "60 Mbps",
    rx: "7 Mbps",
  },
  {
    txId: "0a123sb",
    mac: "56:27:A0:31:D9:52",
    tx: "40 Mbps",
    rx: "15 Mbps",
  },
  {
    txId: "01e4dsa",
    mac: "E8:D8:19:1E:8E:E1",
    tx: "45 Mbps",
    rx: "10 Mbps",
  },
  {
    txId: "120s51a",
    mac: "00:22:90:e0:e6:bf",
    tx: "85 Mbps",
    rx: "6 Mbps",
  },
  {
    txId: "0315dsaa",
    mac: "50:46:4A:10:B1:07",
    tx: "55 Mbps",
    rx: "17 Mbps",
  },
];

export const PieData = [
  {
    id: "2.4 GHz",
    label: "2.4 GHz",
    value: 80,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "5 GHz",
    label: "5 GHz",
    value: 20,
    color: "hsl(162, 70%, 50%)",
  },
];

export const alerts = [
  {
    txId: "01e4dsa",
    fecha: "2023/06/17",
    hora: "10:45:23",
    mac: "00:22:90:e0:e6:bf",
    msg: "Se dectectó un puerto inusual abierto",
  },
  {
    txId: "01e4dsa",
    fecha: "2023/06/18",
    hora: "18:20:19",
    mac: "50:46:4A:10:B1:07",
    msg: "Se dectectó un incremento de tráfico inusual en la interfaz wlan1-1",
  },
  {
    txId: "01e4dsa",
    fecha: "2023/06/18",
    hora: "14:20:19",
    mac: "50:46:4A:10:B1:07",
    msg: "Se dectectó un incremento de tráfico inusual en la interfaz wlan1-1",
  },
];

export const Data3 = [
  {
    id: "Tx Data",
    data: [
      {
        x: "2023-06-15 14:25",
        y: "300.00 MB",
      },
      {
        x: "2023-06-16 16:00",
        y: "100.00 MB",
      },
      {
        x: "2023-06-17 10:52",
        y: "600.00 MB",
      },
      {
        x: "2023-06-18 15:10",
        y: "1.17 GB",
      },
      {
        x: "2023-06-19 8:40",
        y: "900.00 MB",
      },
    ],
  },

  {
    id: "Rx Data",
    data: [
      {
        x: "2023-06-15 14:25",
        y: "500.00 MB",
      },
      {
        x: "2023-06-16 16:00",
        y: "800.00 MB",
      },
      {
        x: "2023-06-17 10:52",
        y: "1.46 GB",
      },
      {
        x: "2023-06-18 15:10",
        y: "200.00 MB",
      },
      {
        x: "2023-06-19 8:40",
        y: "2.05 GB",
      },
    ],
  },
];
