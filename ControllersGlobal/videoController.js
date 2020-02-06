import routes from "../routes.js";
import Video from "../models/Video.js";

export const videoHomeControllerGlobal = async (req, res) => {
  try {
    const videos = await Video.find({});
    console.log(videos);
    res.render("home.pug", { pageTitle: "Home", videos: videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const searchControllerGlobal = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search.pug", {
    pageTitle: "Search",
    searchingBy: searchingBy,
    videos: videos
  });
};

export const getVideosUploadController = (req, res) =>
  res.render("upload.pug", { pageTitle: "videosUpload" });

export const postVideosUploadController = (req, res) => {
  // res.render("upload.pug", { pageTitle: "videosUpload" });
  console.log(req.body);
  const {
    body: { file, title, description }
  } = req;

  // To Do: upload and save video
  // when a user uploads a video, the user gets 'id', and then redirects to 'videoDetail' page
  res.redirect(routes.videoDetail(1111111));
};

export const videosDetailController = (req, res) =>
  res.render("videoDetail.pug", { pageTitle: "VideosDetail" });

export const videosEditController = (req, res) =>
  res.render("editVideo.pug", { pageTitle: "EditVideos" });

export const videosDeleteController = (req, res) =>
  res.render("deleteVideo.pug", { pageTitle: "DeleteVideos" });

/*

res.render하게 되면, 
{pageTitle : " "} => "home" template 으로 전달됨.

home template,

extend layouts/main.pug
 =>
 #{pageTitle} from main.pug

컨트롤러도 query에 접근하려면, method가 get이어야 한다.
console.log(req.query.term)


  //   const searchingBy = req.query.term;
  //   const {query: {term: searchingBy}} = req;
  // => req.query.term === searchingBy

  // export const videosController = (req, res) =>
  //   res.render("videosController.pug", { pageTitle: "videos" }); 


*/
