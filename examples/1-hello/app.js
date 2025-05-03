const h1_div = document.querySelector("#here");

const getData = async () => {
  const { data } = await axios.get(
    "http://localhost:8888/.netlify/functions/1-hello"
  );
  h1_div.textContent = data;
};
getData();
