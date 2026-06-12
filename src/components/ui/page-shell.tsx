import { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export default function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <main className={`px-4 py-16 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl rounded-[36px] border border-[rgba(160,175,255,0.15)] bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] p-8 shadow-[0_28px_90px_rgba(8,0,14,0.38)] backdrop-blur sm:p-10 lg:p-12">
        {children}
      </div>
    </main>
  );
}
