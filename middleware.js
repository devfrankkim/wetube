import routes from "./routes";
import multer from "multer";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "Records Tube";
  res.locals.routes = routes;
  res.locals.user = {
    isAutenticated: true,
    id: 1
  };
  next(); // next() => req or handler 전달.
};

export const middlewareUploadVideo = multerVideo.single("videoFile");

/* input(type="file", id="file", name="videoFile", required=true, accept="video/*")
  - single means only 1 file.
  - name="videoFile"  => single("videoFile")
  - 해당 single("videoFile") UPLOAD
*/

// middleware should always return next();

// locals에 로컬 변수를 저장하면, 이 변수들을 view, 템플릿에서 모든 곳에서 사용 할 수 있다.
// locals로 받아서 변수를 만들 수도 있다.

// 글로벌 변수로 사용하기 위한 방법
// req, res, next => (res.locals)
// res.locals.variableName = "TEXT"
// res.locals.routes = routes;

// next()

/*

videoRouter.post(
  1. routes.upload,
  2. middlewareUploadVideo,
  3. postVideosUploadController
);

  1. 우리가 file을 upload하면, 
  2. server에 있는 folder(video/)에 Upload 하게 된다.
      middleware=> multer({dest:"videos/"}), 
      * const multerVideo = multer({ dest: "videos/" });
  3. postVideoUploadController 실행되면서, 해당 file에 접근한다. 
     *it's not file but it's URL 
     const{body: {file, title, description}} = req;

*/
