const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser');
require('dotenv').config();
const databaseConfig = require("./config/database.config");
const adminRoutes = require("./routes/admin/index.route");
const clientRoutes = require("./routes/client/index.route");
const variableConfig = require("./config/variable.config");

const app = express()
const port = 4000

// Kết nối CSDL
databaseConfig.connect();

// Thiết lập thư mục chứa code giao diện
app.set('views', path.join(__dirname, "views"));
// Thiết lập template engine
app.set('view engine', 'pug');

// Thiết lập thư mục chứa file tĩnh
app.use(express.static(path.join(__dirname, "public")));

// Tạo biến toàn cục trong file PUG
app.locals.pathAdmin = variableConfig.pathAdmin;

// Tạo biến toàn cục trong các file backend
global.pathAdmin = variableConfig.pathAdmin;

// Cho phép gửi dữ liệu lên dạng json
app.use(express.json());

// Lấy được cookie
app.use(cookieParser());

app.use(`/${variableConfig.pathAdmin}`, adminRoutes);
app.use("/", clientRoutes);

app.listen(port, () => {
  console.log(`Website đang chạy trên cổng ${port}`)
})