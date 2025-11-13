import { GITHUB_ACCOUNTS } from "./github";

interface Sosmed {
  username?: string;
  url: string;
}

export const GITHUB: Sosmed = {
  username: GITHUB_ACCOUNTS.username,
  url: `https://github.com/${GITHUB_ACCOUNTS.username}`,
};

export const LINKEDIN: Sosmed = { url: "https://linkedin.com/in/ahmadddani" };
export const EMAIL: Sosmed = { url: "mailto:aahmddnii@gmail.com" };
