import ImageComponent from "./Image";


const PostInfo = () => {
  return (
    <div className="cursor-pointer w-4 h-4 relative">
      <ImageComponent path="icons/infoMore.svg" alt="" w={16} h={16} />
    </div>
  );
};

export default PostInfo;