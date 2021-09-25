import React, { useMemo } from "react";
import Gallery from "react-grid-gallery";

const ImageGallary = ({ allImages }) => {
  // get modified Images
  const modifiedImages = useMemo(() => {
    if (allImages && allImages.length) {
      return allImages.map(img => ({
        src: img?.images?.original?.url,
        thumbnail: img?.images?.original?.url,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: img.title
      }));
    }
    return [];
  }, [allImages]);

  return (
    <div className="gallary-container">
      <Gallery images={modifiedImages} enableImageSelection={false} />
    </div>
  );
};

export default ImageGallary;
