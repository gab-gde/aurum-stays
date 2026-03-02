import { cn } from "@/lib/utils";

export function Card({ children, className, hover = true, ...props }: {
  children: React.ReactNode; className?: string; hover?: boolean;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("luxury-card p-6", hover && "hover:border-[#D4A843]/30", className)} {...props}>
      {children}
    </div>
  );
}
