export default defineEventHandler(async (event) => {
    return [
        {
        title: 'タイトル',
        message: 'あいうえお'
        }
    ]
});

// export default defineEventHandler(async (event) => {
//   const prisma = new PrismaClient();
//   if (event.node.req.method === 'GET') {
    // const tasks = await prisma.task.findMany();
// 
    // return tasks;
//   }
//   if (event.node.req.method === 'POST') {
    // const body = await readBody(event);
    // return { body };
//   }
// });