const mocha = require("mocha");
// mocha.setup({ timeout: 10000 });
const axios = require("axios");
const chai = require("chai");
const chaiHttp = require("chai-http");
// let server = require("../server");
const should = chai.should();
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

// let response;
// describe("response", () => {
//   beforeEach(() => {
//     response = await axios.get("/api/locations");
//   });

describe("/api/locations", () => {
  it("should return status 200", async () => {
    const response = await axios.get(
      "https://developers.google.com/maps/documentation/javascript/adding-a-google-map?hl=ja"
    );
    console.log(response);
    response.should.have.status(200);
  });

  it("should return array of objects", async () => {
    const response = await axios.get(
      "https://developers.google.com/maps/documentation/javascript/adding-a-google-map?hl=ja"
    );
    response.should.be.an("array");
    response[0].should.be.an("object");
    response[134].should.be.an("object");
  });

  it("should have property proper names", async () => {
    const response = await axios.get(
      "https://developers.google.com/maps/documentation/javascript/adding-a-google-map?hl=ja"
    );
    expect(response).to.have.property("id");
    expect(response).to.have.property("latitude");
    expect(response).to.have.property("longitude");
    expect(response).to.have.property("name");
    expect(response).to.have.property("state");
    expect(response).to.have.property("city");
    expect(response).to.have.property("highway");
    expect(response).to.have.property("locationType");
    expect(response).to.have.property("truckServices");
    expect(response).to.have.property("amenities");
    expect(response).to.have.property("selectAmenities");
    expect(response).to.have.property("restaurants");
    expect(response).to.have.property("fuelPrices");
  });
});
