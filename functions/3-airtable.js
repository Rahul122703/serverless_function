require("dotenv").config();

const Airtable = require("airtable-node");
const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_API_TOKEN,
})
  .base(process.env.AIRTABLE_BASE_ID)
  .table("products");

exports.handler = async () => {
  try {
    const { records } = await airtable.list();
    const products = records.map((currentItem) => {
      const { id } = currentItem;
      const { name, price, desc, image } = currentItem.fields;
      return {
        id: id,
        name: name,
        price: price,
        desc: desc,
        image: image[0].url,
      };
    });
    console.log(products);
    return {
      statusCode: 200,
      body: JSON.stringify(products),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    console.log("Error fetching Airtable data:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
  }
};
