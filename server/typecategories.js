Meteor.publish("typecategories", function () {
  return TypeCategories.find();
},{
  url: "typecategories",
  httpMethod: "get"}
);
