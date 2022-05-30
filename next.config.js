/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SITE_URL: process.env.SITE_URL,
    SEND_FORM_URL: process.env.SEND_FORM_URL,
  },
};

module.exports = nextConfig;
