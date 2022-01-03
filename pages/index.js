import React from "react";
import Link from "next/link";
import Image from "next/image";
import Coffee from "../public/coffee.png";

export default function Home() {
  return (
    <div>
      <Link href="/chanchitos">Ir a chanchitos</Link>
      <p>lol</p>
      {/* <Image src="/coffee.png" layout="fill" /> */}
      <Image src={Coffee} width={400} height={400} />
    </div>
  );
}
