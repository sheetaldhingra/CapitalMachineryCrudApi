const Product = require("../models/warpp");
const connectDB = require("../db/connect");
const ProductJson = require("../products.json");

const getAllWarppProducts = async (req, res) => {
  console.log(req.query)
  const { title, sort, select, isShow, ShortDescription } = req.query;
  sort ? (sort = sort.replaceAll(",", " ")) : "";
  const queryObject = {};
  title ? (queryObject.title = { $regex: title, $options: "i" }) : "";
  isShow === '1' ? (queryObject.IsShow = true) : "";
  console.log(queryObject)
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  let skip = (page - 1) * limit;
  const myData = title || isShow ? await Product.find(queryObject) : await Product.find(queryObject).skip(skip).limit(limit);
  const total = await Product.countDocuments(queryObject);
  // const myData = await Product.find(queryObject);
  res.status(200).json({ myData, nbHits: total });
};
const getAllWarppProductsTesting = async (req, res) => {
  const myData =
    sort != ""
      ? await Product.find(req.query).sort(sort)
      : await Product.find(req.query).sort(sort).select("title");
  res.status(200).json({ myData });
};
const saveWarppProducts = async (req, res) => {
  // console.log(ProductJson);
  //  console.log(req.body);
  //const {ProductsJson} = req.body;
  // ProductJson = req.body;
  //console.log(products);
  // console.log(ProductsJson);
  try {
    await connectDB();
    await Product.create(req.body);
    res.status(201).json({ status: 201, info });
  } catch (error) {
    res.status(201).json({ status: 401 });
  }
};
const updateWarppProduct = async (req, res) => {
  try {
    await connectDB();
    // await Product.create(req.body);
    await Product.updateOne(
      { _id: req.body.id },
      // {
      //   $set: {
      //     title: req.body.title,
      //     image: req.body.image,
      //     ShortDescription: req.body.ShortDescription,
      //     LongDescription: req.body.LongDescription,
      //     IsShow: req.body.IsShow,
      //     Active: req.body.Active,
      //   },
      // }
      {
        $set: {
          title: req.body.title,
          ShortDescription: req.body.ShortDescription,
          LongDescription: req.body.LongDescription,
          Specification1: req.body.Specification1,
          Specification2: req.body.Specification2,
          Specification3: req.body.Specification3,
          Specification4: req.body.Specification4,
          Specification5: req.body.Specification5,
          Value1: req.body.Value1,
          Value2: req.body.Value2,
          Value3: req.body.Value3,
          Value4: req.body.Value4,
          Value5: req.body.Value5,
          IsShow: req.body.IsShow,
          Active: req.body.Active,
        },
      }
    );
    res.status(201).json({ status: 201, info });
  } catch (error) {
    res.status(201).json({ status: 401 });
  }
};
const deactivateWarppProduct = async (req, res) =>{
    try {
        await connectDB();
        // await Product.create(req.body);
        await Product.updateOne(
          { _id: req.body.id },
          {
            $set: {
              Active: false,
            },
          }
        );
        res.status(201).json({ status: 201, info });
      } catch (error) {
        res.status(201).json({ status: 401 });
      }
}
const activateWarppProduct = async (req, res) =>{
    try {
        await connectDB();
        // await Product.create(req.body);
        await Product.updateOne(
          { _id: req.body.id },
          {
            $set: {
              Active: true,
            },
          }
        );
        res.status(201).json({ status: 201, info });
      } catch (error) {
        res.status(201).json({ status: 401 });
      }
}
module.exports = {
  getAllWarppProducts,
  getAllWarppProductsTesting,
  saveWarppProducts,
  updateWarppProduct,
  deactivateWarppProduct,
  activateWarppProduct
};

//yCnwPQ0hTR7hioml
