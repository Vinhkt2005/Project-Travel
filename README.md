# Travel Booking Website

Dự án website đặt tour du lịch với trang quản trị admin đầy đủ tính năng.

## Công Nghệ Sử Dụng

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database (Mongoose ODM)
- **JWT** - Authentication
- **Bcrypt** - Password hashing

### Frontend
- **Pug** - Template engine
- **Vanilla JavaScript** - Client-side logic
- **CSS3** - Styling (2,577 lines client + 1,599 lines admin)

### Third-party Services
- **Cloudinary** - Image storage
- **Nodemailer** - Email service
- **ZaloPay** - Payment gateway
- **VNPay** - Payment gateway

## Cài Đặt

### 1. Clone Repository

```bash
git clone <repository-url>
cd Project-Travel
```

### 2. Cài Đặt Dependencies

```bash
npm install
```

### 3. Cấu Hình Environment

Tạo file `.env` từ `.env.example`:

```bash
cp .env.example .env
```

Điền các thông tin cần thiết trong file `.env`:

```env
# Database
DATABASE=mongodb+srv://username:password@cluster.mongodb.net/database-name

# JWT
JWT_SECRET=your-secret-key-here

# Email (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Cloudinary
CLOUDINARY_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Website
WEBSITE_DOMAIN=http://localhost:4000

# Payment Gateways (Sandbox credentials provided)
ZALOPAY_APPID=2554
ZALOPAY_KEY1=sdngKKJmqEMzvh5QQcdD2A9XBSKUNaYn
ZALOPAY_KEY2=trMrHtvjo6myautxDUiAcYsVtaeQ8nhf
ZALOPAY_DOMAIN=https://sb-openapi.zalopay.vn

VNPAY_TMNCODE=O42E0RIO
VNPAY_SECRET_KEY=6QRLBVLZPDQKOIY1J4PO05W6ZROH49A3
VNPAY_URL=https://sandbox.vnpayment.vn/paymentv2/vpcpay.html
```

### 4. Khởi Động Server

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Server sẽ chạy tại: `http://localhost:4000`

## Cấu Trúc Dự Án

```
Project-Travel/
├── config/              # Cấu hình database, variables
├── controllers/         # Controllers (admin + client)
│   ├── admin/          # 10 admin controllers
│   └── client/         # 7 client controllers
├── helpers/            # Helper functions
├── middlewares/        # Middleware (auth, settings)
├── models/             # Mongoose models (9 models)
├── public/             # Static files
│   ├── admin/          # Admin assets
│   │   ├── css/       # Admin CSS (1,599 lines)
│   │   ├── js/        # Admin JavaScript
│   │   └── images/    # Admin images
│   └── assets/         # Client assets
│       ├── css/       # Client CSS (2,577 lines)
│       ├── js/        # Client JavaScript
│       └── images/    # Client images
├── routes/             # Route definitions
│   ├── admin/         # 11 admin routes
│   └── client/        # 8 client routes
├── validates/          # Joi validation schemas
├── views/              # Pug templates
│   ├── admin/         # Admin pages
│   └── client/        # Client pages
├── .env.example        # Environment template
├── .gitignore         # Git ignore rules
├── index.js           # Entry point
└── package.json       # Dependencies
```

## Tính Năng

### Client (Khách Hàng)

- ✅ Trang chủ với slider và tours nổi bật
- ✅ Danh sách tours theo danh mục
- ✅ Chi tiết tour với gallery ảnh
- ✅ Tìm kiếm và lọc tours
- ✅ Giỏ hàng (LocalStorage)
- ✅ Đặt tour với nhiều phương thức thanh toán
- ✅ Tích hợp ZaloPay và VNPay
- ✅ Responsive design (mobile, tablet, desktop)

### Admin (Quản Trị)

- ✅ Dashboard với thống kê
- ✅ Quản lý tours (CRUD)
- ✅ Quản lý danh mục
- ✅ Quản lý đơn hàng
- ✅ Quản lý người dùng
- ✅ Quản lý liên hệ
- ✅ Cài đặt website
- ✅ Upload ảnh lên Cloudinary
- ✅ Phân quyền theo role
- ✅ Authentication với JWT

## API Endpoints

### Client Routes

- `GET /` - Trang chủ
- `GET /tour/detail/:slug` - Chi tiết tour
- `GET /category/:slug` - Danh sách tour theo category
- `GET /search` - Tìm kiếm tours
- `GET /cart` - Giỏ hàng
- `POST /cart/detail` - Lấy chi tiết giỏ hàng
- `POST /order/create` - Tạo đơn hàng
- `GET /order/success` - Đặt hàng thành công

### Admin Routes

- `POST /admin/account/login` - Đăng nhập
- `GET /admin/dashboard` - Dashboard
- `GET /admin/tour` - Danh sách tours
- `POST /admin/tour/create` - Tạo tour mới
- `PATCH /admin/tour/edit/:id` - Cập nhật tour
- `DELETE /admin/tour/delete/:id` - Xóa tour
- ... và nhiều routes khác

## Database Models

1. **Tour** - Thông tin tours
2. **Category** - Danh mục tours
3. **Order** - Đơn hàng
4. **AccountAdmin** - Tài khoản admin
5. **Role** - Vai trò/quyền hạn
6. **City** - Thành phố
7. **Contact** - Liên hệ
8. **SettingWebsiteInfo** - Cài đặt website
9. **ForgotPassword** - Quên mật khẩu

## Bảo Mật

- ✅ JWT authentication
- ✅ Password hashing với bcrypt
- ✅ Environment variables cho sensitive data
- ✅ Role-based access control
- ✅ Input validation với Joi

## Testing

Sau khi cài đặt, test các chức năng sau:

1. **Client**
   - Truy cập trang chủ
   - Xem danh sách tours
   - Thêm tour vào giỏ hàng
   - Đặt tour

2. **Admin**
   - Đăng nhập admin tại `/admin/account/login`
   - Tạo/sửa/xóa tours
   - Xem đơn hàng
   - Upload ảnh

## Troubleshooting

### Lỗi kết nối database
```
Kết nối DB thất bại!
```
**Giải pháp**: Kiểm tra lại `DATABASE` trong file `.env`

### Lỗi upload ảnh
**Giải pháp**: Kiểm tra Cloudinary credentials trong `.env`

### Lỗi thanh toán
**Giải pháp**: Đảm bảo `WEBSITE_DOMAIN` được cấu hình đúng

## License

ISC

## Liên Hệ

Để được hỗ trợ, vui lòng liên hệ qua email hoặc tạo issue trên repository.
