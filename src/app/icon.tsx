import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32
};

export const contentType = "image/ico";

const Icon = () => {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 14,
          background: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          color: "Orange"
        }}
      >
        CINE
      </div>
    ),
    { ...size }
  );
};

export default Icon;
