const create = (req, res) => {
  const db = req.app.get("db");
  const {
    address,
    city,
    state,
    zipcode,
    yearbuilt,
    askingprice,
    description
  } = req.body;
  db.create([
    address,
    city,
    state,
    zipcode,
    yearbuilt,
    askingprice,
    description
  ])
    .then(response => res.status(200).json(response[0]))
    .catch(err => console.log("nope"));
  console.log(req.session.email, "10");
};
const listings = (req, res) => {
  const db = req.app.get("db");
  db.listings().then(listings => {
    res.status(200).json(listings);
  });
};

const listing = (req, res) => {
  const db = req.app.get("db");
  db.get_listing(req.params.id).then(listing => {
    res.status(200).json(listings);
  });
};
const getuser = function(req, res, next) {
  const { session } = req;
  if (!session.user) {
    session.user = { email: "" };
  }
  res.json(session.user);
  next();
};
const login = async (req, res) => {
  console.log(req.body.email, "1");
  console.log(req.body.password, "2");
  req.body;
  const db = req.app.get("db");
  const results = await db.login("cheryl@realtypath.com");
  console.log(results[0].pw, "3");
  console.log(req.body.password, "4");
  console.log(req.session.user, "8");

  if (
    results[0].email === req.body.email &&
    results[0].pw === req.body.password
  ) {
    req.session.user = {
      email: results[0].email,
      password: results[0].pw
    };
    res.status(200).json("cheryl@realtypath.com");
    console.log(req.session.user, "8");
  } else {
    res.status(403).json("Error: Wrong Email");
  }
};
const logout = (req, res) => {
  console.log("hey");
  req.session.destroy();
  res.sendStatus(200);
  console.log(req.session, "5");
};

module.exports = {
  create,
  listings,
  listing,
  getuser,
  login,
  logout
};
