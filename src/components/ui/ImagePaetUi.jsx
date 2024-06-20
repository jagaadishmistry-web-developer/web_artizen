import ImageModel from "./ImageModel";

const ImagePaetUi = () => {
  const galleryImages = [
    {
      img: "/gallary1.png",
    },
    {
      img: "/gallary2.png",
    },
    {
      img: "/gallary3.png",
    },
    {
      img: "/gallary4.png",
    },
  ];
  return (
    <>
      <ImageModel galleryImages={galleryImages} />
    </>
  );
};
export default ImagePaetUi;
