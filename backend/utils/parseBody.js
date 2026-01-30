// utils/parseBody.js
const getReqData = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });
 
    req.on("end", () => {
      try {
        const parsed = body ? JSON.parse(body) : {};
        resolve(parsed);
      } catch (err) {
        reject(new Error("Invalid JSON in request body"));
      }
    });

    req.on("error", (err) => {
      reject(err);
    });
  });
};

module.exports = getReqData;
