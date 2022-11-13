import { toPng } from "html-to-image";
import * as React from "react";

export type IRenderAsImageProps = {
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  alt?: string;
};

export default function RenderAsImage({
  children,
  width,
  height,
  alt,
}: IRenderAsImageProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [imgSrc, setImgSrc] = React.useState("");

  React.useEffect(() => {
    toPng(ref.current!)
      .then(function (dataUrl) {
        setImgSrc(dataUrl);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }, []);

  return (
    <>
      {imgSrc !== "" ? (
        <img src={imgSrc} height={height} width={width} alt={alt} />
      ) : (
        <div ref={ref}>{children}</div>
      )}
    </>
  );
}
