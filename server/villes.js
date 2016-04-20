Meteor.publish("villes", function () {
  return Villes.find();
},{
  url: "villes",
  httpMethod: "get"}
);
