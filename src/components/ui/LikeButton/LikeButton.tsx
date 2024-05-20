import React, { FC } from "react";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  handleClick?: () => void;
  className?: string;
  isSaved: boolean;
}

const LikeButton: FC<IProps> = ({ className, handleClick, isSaved }) => {
  return (
    <button
      className={cn("w-[20px] h-[20px]", className)}
      onClick={handleClick}
    >
      {isSaved ? (
        <FontAwesomeIcon icon={faHeart} className="text-2xl text-amber-500" />
      ) : (
        <FontAwesomeIcon icon={emptyHeart} className="text-2xl" />
      )}
    </button>
  );
};

export { LikeButton };
