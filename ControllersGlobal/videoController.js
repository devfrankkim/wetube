import { videos } from "../db.js";

export const videoHomeControllerGlobal = (req, res) =>
  res.render("home.pug", { pageTitle: "Home", videos: videos });

export const searchControllerGlobal = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search.pug", { pageTitle: "Search", searchingBy: searchingBy });
};

export const videosUploadController = (req, res) =>
  res.render("upload.pug", { pageTitle: "videosUpload" });

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
