import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
    const user1 = await prisma.user.create({
        data: {
          name: 'Esteban',
          email: 'emailjuan123@gmail.com',
          password: 'password1',
        },
      });

    const user2 = await prisma.user.create({
        data: {
          name: 'Pedro Pablo',
          email: 'LeonJaramillo123@gmail.com',
          password: 'passwordCapo',
        },
      });

    const course1 = await prisma.course.create({
        data: {
          name: 'Course A',
          description: 'This course is of POO',
        },
      });

    const course2 = await prisma.course.create({
        data: {
            name: 'Course b',
            description: 'This course is of Database',
        },
      });

    const lesson1 = await prisma.lesson.create({
        data: {
          courseId: course1.id,
          title: 'CRUD',
          content: 'DataBase',
        },
      });

    const lesson2 = await prisma.lesson.create({
        data: {
            courseId: course2.id,
            title: 'PIENSA',
            content: 'Avance',
        },
      });

      console.log('Seed data inserted successfully');

    }

seed()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
