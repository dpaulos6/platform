import { Category, Course, Purchase } from '@prisma/client';
import { CourseCard } from '@/components/course-card';


type CourseWithProgressWithCategory = Course & {
    category: Category | null;
    progress: number | null;
    chapters: { id: string }[];
}

type PurchasedCourse = Purchase[]

interface CoursesPurchased {
    purchase: PurchasedCourse[];
}

interface CoursesListProps {
    items: CourseWithProgressWithCategory[];
    purchase: CoursesPurchased;
}

export const CoursesList = async ({
    items,
    purchase
}: CoursesListProps) => {
        
    return (
        <div>
            <div className='px-4 py-12 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4'>
                {items.map((item) => (
                    <CourseCard 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        imageUrl={item.imageUrl!}
                        chaptersLength={item.chapters.length}
                        progress={item.progress}
                        price={item.price!}
                        category={item?.category?.name!}
                        description={item.description!}
                        isPurchased={item.price}
                    />
                ))}
            </div>
            {items.length === 0 && (
                <div className='text-center text-sm text-muted-foreground mt-10'>
                    No courses found
                </div>
            )}
        </div>
    )
}