// Toàn bộ nội dung thiệp được cấu hình tại đây.
// Đổi thông tin của bạn trong file này, không cần sửa component.

export const weddingData = {
  // Nhạc nền: đặt file mp3 vào public/music/ rồi sửa tên file tại đây.
  // Nhạc sẽ bắt đầu sau lần chạm/click đầu tiên của khách (do chính sách mobile).
  music: {
    enabled: true,
    src: "/music/wedding.mp3",
    volume: 0.45,
  },
  // Chỉ cần thêm ảnh vào public/images/ rồi khai báo đường dẫn tại đây.
  // Các component bên dưới sẽ tự lấy ảnh từ data này.
  photos: {
    // Thêm file ảnh vào public/images/ rồi chỉ sửa tên file tại đây.
    // Ví dụ: cover: "/images/cover.jpg"
    cover: "",
    saveTheDate1: "",
    saveTheDate2: "",
    groom: "",
    bride: "",
    timeline: "",
    // Năm ảnh hiển thị trong khu vực Khoảnh khắc.
    gallery: [
      "",
      "",
      "",
      "",
      "",
    ],
    // Chín ảnh bổ sung, phân bổ ở các phần khác nhau của thiệp.
    extraPhotos: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    // Ảnh đại diện hiển thị trên nút mở/đóng khung lời chúc (góc dưới màn hình).
    // Nên dùng ảnh vuông, cận mặt (giống avatar chat) để hiện rõ khi thu nhỏ.
    avatar: "",
  },
  couple: {
    groomName: "Quang Thiện",
    brideName: "Ngọc Hân",
    groomFullName: "Nguyễn Quang Thiện",
    brideFullName: "Nguyễn Ngọc Hân",
    groomBirth: "15/10/2004",
    brideBirth: "3/1/2006",
    hashtag: "#QuangThienNgocHan",
  },

  cover: {
    subheading: "We get married!",
    tagline: "We will become husband and wife in",
  },

  // ISO datetime dùng để tính đếm ngược
  weddingDateISO: "2026-10-17T10:30:00+07:00",
  weddingDateDisplay: "17.10.2026",
  weddingDayOfWeek: "THỨ BẢY",
  weddingTime: "10:30",
  lunarDate: "Nhằm ngày 8 tháng 9 năm Ất Tỵ",
  highlightDay: 17,

  families: {
    bride: {
      title: "Nhà gái",
      father: "Ông. Nguyễn Công Hanh",
      mother: "Bà. Nguyễn Thị Ngân",
      address: "TP. Hà Nội",
    },
    groom: {
      title: "Nhà trai",
      father: "Ông. Nguyễn Quang Hậu",
      mother: "Bà. Nguyễn Thị Lan",
      address: "TP. Hà Nội",
    },
  },

  invitationLine: "Thân mời đến dự lễ thành hôn của chúng mình",

  venues: {
    bride: {
      label: "Địa điểm nhà gái",
      name: "Tại tư gia nhà gái",
      address: "Vui lòng cập nhật địa chỉ nhà gái",
      mapQuery: "",
    },
    groom: {
      label: "Địa điểm nhà trai",
      name: "Tại tư gia nhà trai",
      address: "Số 1 Lương Yên, Bạch Đằng, HN",
      mapQuery: "Số 1 Lương Yên, Bạch Đằng, Hai Ba Trung, Ha Noi",
    },
  },

  people: {
    bride: {
      role: "Cô dâu",
      name: "Ngọc Hân",
      birth: "20/12/2001",
    },
    groom: {
      role: "Chú rể",
      name: "Quang Thiện",
      birth: "05/08/1995",
    },
  },

  timeline: [
    { time: "05:30", label: "Bước dâu", icon: "car" },
    { time: "10:30", label: "Đón khách", icon: "flower" },
    { time: "12:00", label: "Lễ thành hôn", icon: "ring" },
    { time: "13:00", label: "Lưu niệm", icon: "heart-hands" },
  ],

  rsvp: {
    heading: "Hãy xác nhận sự có mặt của bạn để chúng mình chuẩn bị đón tiếp một cách chu đáo nhất. Trân trọng!",
    guestCountOptions: ["1 người", "2 người", "3 người", "4 người trở lên"],
  },

  gift: {
    heading: "Hộp quà mừng",
    thankYou: "Thank you",
    accounts: [
      {
        owner: "Cô dâu",
        name: "Nguyễn Ngọc Hân",
        bank: "MB Bank",
        accountNumber: "1234567890",
        // Ảnh QR chuyển khoản: đặt file ảnh vào public/images/ rồi sửa đường dẫn tại đây.
        qrImage: "",
      },
      {
        owner: "Chú rể",
        name: "Nguyễn Quang Thiện",
        bank: "MB Bank",
        accountNumber: "0969152065",
        qrImage: "",
      },
    ],
  },

  wishes: [
    { name: "Linh", message: "✨ Đồng tâm đồng lòng, xây dựng tổ ấm thịnh vượng!" },
    { name: "Hà", message: "Chúc mừng hạnh phúc!" },
    { name: "Huy", message: "Chúc hai bạn trăm năm hạnh phúc!" },
    { name: "Chanh", message: "Chúc mừng hạnh phúc trăm năm!" },
    { name: "Chinh", message: "Chúc hai bạn trăm năm hạnh phúc!" },
  ],

  brandLine: "Thiệp cưới online",
};

export type WeddingData = typeof weddingData;
