const fetchApi = async (urls) => {
  const response = await fetch(urls);
  const data = await response.json();

  const { results } = data;

  const getRes = results.map(async (result) => {
    const responses = await fetch(result.url);
    const datas = await responses.json();
    return datas;
  });

  const res = await Promise.all(getRes);
  return res;
};

export default fetchApi;
