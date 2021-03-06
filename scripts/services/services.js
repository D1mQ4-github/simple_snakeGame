const postData = async(url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await res.json();
};

const getResource = async(url) => {
    const res = await axios.get(url);
    return await res.data;
}

export { postData };
export { getResource };