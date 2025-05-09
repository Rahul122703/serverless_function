class ProductInfo {
  constructor(id, name, price, desc, image) {
    (this.id = id),
      (this.name = name),
      (this.price = price),
      (this.desc = desc),
      (this.image = image);
  }
  productInfoComponent() {
    return `
    <div class="md:w-1/2">
        <img src="${this.image}"
          alt="${this.name}"
          class="object-cover h-96 w-full md:h-full md:rounded-l-xl transition-transform duration-300 hover:scale-105" />
      </div>

      <div class="p-6 md:w-1/2 flex flex-col justify-center">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">${this.name}</h1>
        <p class="text-xl text-blue-600 font-semibold mb-4">$${this.price}</p>
        <p class="text-gray-600 text-base mb-6 leading-relaxed">
          ${this.desc}
        </p>
    </div>`;
  }
}

const productDiv = document.querySelector(".productdata");

const displayProductData = async () => {
  const id = window.location.search;
  try {
    const { data } = await axios.get(`/api/3-product${id}`);
    console.log("data fetched", data);
    const {
      name,
      price,
      desc,
      image: [{ url }],
    } = data.fields;
    productDiv.innerHTML = new ProductInfo(
      id,
      name,
      price,
      desc,
      url
    ).productInfoComponent();
  } catch (error) {
    productDiv.innerHTML = `<strong>${error}</strong>`;
  }
};
displayProductData();
