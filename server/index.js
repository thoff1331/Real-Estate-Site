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
const cc = require("./controllers/createController");
const massive = require("massive");
const session = require("express-session");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
const { CONNECTION_STRING, SESSION_SECRET, KEY } = process.env;
massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("Database Connected");
  })
  .catch(err => {
    console.log("Not connected");
  });
app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

app.post("/api/create", cc.create);
app.post("/auth/login", cc.login);
app.get("/auth/cookie", cc.getuser);
app.delete("/auth/logout", cc.logout);
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

app.post("/api/auth/create", cc.create);
app.get("/api/auth/listings", cc.listings);
app.get("/auth/cookie", cc.getuser);
PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
