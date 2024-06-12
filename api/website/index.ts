// 外部APIから情報を取得する実装
// TODO:環境変数に書き出す
export default async function getWebSiteIndex() {
    const params = {stubType : "1"};
    const query = new URLSearchParams(params);
    
    const response = await fetch(`http://localhost:8080/stub?${query}`, {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        }
    })
    return await response.json();
}
