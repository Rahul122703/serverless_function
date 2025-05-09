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

    console.log("this is the data", data);

    setTimeout(() => {
      result.innerHTML = "";
      result_innerHTML = data
        .map((currentItem) => {
          const { id, image, name, price } = currentItem;
          return `
         <div class="relative w-64 h-96 rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 bg-white dark:bg-gray-800 my-4">
          <img
            class="absolute inset-0 w-full h-full object-cover z-0"
            src="${image.url}"
            alt="${name}"
          />
          <div class="relative z-10 bg-white/80 dark:bg-gray-800/70 p-4 h-full flex flex-col justify-end">
            <h5 class="text-lg font-bold text-gray-900 dark:text-white mb-1">${name}</h5>
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">$${price}</p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View product
              <svg
                class="rtl:rotate-180 w-3 h-3 ms-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        `;
        })
        .join("");
      result.innerHTML = result_innerHTML;
      console.log("here 1");
    }, 2000);
  } catch (error) {
    result.innerHTML = `<p class="text-red-500 font-semibold">Error: ${error.message}</p>`;
    console.log(error);
  }
};

getData();
