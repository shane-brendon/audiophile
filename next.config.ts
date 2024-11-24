import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `$primary: #D87D4A; $dark:#101010; $grey:#F1F1F1; $lightGrey:#FAFAFA; $lightPrimary:#fbaf85; $white:#FFFFFF; $black:#000000;`,
  },
};

export default nextConfig;
