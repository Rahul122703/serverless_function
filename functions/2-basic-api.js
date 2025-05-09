exports.handler = async (event, context) => {
  const items = [
    {
      id: "recmg2a1ctaEJNZhu",
      name: "utopia sofa",
      image: {
        url: "https://img.freepik.com/free-psd/view-sofa-interior-design-decor_23-2151772696.jpg?semt=ais_hybrid&w=740",
      },
      price: 39.95,
    },
    {
      id: "recvKMNR3YFw0bEt3",
      name: "entertainment center",
      image: {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjz4fom1CIGZCA_Gz-h1pQTWH6yqEPAUN87ov5NXiFvwP41E1Gv_-rCDPq4V9yuWfDi_s&usqp=CAU",
      },
      price: 29.98,
    },
    {
      id: "recxaXFy5IW539sgM",
      name: "albany sectional",
      image: {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDnGuZat_AHV0LS-spm346mmhE14pCqoAYWw&s",
      },
      price: 10.99,
    },
    {
      id: "recyqtRglGNGtO4Q5",
      name: "leather sofa",
      image: {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbgJ4np0ZyzKCabwDVoWUR9QLjan28AN7GfQ&s",
      },
      price: 9.99,
    },
  ];

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(items),
  };
};
