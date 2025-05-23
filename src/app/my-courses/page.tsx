import { Suspense } from "react";
import MyCourses from "@/views/my-course";

export default async function MyCoursesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyCourses />
    </Suspense>
  );
}
