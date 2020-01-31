import express from "express";
import routes from "../routes";
import {
  videoHomeControllerGlobal,
  videosUploadController,
  videosDetailController,
  videosEditController,
  videosDeleteController
} from "../ControllersGlobal/videoController";

const videoRouter = express.Router(); // it is not export default => { useRouter }

videoRouter.get(routes.videos, videoHomeControllerGlobal);
videoRouter.get(routes.upload, videosUploadController);
videoRouter.get(routes.videoDetail, videosDetailController);
videoRouter.get(routes.editVideo, videosEditController);
videoRouter.get(routes.deleteVideo, videosDeleteController);

export default videoRouter;

// "export default"  exports the file as it is
