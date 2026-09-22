# Quản lý ảnh thiệp cưới

Tất cả ảnh của thiệp được quản lý tập trung tại `src/data/wedding.ts`, không cần sửa từng component.

## Cách thêm ảnh

1. Đặt ảnh vào thư mục `public/images/`.
2. Mở `src/data/wedding.ts`.
3. Sửa các đường dẫn trong `photos`:

```ts
photos: {
  cover: "/images/cover.jpg",
  saveTheDate1: "/images/photo-1.jpg",
  saveTheDate2: "/images/photo-2.jpg",
  groom: "/images/groom.jpg",
  bride: "/images/bride.jpg",
  timeline: "/images/timeline.jpg",
},
```

Sau đó không cần sửa `CoverSection`, `SaveTheDateSection`, `PeopleTimelineSection` hay `LocationSection`.
