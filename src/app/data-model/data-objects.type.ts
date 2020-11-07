/**
 * This ClassesGroup represents a list of pupils that are linked together the whole year.
 * They may be split into ClassesBucket to participate to different class courses.
 *
 * ClassesBucket are groups of pupils that will participate to the same courses together.
 * They represent a vertical split of the class.
 * PupilsInCourse is the horizontal split of the class and specialize a group
 */

export interface ClassesGroup {
  id?: number;
  name?: string;
  maxPupils: number; // Maxium pupils in this ClassesGroup = limit of the sum of pupils in each bucket
  courseBucketList: ClassesBucket[];
}

/**
 * Classes bucket
 */
export interface ClassesBucket {
  id?: number;
  nbPupils: number;  // number of pupils in this bucket = pupils attending the group of courses
  courseList: Course[];
}

/**
 * Courses can be referenced into
 */
export interface Course {
  id: number;
  name: string;
  enabled?: boolean;
}
