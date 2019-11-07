const axios = require("axios");
let chai = require("chai");
let chaiHttp = require("chai-http");
// let server = require("../server");
let should = chai.should();
chai.use(chaiHttp);

// describe("/api/locations", () => {
//   it("should return status 200", (done) => {
//     chai
//       .request(server)
//       .get("/api/locations")
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a("array");
//         res.body.length.should.be.eql(0);
//         done();
//       });
//   });
// });

// let responce;
// describe("response", () => {
//   beforeEach(() => {
//     responce = await axios.get("/api/locations");
//   });

describe("/api/locations", () => {
  it("should return status 200", async () => {
    const responce = await axios.get("/api/locations");
    console.log(responce);
    responce.should.have.status(200);
  });

  it("should return array of objects", async () => {
    const responce = await axios.get("/api/locations");
    responce.should.be.an("array");
    responce[0].should.be.an("object");
    responce[134].should.be.an("object");
  });

  it("should have property proper names", async () => {
    const responce = await axios.get("/api/locations");
    expect(responce).to.have.property("id");
    expect(responce).to.have.property("latitude");
    expect(responce).to.have.property("longitude");
    expect(responce).to.have.property("name");
    expect(responce).to.have.property("state");
    expect(responce).to.have.property("city");
    expect(responce).to.have.property("highway");
    expect(responce).to.have.property("locationType");
    expect(responce).to.have.property("truckServices");
    expect(responce).to.have.property("amenities");
    expect(responce).to.have.property("selectAmenities");
    expect(responce).to.have.property("restaurants");
    expect(responce).to.have.property("fuelPrices");
  });
});
