const result = document.querySelector(".result");

class Card {
  constructor(id, name, desc, price, image) {
    (this.id = id),
      (this.name = name),
      (this.desc = desc),
      (this.price = price),
      (this.image = image);
  }
  getCard() {
    return `
    <div class="relative w-full max-w-[250px] h-[300px] rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 bg-white dark:bg-gray-800 my-4">
      <img
        class="absolute inset-0 w-full h-full object-cover z-0"
        src="${this.image}"
        alt="${this.name}"
      />
      <div class="relative z-10 bg-black bg-opacity-50 p-4 h-full flex flex-col justify-between">
        <div class="flex-grow">
          <h5 class="text-lg font-bold text-gray-900 dark:text-white mb-1">${this.name}</h5>
          <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">$${this.price}</p>
        </div>
        <a
          href="product.html?id=${this.id}"
          class="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-auto"
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
  }
}

const getProductData = async () => {
  try {
    const { data } = await axios.get("/api/3-airtable");
    console.log("data", data);
    const inner_HTML_data = data
      .map((currentItem) => {
        const { id, price, desc, image, name } = currentItem;
        return new Card(id, name, desc, price, image).getCard();
      })
      .join("");

    result.innerHTML = inner_HTML_data;
  } catch (error) {
    result.innerText = error.message;
  }
};

getProductData();
