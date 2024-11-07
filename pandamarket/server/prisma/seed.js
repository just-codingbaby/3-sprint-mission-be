const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.article.create({
    data : {
      title: "seeding init",
      content: "seeding init data입니다",
      comments : {
        create : [
          {content : "첫 번째 댓글"},
          {content : "두 번째 댓글"},
        ],
      },
    }
  });
}

main()
  .then(async() => {
    await prisma.$disconnect();
  })
  .catch(async(e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
