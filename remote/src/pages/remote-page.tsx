import React from "react";
import "tailwindcss/tailwind.css";

export function RemotePage({text = 'Default'}:any) {
  return (
    <div className="w-full bg-slate-800 text-center p-10 h-44">
      <h1 className="text-5xl text-amber-400">
        Hello from <strong>Remote</strong> Page in App router Ts!
      </h1>
      <h2 className="text-3xl text-slate-500 mt-3">
        Prop: {text}
      </h2>
    </div>
  );
}

export default RemotePage
