import toyota_tx from "../images/toyota-tx.jpg";
import toyota_fortuner from "../images/toyota-fortuner.png";
import ford_custom from "../images/ford-custom.png";
import marrakech_1 from "../images/marrakech-1.jpg";
import mercedes_class_e from "../images/mercedes-class-e.png";
import ourika_valley_1 from "../images/ourika-valley-1.jpeg";
import mercedes_vito from "../images/mercedes-vito.png";
import Avatar from "@mui/material/Avatar";

export const gridOrderImage = (props) => (
  <Avatar
    className="rounded-xl h-20 md:ml-3"
    src={props.ProductImage}
    alt="order-item"
  />
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

export const ordersGrid = [
  {
    headerName: "Image",
    textAlign: "Center",
    width: "120",
    renderCell: (params) => (
      <img src={params.ProductImage} alt={params.OrderItems} />
    ),
  },
  {
    field: "OrderItems",
    headerName: "Item",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "CustomerName",
    headerName: "Customer Name",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "TotalAmount",
    headerName: "Total Amount",
    format: "C2",
    textAlign: "Center",
    width: "150",
  },
  {
    field: "Status",
    headerName: "Status",
    template: gridOrderStatus,
    textAlign: "Center",
    width: "120",
  },
  {
    field: "OrderID",
    headerName: "Order ID",
    width: "120",
    textAlign: "Center",
  },
];

export const ordersData = [
  {
    OrderID: 10248,
    CustomerName: "Ayal Saad",
    TotalAmount: 32.38,
    OrderItems: "4X4 TOYOTA TX",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage: toyota_tx,
  },
  {
    OrderID: 345653,
    CustomerName: "Yaniv Cohen",
    TotalAmount: 56.34,
    OrderItems: "4X4 TOYOTA FORTUNER",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage: toyota_fortuner,
  },
  {
    OrderID: 390457,
    CustomerName: "Mahmoud Zoabi",
    TotalAmount: 93.31,
    OrderItems: "MERCEDES VITO",
    Location: "New York",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage: mercedes_vito,
  },
  {
    OrderID: 893486,
    CustomerName: "John Marston",
    TotalAmount: 93.31,
    OrderItems: "FORD CUSTOM",
    Location: "Germany",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage: ford_custom,
  },
  {
    OrderID: 748975,
    CustomerName: "Rami Saad",
    TotalAmount: 23.99,
    OrderItems: "MERCEDES CLASS E",
    Location: "Spain",
    Status: "rejected",
    StatusBg: "red",
    ProductImage: mercedes_class_e,
  },
  {
    OrderID: 94757,
    CustomerName: "Ayal Saad",
    TotalAmount: 95.99,
    OrderItems: "MARRAKECH OUARZAZATE 1 DAYS",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage: marrakech_1,
  },
  {
    OrderID: 944895,
    CustomerName: "Kuku Muku",
    TotalAmount: 17.99,
    OrderItems: "OURIKA VALLEY",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage: ourika_valley_1,
  },
];
