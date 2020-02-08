import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
//  dotenv.config will automatically load .env
//  그리고 찾은 모든 variable 들을 process.env.key에 저장한다.
// .env 에서 빼와서 mongoose.connect에 집어 넣는다. => process.env.MONGO_URL
// this is the way to hide 'KEYS'
// gitignore will ignore .env

// 우리가 요청하는건 string으로 된 DataBase다. 어디에 Database가 저장되어 있는지 알려준다.
// mongod => URL => /tmp/mongodb-27017.sock
// new version has this setting.

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error =>
  console.log(`❌  Error on DB connection: ${error}`);

db.once("open", handleOpen);
// 한번만 실행된다. open connection
db.on("error", handleError);
