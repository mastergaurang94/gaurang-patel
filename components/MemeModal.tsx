import React from "react";
import Image from "next/image";
import ReactDOM from "react-dom";

interface MemeModalProps {
  imageUrl: string;
  onClose: () => void;
}

const MemeModal: React.FC<MemeModalProps> = ({ imageUrl, onClose }) => {
  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center"
      onClick={onClose}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex justify-center items-center">
        <div
          className="bg-white rounded-lg shadow-lg p-4 relative mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end items-center pb-2">
            <button onClick={onClose}>
              <Image
                src="/close.svg"
                width={0}
                height={0}
                className="w-6 h-6 cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
                alt="Close"
              />
            </button>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt="Full-size Meme"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default MemeModal;
