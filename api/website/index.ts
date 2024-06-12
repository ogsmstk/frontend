// 外部APIから情報を取得する実装
// TODO:環境変数に書き出す
export default async function getWebSiteIndex() {
    const response = await fetch("http://localhost:8080/stub/serviceList")
    return await response.json();
}
