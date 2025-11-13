import React, { memo } from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
  iconId: string;
  className?: string;
  width?: number;
  height?: number;
}

const Icon = memo(
  ({ iconId, className, width, height, ...props }: IconProps) => {
    return (
      <svg
        className={className}
        width={width}
        height={height}
        aria-hidden="true"
        {...props}
      >
        <use href={`/icons.svg#icon-${iconId}`}></use>
      </svg>
    );
  },
);

export default Icon;
