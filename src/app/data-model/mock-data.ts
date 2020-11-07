import { ClassesGroup, Course } from './data-objects.type';

export const MOCK_COURSES: Course[] = [
  { id: 11, name: 'Anglais' },
  { id: 12, name: 'Espagnol' },
  { id: 13, name: 'Italien' },
  { id: 14, name: 'Latin' },
  { id: 15, name: 'Allemand' },
];

export const MOCK_CLASS_GROUP: ClassesGroup[] = [
  { id: 10,
    name: '6ieme1',
    maxPupils: 30,
    courseBucketList: [
      { nbPupils: 10,
        courseList: MOCK_COURSES
      }
    ]
  }
];
