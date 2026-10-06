// Toàn bộ nội dung thiệp được cấu hình tại đây.
// Đổi thông tin của bạn trong file này, không cần sửa component.

export const weddingData = {
  // Nhạc nền: đặt file mp3 vào public/music/ rồi sửa tên file tại đây.
  // Nhạc sẽ bắt đầu sau lần chạm/click đầu tiên của khách (do chính sách mobile).
  music: {
    enabled: true,
    src: "/music/Xứng Đôi Cưới Thôi - Lê Thiện Hiếu (Bài Hát Cực Cute Nhất 2019) - MARTSEN (youtube).opus",
    volume: 0.45,
  },
  // Chỉ cần thêm ảnh vào public/images/ rồi khai báo đường dẫn tại đây.
  // Các component bên dưới sẽ tự lấy ảnh từ data này.
  photos: {
    // Thêm file ảnh vào public/images/ rồi chỉ sửa tên file tại đây.
    // Ví dụ: cover: "/images/cover.jpg"
    cover: "/images/CND01734.webp",
    saveTheDate1: "/images/CND01230.webp",
    saveTheDate2: "/images/CND01217.webp",
    groom: "/images/CND01034.webp",
    bride: "/images/CND01820.webp",
    timeline: "/images/CND01667.webp",
    // Đúng năm ảnh hiển thị trong khu vực Khoảnh khắc.
    gallery: [
      "/images/CND01927.webp",
      "/images/CND02056.webp",
      "/images/CND02090_2.webp",
      "/images/CND02041.webp",
      "/images/CND02108.webp",
    ],
    // Đúng năm ảnh hiển thị trong khu vực sau timeline.
    extraPhotos: [
      "/images/CND01833.webp",
      "/images/CND01131.webp",
      "/images/CND01781.webp",
      "/images/CND01185.webp",
      "/images/CND01045.webp",
      "/images/CND01045.webp"
    ],
    // Ảnh đại diện hiển thị trên nút mở/đóng khung lời chúc (góc dưới màn hình).
    // Nên dùng ảnh vuông, cận mặt (giống avatar chat) để hiện rõ khi thu nhỏ.
    avatar: "/images/CND01833.webp",
  },
  couple: {
    groomName: "Quang Thiện",
    brideName: "Ngọc Hân",
    groomFullName: "Nguyễn Quang Thiện",
    brideFullName: "Nguyễn Ngọc Hân",
    groomBirth: "15/10/2004",
    brideBirth: "3/1/2006",
    hashtag: "#NgocHanQuangThien",
  },

  cover: {
    subheading: "We get married!",
    tagline: "We will become husband and wife in",
  },

  // ISO datetime dùng để tính đếm ngược
  weddingDateISO: "2026-10-17T10:30:00+07:00",
  weddingDateDisplay: "17 & 18.10.2026",
  weddingDayOfWeek: "THỨ BẢY & CHỦ NHẬT",
  lunarDate: "Tức ngày 8 và 9 tháng 9 năm Bính Ngọ",
  highlightDays: [17, 18],

  families: {
    bride: {
      title: "Nhà gái",
      father: "Ông Nguyễn Công Hanh",
      mother: "Bà Nguyễn Thị Ngân",
      address: "Xuân Dương - Đa Phúc - Hà Nội",
    },
    groom: {
      title: "Nhà trai",
      father: "Ông Nguyễn Quang Hậu",
      mother: "Bà Nguyễn Thị Lan",
      address: "Xuân Dương - Đa Phúc - Hà Nội",
    },
  },

  invitationLine: "Trân trọng kính mời bạn đến dự lễ thành hôn của chúng mình.",
  invitationNote:
    "Hai ngày chung vui, hai dấu mốc yêu thương và một hành trình trọn đời bên nhau.",

  venues: {
    bride: {
      label: "Địa điểm nhà gái",
      name: "Tại tư gia nhà gái",
      // Thêm ảnh sơ đồ nhẹ vào public/images/ rồi điền đường dẫn tại đây.
      mapImage: "/images/nhagai.webp",
      // address: "https://maps.app.goo.gl/aHUrv8d42rwUUUmS6?g_st=ifm",
      mapUrl: "https://maps.app.goo.gl/aHUrv8d42rwUUUmS6?g_st=ifm",
      mapQuery: "21.2062819,105.8814012",
    },
    groom: {
      label: "Địa điểm nhà trai",
      name: "Tại tư gia nhà trai",
      mapImage: "/images/nhatrai.webp",
      // address: "21.2094410, 105.8837060",
      mapUrl: "https://maps.app.goo.gl/VZaq5jJN8WPr7pHu8?g_st=ic",
      mapQuery: "21.2094410,105.8837060",
    },
  },

  people: {
    bride: {
      role: "Cô dâu",
      name: "Ngọc Hân",
      birth: "3/1/2006",
    },
    groom: {
      role: "Chú rể",
      name: "Quang Thiện",
      birth: "15/10/2004",
    },
  },

  timeline: [
    { time: "10:30", label: "Rước dâu", icon: "car" },
    { time: "11:30", label: "Đón khách", icon: "flower" },
    { time: "12:00", label: "Lễ thành hôn", icon: "ring" },
    { time: "12:30", label: "Chụp ảnh lưu niệm", icon: "heart-hands" },
  ],

  rsvp: {
    heading: "Hãy xác nhận sự có mặt của bạn để chúng mình chuẩn bị đón tiếp một cách chu đáo nhất. Trân trọng!",
    guestCountOptions: ["1 người", "2 người", "3 người", "4 người trở lên"],
  },

  gift: {
    heading: "Hộp quà mừng",
    thankYou: "Thank you",
    thankYouNote:
      "Cảm ơn bạn đã đến chung vui và gửi những lời chúc yêu thương đến chúng mình.",
    accounts: [
      {
        owner: "Cô dâu",
        name: "NGUYEN NGOC HAN",
        bank: "MB Bank",
        accountNumber: "585858585631",
        // Ảnh QR chuyển khoản: đặt file ảnh vào public/images/ rồi sửa đường dẫn tại đây.
        qrImage: "/images/QRcaodau-removebg-preview.webp",
      },
      {
        owner: "Chú rể",
        name: "NGUYEN QUANG THIEN",
        bank: "MB Bank",
        accountNumber: "0969152065",
        qrImage: "/images/QRchude.webp",
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
