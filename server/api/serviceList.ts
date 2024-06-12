export default defineEventHandler(() => 
    [
        {id: 1, title: '犬', content: 'わんわん'},
        {id: 2, title: 'ひよこ', content: 'ぴよぴよ'},
        {id: 3, title: '猫', content: 'にゃあにゃあ'},
        {id: 4, title: '牛', content: 'もうもう'},
        {id: 5, title: '豚', content: 'ぶうぶう'},
        {id: 6, title: '羊', content: 'めーめー'},
    ]
);

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