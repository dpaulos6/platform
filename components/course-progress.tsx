import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface CourseProgressProps {
  value: number;
  variant?: "default" | "success",
  size?: "default" | "sm";
};

const colorByVariant = {
  default: "text-slate-200",
  success: "text-emerald-700",
}

const sizeByVariant = {
  default: "text-sm",
  sm: "text-xs",
}

export const CourseProgress = ({
  value,
  variant,
  size,
}: CourseProgressProps) => {
  return (
    <div>
      <Progress
        className="bg-slate-200 mb-2"
        value={value}
      />
        <p className={cn(
          "font-semibold  mb-2 text-slate-200",
          colorByVariant[variant || "default"],
          sizeByVariant[size || "default"],
        )}>
          {Math.round(value)}% Complete
        </p>
    </div>
  )
}