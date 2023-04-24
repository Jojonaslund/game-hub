import React from "react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumb from "../assets/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface EmojiProp {
  rating: number;
}

const Emoji = ({ rating }: EmojiProp) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumb, alt: "recomended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  return (
    <>
      <Image {...emojiMap[rating]} marginTop={1} />
    </>
  );
};

export default Emoji;
