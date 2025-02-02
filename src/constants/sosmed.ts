import { GITHUB_ACCOUNTS } from "./github";

type Sosmed = {
  username?: string;
  url: string;
};

export const GITHUB: Sosmed = {
  username: GITHUB_ACCOUNTS.username,
  url: `https://github.com/${GITHUB_ACCOUNTS.username}`,
};

export const LINKEDIN: Sosmed = { url: "#" };
export const INSTAGRAM: Sosmed = { url: "#" };
export const TIKTOK: Sosmed = { url: "#" };
