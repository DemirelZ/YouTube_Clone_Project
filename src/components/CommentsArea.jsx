import React from "react";
import moment from "moment/moment";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const CommentsArea = ({ comments, commentCount }) => {
  return (
    <div>
      <h2 className="text-lg">{commentCount.commentsCount} Yorum</h2>

      <div>
        {comments?.map((comment) => (
          <div key={comment.commentId} className="flex p-4">
            <img
              className="rounded-full w-12 h-12 mx-2 "
              src={comment.authorThumbnail[0].url}
            />

            <div>
              <div className="flex gap-4">
                <h3 className="font-bold">{comment.authorText}</h3>
                <span>{moment(comment.publishDate).fromNow()}</span>
              </div>
              <div>{comment.textDisplay}</div>
              <div className="flex item-center  text-lg  cursor-pointer">
                <div className=" flex item-center justify-between rounded-full p-3 m-2  hover:bg-[#535353]">
                  <AiFillLike />
                </div>
                <div className=" flex item-center justify-between rounded-full p-3 m-2 hover:bg-[#535353]">
                  <AiFillDislike />
                </div>
                <p className="flex items-center rounded-[20px] px-[20px] py-[5px] my-2 hover:bg-[#535353]">
                  Yanıtla
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsArea;
