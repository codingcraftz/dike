import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>dike</h1>
      <Link href={"/todo"}>일하러 가기</Link>
    </main>
  );
}
