Meteor.publish("motifabus", function () {
  return MotifAbus.find();
},{
  url: "motifabus",
  httpMethod: "get"}
);
