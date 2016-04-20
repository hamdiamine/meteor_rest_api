Meteor.publish("regions", function () {
  return Regions.find();
},{
  url: "regions",
  httpMethod: "get"}
);

Meteor.publish("region", function (id) {
  return Regions.findOne(id);
},{
  url: "region/:0",
  httpMethod: "get"}
);

Meteor.publish("regionbyville", function (vilId) {
  console.log(vilId);
  var ville = Villes.findOne(vilId);
  return Regions.findOne(ville.regid);
},{
  url: "regionbyville/:0",
  httpMethod: "get"}
);
