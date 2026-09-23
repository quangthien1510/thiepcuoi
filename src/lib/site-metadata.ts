const rawSiteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://wedding-thienhan.vercel.app";

export const SITE_URL = rawSiteUrl.replace(/\/$/, "");

export const INVITE_URL =
    `${SITE_URL}/invite`;

export const PREVIEW_IMAGE =
    `${SITE_URL}/images/image.png`;

export const SITE_TITLE =
    "Ngọc Hân & Quang Thiện - Thiệp cưới online";

export const SITE_DESCRIPTION =
    "Thân mời bạn đến chung vui cùng Ngọc Hân & Quang Thiện trong hai ngày 17 & 18.10.2026";

export const SITE_NAME =
    "Thiệp cưới Ngọc Hân & Quang Thiện";

export const PREVIEW_IMAGE_ALT =
    "Ảnh cưới Ngọc Hân và Quang Thiện";