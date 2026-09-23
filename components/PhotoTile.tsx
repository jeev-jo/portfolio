"use client";

import Image from "next/image";
import { useTilt } from "./useTilt";

export default function PhotoTile() {
  const tilt = useTilt<HTMLDivElement>(9);
  return (
    <div className="bento__photo tiltable rise d1" {...tilt}>
      <Image
        src="/ajay.jpg"
        alt="Portrait of Ajay Jeevan Jose"
        fill
        priority
        sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 420px"
        className="bento__photo-img"
      />
      <div className="glare" aria-hidden="true" />
      <div className="bento__photo-caption">
        <span className="mono tag tag--light">Ajay Jeevan Jose</span>
      </div>
    </div>
  );
}
