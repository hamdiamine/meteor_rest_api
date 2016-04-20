Meteor.publish("categories", function () {
  return Categories.find();
},{
  url: "categories",
  httpMethod: "get"}
);
