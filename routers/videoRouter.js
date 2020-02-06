import express from "express";
import routes from "../routes";
import {
  videoHomeControllerGlobal,
  videosDetailController,
  videosEditController,
  videosDeleteController,
  getVideosUploadController,
  postVideosUploadController
} from "../ControllersGlobal/videoController";

const videoRouter = express.Router(); // it is not export default => { useRouter }

// videoRouter.get(routes.videos, videoHomeControllerGlobal);
videoRouter.get(routes.upload, getVideosUploadController);
videoRouter.post(routes.upload, postVideosUploadController);

videoRouter.get(routes.videoDetail(), videosDetailController);
// the route is a function so you neex to execute it.
videoRouter.get(routes.editVideo, videosEditController);
videoRouter.get(routes.deleteVideo, videosDeleteController);

export default videoRouter;

// "export default"  exports the file as it is
