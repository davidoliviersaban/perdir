import { ClassesGroup, Course } from './data-objects.type';

export const MOCK_COURSES: Course[] = [
  { id: 11, name: 'Anglais',  shortName: 'ang' },
  { id: 12, name: 'Espagnol', shortName: 'esp' },
  { id: 13, name: 'Italien',  shortName: 'ita' },
  { id: 14, name: 'Latin',    shortName: 'lat' },
  { id: 15, name: 'Allemand', shortName: 'all' },
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
