const fetchPrevNext = async (urls) => {
  const response = await fetch(urls);
  const data = await response.json();
  return data;
};

export default fetchPrevNext;
