// Redisへのアクセスを試してみたかった
export default async function insertRedisSample(count : number) {
    const json = 
    {count: count}
    
    await fetch("http://localhost:8080/spreadsheet/insert", {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(json)
    })
}