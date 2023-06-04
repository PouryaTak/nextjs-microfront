import dynamic from "next/dynamic";
import "tailwindcss/tailwind.css";

const Loader = () => <div className="w-full bg-slate-100 text-center grid place-items-center h-44 text-4xl font-bold text-slate-300 animate-pulse">Loading...</div>

const Remote: any = dynamic(
  // @ts-ignore
  () => import("remoteApp/RemotePage").then((mod) => mod.RemotePage),
  {
    loading: () => <Loader/>,
    ssr: false,
  }
);
export function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <div className="w-full">
        <h1 className="text-white bg-amber-500 w-full text-center p-10 text-5xl font-bold">
          This is Host Page
        </h1>
        <Remote text={"From Host"} />
      </div>
    </main>
  );
}
export default Home;
