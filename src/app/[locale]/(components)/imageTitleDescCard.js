import Image from 'next/image';
import React from 'react';

const ImageTitleDescCard = ({ shouldShow, ref, card }) => {
  return (
    <div
      ref={ref ? ref : null}
      className={`${
        shouldShow ? 'pointer-events-auto' : 'pointer-events-none'
      } h-full flex flex-col shadow-md rounded overflow-hidden`}
    >
      <Image
        className="w-full h-52 object-cover rounded"
        src={card.image}
        alt=""
        width={308}
        height={208}
      />
      <div className="p-5 flex justify-between flex-col">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white font-abchanel text-center">
          {card.title}
        </h5>
        <p className="mb-3 font-normal font-chanel text-gray-700 dark:text-gray-400">
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default ImageTitleDescCard;

//   <ImageTitleDescCard
//             isAlwaysVisible={true}
//             shouldShow={true}
//             ref={null}
//             idx={idx}
//             card={card}
//           />
