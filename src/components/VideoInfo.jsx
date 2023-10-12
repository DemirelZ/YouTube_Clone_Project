import { useEffect, useState } from "react";
import { getData } from "../utils/helpers";
import Loading from "./Loading";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import millify from "millify";
import moment from "moment/moment";
import "moment/locale/tr";
import StringArea from "./StringArea";

const VideoInfo = ({ id }) => {
  const [detail, setDetail] = useState(null);
  const [channel, setChannel] = useState(null);
  const [comments, setComments] = useState(null);
  const [commentCount, setCommentCount] = useState(null);

  const getInfos = async () => {
    // video detaylarını alır
    const detailRes = await getData(`/video/info?id=${id}`);

    // ilk isteğin bitmesinin ardından
    // kanal detaylarını alır
    const channelRes = await getData(
      `/channel/about?id=${detailRes.data.channelId}`
    );

    const commentsRes = await getData(`/comments?id=${id}`);

    setDetail(detailRes.data);
    setChannel(channelRes.data);
    setComments(commentsRes.data.data);
    setCommentCount(commentsRes.data);
  };

  useEffect(() => {
    getInfos();
  }, []);

  console.log("comments", comments);

  if (!detail || !channel || !comments) return <Loading />;

  return (
    <>
      <h1 className="mt-3 text-xl font-bold">{detail.title}</h1>
      {/* kanal detayları */}
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-4">
          <img className="rounded-full w-12 h-12" src={channel.avatar[0].url} />
          <div>
            <h4 className="font-bold">{channel.title}</h4>
            <p>{channel.subscriberCountText}</p>
          </div>
          <button className="bg-white h-9 rounded-full text-black px-3 transition hover:bg-[#bebebe]">
            Abone Ol
          </button>
        </div>

        <div className="flex item-center rounded-full py-2 px-8 text-lg bg-[#4b4a4a] cursor-pointer">
          <div className="pr-3 border-r-[1px]">
            <AiFillLike />
          </div>
          <div className="pl-3">
            <AiFillDislike />
          </div>
        </div>
      </div>
      {/* hakkında kısmı */}
      <div className="bg-[#383838] rounded p-2 mt-4 cursor-pointer hover:bg-[#535353]">
        <div className="flex gap-3 ">
          <p>{millify(detail.viewCount)}</p>

          <p>{moment(detail.publishDate).fromNow()}</p>
        </div>
        {/* yazı içeriği */}
        <StringArea text={detail.description} max={200} />
      </div>

      {/* Yorum kısmı */}
      <hr className="my-7" />

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
    </>
  );
};

export default VideoInfo;
