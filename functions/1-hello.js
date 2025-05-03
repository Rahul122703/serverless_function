//domain/.netlify/functions/1-hello
exports.handler = async (event, context, cb) => {
  cb(null, { statusCode: 200, body: "hey this is rahul sharma" });
};
