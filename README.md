# Thiệp cưới online — Next.js

Bản dựng lại bằng Next.js (App Router) + Tailwind CSS 4, dựa theo bố cục mẫu
"Thiệp Cưới 11 Pre" mà bạn gửi ảnh chụp màn hình (cover, save-the-date, lịch
cưới, địa điểm/bản đồ, timeline, RSVP, hộp quà mừng). Đây là code tự viết
mới (không sao chép mã nguồn của ZenLove), lấy cảm hứng về bố cục/tính năng.

## Chạy thử

```bash
npm install
npm run dev
```

Mở http://localhost:3000

## Build production

```bash
npm run build
npm run start
```

## Cấu trúc quan trọng

- `src/data/wedding.ts` — **toàn bộ nội dung** (tên cô dâu chú rể, ngày giờ,
  địa chỉ, gia đình hai bên, timeline, số tài khoản ngân hàng...). Sửa nội
  dung của bạn ở đây, không cần đụng vào component.
- `src/components/` — từng section của thiệp:
  - `CoverSection` — ảnh bìa + đếm ngược
  - `SaveTheDateSection` — ảnh + thông tin hai gia đình
  - `CalendarSection` — lịch tháng, tự động tính đúng theo `weddingDateISO`
  - `LocationSection` — địa chỉ + bản đồ Google Maps nhúng (không cần API key)
  - `PeopleTimelineSection` — ảnh chú rể + dòng thời gian buổi lễ
  - `RSVPSection` — form xác nhận tham dự (hiện tại là demo tĩnh, chưa lưu
    server — xem phần "Nối dữ liệu thật" bên dưới)
  - `GiftSection` — hộp quà mừng / số tài khoản
  - `BottomNav` — thanh điều hướng nổi phía dưới (gửi lời chúc, bắn tim, like)
  - `WishBubbles` — bong bóng lời chúc tự động chạy qua màn hình

## Thay ảnh cưới thật

Hiện tại tất cả ảnh đang là **khung placeholder** (do tôi không có ảnh cưới
thật của bạn và cũng không thể tải ảnh từ trang zenlove.me gốc). Cách thay:

1. Bỏ ảnh của bạn vào thư mục `public/images/`.
2. Trong từng component, thay:
   ```tsx
   <PhotoPlaceholder label="Ảnh cưới bìa" icon="👰🤵" className="..." />
   ```
   bằng:
   ```tsx
   <img src="/images/cover.jpg" alt="Ảnh cưới" className="..." />
   ```
   (giữ nguyên `className` để không vỡ layout, hoặc dùng `next/image` để
   tối ưu hơn nếu muốn.)

## Nối dữ liệu RSVP thật (tuỳ chọn)

Form RSVP hiện chỉ hiển thị lời cảm ơn trên trình duyệt, **chưa lưu vào đâu
cả** (đúng như bạn yêu cầu ban đầu — chỉ giao diện tĩnh). Nếu sau này muốn
lưu danh sách khách mời thật, có thể:
- Tạo Route Handler `src/app/api/rsvp/route.ts` nhận `POST` và ghi vào
  database (Supabase, Google Sheets API, Airtable...).
- Gọi `fetch('/api/rsvp', { method: 'POST', body: ... })` trong
  `handleSubmit` của `RSVPSection.tsx`.

## Đổi địa điểm / bản đồ

Sửa `venue.mapQuery` trong `src/data/wedding.ts` — bản đồ dùng Google Maps
embed miễn phí (không cần API key), tự lấy theo địa chỉ text.

## Ghi chú

- Toàn bộ giao diện responsive, tối ưu cho khung điện thoại (max-width 500px,
  giống bố cục "thiệp mobile" của bản gốc).
- Đã tôn trọng `prefers-reduced-motion` cho người dùng nhạy cảm với hiệu ứng.
- Font dùng: Playfair Display (tiêu đề), Great Vibes (chữ script), Be Vietnam
  Pro (nội dung, hỗ trợ tiếng Việt) — tải qua Google Fonts.
