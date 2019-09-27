const create = (req,res) => {
const db = req.app.get("db");
const { address, city, state, zipcode,yearbuilt,askingprice,description } = req.body    
db.create([address, city, state, zipcode,yearbuilt,askingprice,description]) .then(response => res.status(200).json(response[0]))
.catch(err => console.log('nope'));
}
const listings = (req,res) => {
const db = req.app.get("db");
db.listings().then(listings => {
    res.status(200).json(listings);
  });
};


module.exports = {
 create,
 listings   
};