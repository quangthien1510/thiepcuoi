import type { Metadata } from "next";

import WeddingPageContent from "@/components/wedding/WeddingPageContent";

import {
    INVITE_URL,
    PREVIEW_IMAGE,
    SITE_TITLE,
    SITE_DESCRIPTION,
    SITE_NAME,
    PREVIEW_IMAGE_ALT,
} from "@/lib/site-metadata";

export const metadata: Metadata = {
    title: SITE_TITLE,

    description: SITE_DESCRIPTION,

    alternates: {
        canonical: INVITE_URL,
    },

    openGraph: {
        title: SITE_TITLE,

        description: SITE_DESCRIPTION,

        url: INVITE_URL,

        siteName: SITE_NAME,

        locale: "vi_VN",

        type: "website",

        images: [
            {
                url: PREVIEW_IMAGE,
                width: 1200,
                height: 630,
                type: "image/png",
                alt: PREVIEW_IMAGE_ALT,
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        images: [PREVIEW_IMAGE],
    },
};

export default function InvitePage() {
    return <WeddingPageContent />;
}