import routes from "../routes.js";
import VideoModel from "../models/Video.js";

// Home
export const videoHomeControllerGlobal = async (req, res) => {
  try {
    const videos = await VideoModel.find({});
    // console.log(videos);
    res.render("home.pug", { pageTitle: "Home", videos: videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

// Search Videos
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

// Upload Videos
export const getVideosUploadController = (req, res) =>
  res.render("upload.pug", { pageTitle: "videosUpload" });

export const postVideosUploadController = async (req, res) => {
  const {
    body: { title, description },
    file: { path } // URL
  } = req;
  const newVideo = await VideoModel.create({
    fileUrl: path,
    title: title,
    description: description
  });

  // console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

// Detail Videos
export const videosDetailController = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await VideoModel.findById(id);
    console.log(video);
    res.render("videoDetail.pug", {
      pageTitle: video.title,
      video: video
    });
  } catch (error) {
    res.redirect(routes.home);
  }
};

// Edit Videos
export const getVideosEditController = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await VideoModel.findById(id);
    res.render("editVideo.pug", { pageTitle: `Edit ${video.title}`, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postVideosEditController = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    await VideoModel.findOneAndUpdate(
      { _id: id },
      {
        title: title,
        description: description
      }
    );
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

// Delete Videos
export const videosDeleteController = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await VideoModel.findOneAndDelete({ _id: id });
    // const videos = await VideoModel.findById(id);
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};

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


Video.find() basically brings all the Videos on the database and puts them in an array.
mongoose does it for you.


video가 아닌 다른 file이 UPLOAD되는 것을 막는다.
=> file upload할 때 middleware에서 받는다. 
=> middleware에서 file upload 하고 URL복사해서 DB에 저장한다.

// res.render("upload.pug", { pageTitle: "videosUpload" });
// console.log(req.body);


*/

//  만약 컨트롤러에서 어떤 data를 가지고 있다는 것을 표현하고 싶다면, ":" + "name"
/*
routes.js
=> const VIDEOS_DETAIL = "/:id";
console.log(req.params) id 값을 불러오고, 변수명도 바꿀 수 있다. 
this is the only way to get information from URL;


To get the id from params,

instead of
console.log(req.params.id),

  const {
    params: { id }
  } = req;
*/

/*
`/videos/${id} is used as a function to generate '/videos/1/ 

The one we give to the router  /videos/:id is different.
*/

// console.log(req.params.id); query에서 받은 id=> findById(id)로 전달.

// console.dir(file, title, description);
// To Do: upload and save video
// when a user uploads a video, the user gets 'id', and then redirects to 'videoDetail' page
