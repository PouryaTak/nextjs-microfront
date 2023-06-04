import Link from "next/link";

export default function Home() {
  return (
    <main className="grid place-items-center w-full h-screen flex-col p-24">
      <div className="grid gap-3">
        <h2>This is App router</h2>
        <Link href={"/host-page"} className="px-3 py-2 bg-amber-500 text-center font-bold text-slate-800 rounded-lg">Remote</Link>
      </div>
    </main>
  );
}
