import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ImageGallery = ({ images }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleOpenModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const renderImageList = (images) => {
    let length = images.length;
    // Image list with max 4 image, click last image to view more
    if (length === 1){
      return (
        <div className="grid grid-cols-1 gap-2 mt-3">
          <img src={images[0].url} alt="test" />
        </div>
      )
    }
    else if (length === 2){
      return (
        <div className="grid grid-cols-2 gap-2 mt-3">
          <img src={images[0].url} alt="test" onClick={() => handleOpenModal(0)} />
          <img src={images[1].url} alt="test" onClick={() => handleOpenModal(1)} />
        </div>
      )
    }
    else if (length === 3){
      return (
        <div className="grid grid-cols-2 gap-2 mt-3">
          <img src={images[0].url} alt="test" onClick={() => handleOpenModal(0)} />
          <div className="flex flex-col gap-2">
            <img src={images[1].url} alt="test" onClick={() => handleOpenModal(1)} />
            <img src={images[2].url} alt="test" onClick={() => handleOpenModal(2)} />
          </div>
        </div>
      )
    }
    else if (length === 4){
      return (
        <div className="grid grid-cols-2 gap-2 mt-3">
          <img src={images[0].url} alt="test" onClick={() => handleOpenModal(0)} />
          <img src={images[1].url} alt="test" onClick={() => handleOpenModal(1)} />
          <img src={images[2].url} alt="test" onClick={() => handleOpenModal(2)} />
          <img src={images[3].url} alt="test" onClick={() => handleOpenModal(3)} />
        </div>
      )
    }
    else if (length > 4){
      return (
        <div className="grid grid-cols-2 gap-2 mt-3">
          <img src={images[0].url} alt="test" className="border border-gray-300 rounded-md p-2 cursor-pointer" onClick={() => handleOpenModal(0)} />
          <div className="grid grid-cols-2 gap-2" >
            <img src={images[1].url} alt="test" className="border border-gray-300 rounded-md p-2 cursor-pointer" onClick={() => handleOpenModal(1)} />
            <img src={images[2].url} alt="test" className="border border-gray-300 rounded-md p-2 cursor-pointer" onClick={() => handleOpenModal(2)} />
            <img src={images[3].url} alt="test" className="border border-gray-300 rounded-md p-2 cursor-pointer" onClick={() => handleOpenModal(3)} />
            <div className="flex items-center justify-center rounded-md cursor-pointer relative">
              <img src={images[4].url} alt="test" className="border border-gray-300 rounded-md p-2 cursor-pointer" onClick={() => handleOpenModal(4)} />
              <span className="text-lg font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 rounded">
                +{length - 4}
              </span>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <>
      {/* {images.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt="test"
          className="border border-gray-300 rounded-md p-2 cursor-pointer"
          onClick={() => handleOpenModal(index)}
        />
      ))} */}
      {/* Image */}
        <div className="w-5/6 mt-3 mx-auto">
            {renderImageList(images || [])}
        </div>
      <Dialog open={modalOpen} onClose={handleCloseModal} maxWidth="md">
        <DialogTitle>
          <IconButton onClick={handlePrevImage} color="inherit">
            <ArrowBackIcon />
          </IconButton>
          <IconButton onClick={handleNextImage} color="inherit">
            <ArrowForwardIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <img
            src={images[selectedImageIndex].url}
            alt="test"
            className="border border-gray-300 rounded-md p-2 cursor-pointer"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageGallery;
