import { Chapter, Course, UserProgress } from "@prisma/client";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";

import { CourseSidebar } from "./course-sidebar";

import { Book } from "lucide-react";

interface CourseMobileSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
};

export const CourseMobileSidebar = ({ 
  course,
  progressCount,
}: CourseMobileSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition mx-5 mb-5">
        <h1 className="rounded-[5px] bg-zinc-900  hover:opacity-75 font-medium transition duration-300 px-8 py-2 text-sm">Chapters</h1>
      </SheetTrigger>
      <SheetContent side="left" className="p-6 bg-zinc-900  border-none text-slate-200">
        <CourseSidebar
          course={course}
          progressCount={progressCount}
        />
      </SheetContent>
    </Sheet>
  )
}