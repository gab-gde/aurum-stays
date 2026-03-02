import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("max-w-[1600px] mx-auto px-6 md:px-12", className)}>{children}</div>;
}
