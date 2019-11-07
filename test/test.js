const axios = require("axios");

describe("/api/locations", () => {
  it("should return status 200", async () => {
    const responce = await axios.get("/api/locations");
    console.log(responce);
    responce.should.have.status(200);
  });

  it("should return array of objects", async () => {
    const responce = await axios.get("/api/locations");
    responce.should.be.an("array");
  });
});
