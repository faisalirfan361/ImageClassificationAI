import { pipeline } from "@xenova/transformers";

let pipe = await pipeline('image-classification');
const result = await pipe('./image/pic1.jpeg');

console.log(result);