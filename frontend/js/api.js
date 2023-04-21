export async function getInfo(url) {
    let res = await axios.get(url)
    return res.data;
}