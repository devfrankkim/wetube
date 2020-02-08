import express from "express";
import routes from "../routes";
import {
  videosDetailController,
  getVideosUploadController,
  postVideosUploadController,
  getVideosEditController,
  postVideosEditController,
  videosDeleteController
} from "../ControllersGlobal/videoController";
import { middlewareUploadVideo } from "../middleware";

const videoRouter = express.Router(); // it is not export default => { useRouter }

// videoRouter.get(routes.videos, videoHomeControllerGlobal);
videoRouter.get(routes.upload, getVideosUploadController);
videoRouter.post(
  routes.upload,
  middlewareUploadVideo,
  postVideosUploadController
);

// console.log(routes.editVideo);
// console.log(routes.editVideo());

videoRouter.get(routes.videoDetail(), videosDetailController);
videoRouter.get(routes.editVideo(), getVideosEditController);
videoRouter.post(routes.editVideo(), postVideosEditController);
videoRouter.get(routes.deleteVideo(), videosDeleteController);

export default videoRouter;

// The route is a function so you need to execute it.
// "export default"  exports the file as it is
