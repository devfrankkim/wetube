import mongoose from "mongoose";

// model is document
// model is Data.
// schema is a shape

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required"
  },
  title: {
    type: String,
    required: "Tilte is required"
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const VideoModel = mongoose.model("Video", VideoSchema);

export default VideoModel;

// Object id들의 Array를 생성해야 함. ref="Comment"
//  [1,2,4,7] 이런 식으로, Video와 연결 된 Comment들의 ID가 저장 됨.
// Schema is like definition
// The name of the model is "Video"
