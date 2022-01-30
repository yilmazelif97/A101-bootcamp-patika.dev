const axios = require("axios");

exports.fetchCategories = async () => {
  try {
    const response = await axios.get(
      "https://api.trendyol.com/sapigw/product-categories"
    );

    console.log(response.data);
    return response.data;
  } catch {
    return {
      status: false,
      message: "Böyle bir data bulunmamakta",
    };
  }
};



exports.fetchSingleCategory = async (id) => {
  try {

    console.log(`category servisindeki fetchsingledasın id: ${id}`);

    const response = await axios.get(
      `https://api.trendyol.com/sapigw/product-categories/${id}/attributes`
    );

    //console.log(response.data);


    return response.data;
  } 
  catch {
    return {
      status: false,
      message: "Böyle bir data bulunmamakta",
    };
  }
};



// exports.fetchSingleCategorybyıdandname = async (id, name) => {
//   try {
//     const response = await axios.get(
//       `https://api.trendyol.com/sapigw/product-categories/${id}/${name}/attributes`
//     );

//     //console.log(req.params);
//     res.send(response);
//     // return response.data
//   } catch {
//     return {
//       status: false,
//       message: "Böyle bir data bulunmamakta",
//     };
//   }
// };
