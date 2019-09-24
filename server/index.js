require("dotenv").config();
const express = require("express");
const app = express();
const axios = require("axios");
const AWS = require("aws-sdk");
const fs = require("fs");
const fileType = require("file-type");
const bluebird = require("bluebird");
const multiparty = require("multiparty");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  });
  //
  AWS.config.setPromisesDependency(bluebird);
  //
  const s3 = new AWS.S3();
  //
  
  const uploadFile = (buffer, name, type) => {
    const params = {
      ACL: "public-read",
      Body: buffer,
      Bucket: process.env.S3_BUCKET,
      ContentType: type.mime,
      Key: `${name}.${type.ext}`
    };
    return s3.upload(params).promise();
  };
  app.use(express.static(`${__dirname}/../build`));
  app.use(express.json());
  const { SESSION_SECRET, KEY } = process.env;
 

PORT = 3131;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
