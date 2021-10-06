const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const methodOverride = require("method-override");
const path = require("path");
const app = express();
const port = 3000;

const route = require("./routes");
const { connect } = require("./config/db");

//connect to db
connect();

//dùng để xử lý req dạng form HTML
app.use(express.urlencoded({ extended: true }));

// dùng để xử lý req của axios,fetch,… gửi lên
app.use(express.json());

app.use(methodOverride("_method"));

//express.static: cấu hình để cho server hiểu đc những file tĩnh trên máy
//path.join(__dirname) trả về một đường dẫn tuyệt đối chỗ lưu file trên máy
app.use(express.static(path.join(__dirname, "public")));

//http logger
app.use(morgan("combined"));

//template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs", // đổi đôi file thánh .hbs thay vì handlebars
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
// do mỗi hệ điều hành sẽ thể hiện route khác nhau ( windown: \\, mac,linux: /) nên dùng __dirname, "...","..." để thay thế
app.set("views", path.join(__dirname, "resources", "views"));

//Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
