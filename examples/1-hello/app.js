const h1_div = document.querySelector("#here");

const getData = async () => {
  try {
    const { data } = await axios.get("/api/1-hello");
    h1_div.textContent = data;
  } catch (error) {
    h1_div.textContent = error.message;
  }
};

getData();
