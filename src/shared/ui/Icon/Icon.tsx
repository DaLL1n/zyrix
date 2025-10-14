import React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
  iconId: string;
  className?: string;
  width?: number;
  height?: number;
}

const Icon = ({ iconId, className, width, height, ...props }: IconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      aria-hidden="true"
      {...props}
    >
      <use href={`/sprite.svg#icon-${iconId}`}></use>
    </svg>
  );
};

export default Icon;
