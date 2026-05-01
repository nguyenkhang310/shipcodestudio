import {
  Instagram,
  Mail,
  MapPin,
  Music2,
  Phone,
  type LucideIcon,
} from "lucide-react";

export const contactInfo = {
  phoneDisplay: "0869555625",
  phoneRaw: "0869555625",
  instagramHandle: "bngkhang",
  instagramUrl: "https://www.instagram.com/bngkhang/",
  tiktokHandle: "@shipcodestudio",
  tiktokUrl:
    "https://www.tiktok.com/@shipcodestudio?_r=1&_t=ZS-95q52puiFTI",
  email: "nguyenkhang03102006@gmail.com",
  office: "Hồ Chí Minh",
} as const;

export type ContactLink = {
  href?: string;
  icon: LucideIcon;
  external?: boolean;
  label: string;
  value: string;
};

export const contactLinks: ContactLink[] = [
  {
    icon: Phone,
    label: "SĐT / Zalo",
    value: contactInfo.phoneDisplay,
    href: `tel:${contactInfo.phoneRaw}`,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: `@${contactInfo.instagramHandle}`,
    href: contactInfo.instagramUrl,
    external: true,
  },
  {
    icon: Music2,
    label: "TikTok",
    value: contactInfo.tiktokHandle,
    href: contactInfo.tiktokUrl,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: MapPin,
    label: "Văn phòng",
    value: contactInfo.office,
  },
];

export const socialLinks = contactLinks.filter(
  (link) => link.label !== "Văn phòng",
);
