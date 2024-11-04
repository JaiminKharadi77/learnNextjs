import Link from "next/link";

export default function Home() {
  return (
    <div className="p-20 flex flex-col justify-center items-center">
      <div>
        <h1>Hello World</h1>
      </div>
      <Link href={"/about"}>About</Link>
    </div>
  );
}
