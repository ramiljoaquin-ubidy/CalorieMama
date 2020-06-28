import * as rp from "request-promise-native";
import fs from "fs";
import FormData from "form-data";
const data = new FormData();
data.append("image", fs.createReadStream("/Users/ramil.ubidy/Downloads/apple.jpg"));
/**
 * POST /login
 * Sign in using email and password.
 */
export const foodRecognition = async () => {
  const options = {
    method: "POST",
    uri: "https://api-2445582032290.production.gw.apicast.io/v1/foodrecognition?user_key=1ae58286c3d992736adbc284ff00749d",
    headers: {
      ...data.getHeaders()
    },
    data : data,
    json: true // Automatically stringifies the body to JSON
};
 
rp.post(options)
    .then(function (parsedBody) {
      console.log(parsedBody.data);
    })
    .catch(function (err) {
      console.log(err);
    });
};
