import mongoose from "mongoose";

const CommentsSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const CommentModel = mongoose.model("Comment", CommentsSchema);
export default CommentModel;

/*

Two ways

*ONE*  Comment.js =>  You give each Comment for the "Video id" 
video: {
  type: mongoose.Schema.Types.ObjectId, 
  ref: "Video"
}
  -  which model is the ObjectId from?
  - The same name as "const model = mongoose.model("Video", VidoeSchema);" on Video.js
  - getting the ids from the videos.



*TWO* Video.js => Give each Video the Comment ids(Array) 
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]




*/
