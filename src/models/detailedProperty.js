import mongoose from "mongoose";
const detailedPropertySchema = mongoose.Schema({
  image1: {
    type: String,
    required: true,
  },
  image2: {
    type: String,
    required: true,
  },
  image3: {
    type: String,
    required: true,
  },
  image4: {
    type: String,
    required: true,
  },
  garage: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  propertyID: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  seller: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  mainImage: {
    type: String,
    required: true,
  },
  sellerImage: {
    type: String,
    required: true,
  },
});

const DetailedProperty = mongoose.model(
  "DetailedProperty",
  detailedPropertySchema
);

export default DetailedProperty;
