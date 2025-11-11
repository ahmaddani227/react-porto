import { GITHUB_ACCOUNTS } from "./github";

interface Sosmed {
  username?: string;
  url: string;
}

export const GITHUB: Sosmed = {
  username: GITHUB_ACCOUNTS.username,
  url: `https://github.com/${GITHUB_ACCOUNTS.username}`,
};

export const LINKEDIN: Sosmed = { url: "https://linkedin.com/in/ahmaddaani" };
export const INSTAGRAM: Sosmed = { url: "https://instagram.com/ahmaddaani_" };
export const TIKTOK: Sosmed = { url: "https://tiktok.com/@ahmaddaani_" };
