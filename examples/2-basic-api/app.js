const result = document.querySelector(".result");

const loader = `
      <div 
        class="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin mx-auto">
      </div>
    `;

const getData = async () => {
  result.innerHTML = loader;
  try {
    const { data } = await axios.get("/api/2-basic-api");
    setTimeout(() => {
      result.innerHTML = "";
      result.textContent = JSON.stringify(data, null, 2);
    }, 2000);
  } catch (error) {
    result.innerHTML = `<p class="text-red-500 font-semibold">Error: ${error.message}</p>`;
  }
};

getData();
