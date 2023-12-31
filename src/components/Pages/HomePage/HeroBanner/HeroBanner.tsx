import ImagePart from "./ImagePart";
import TextAndButtonPart from "./TextAndButtonPart";

const HeroBanner = () => {
  return (
    <div className="py-16 mx-auto max-w-screen-2xl px-4 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-x-20">
      <TextAndButtonPart />
      <ImagePart />
    </div>
  );
};

export default HeroBanner;
