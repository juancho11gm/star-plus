import { StarLink } from '@components/StarLink';
import { IconProps } from 'types/types';

export interface StarImageProps {
  href?: string;
}

const StarImage = (props: StarImageProps & IconProps) => {
  const { href, width = 66, height = 20, style } = props;

  return (
    <StarLink href={href}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 1783.88 540.52"
        width={width}
        height={height}
        style={style}
      >
        <defs>
          <clipPath id="a">
            <path fill="none" d="M-229.35-164.27h2254.87v895.62H-229.35z" />
          </clipPath>
          <clipPath id="b">
            <path
              fill="none"
              d="M739.86 208.18a5 5 0 0 1-4.76 3.45H537.92l159.74 116.06a5 5 0 0 0 5.57.2c44.19-27.46 82.82-46.51 165-68 0 0-126 94.41-208.58 200.19a25.14 25.14 0 0 0-4.11 7.71l-17.19 52.91 159.52-115.9a5 5 0 0 1 5.88 0l159.52 115.9-60.95-187.58a5 5 0 0 1 1.81-5.59l159.52-115.9H866.48a5 5 0 0 1-4.76-3.45L800.79 20.65Z"
            />
          </clipPath>
          <linearGradient
            id="c"
            x1={542.7}
            x2={543.7}
            y1={-197.7}
            y2={-197.7}
            gradientTransform="translate(-281292.66 102929.39) scale(519.26)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#fa1660" />
            <stop offset={0.28} stopColor="#fa1660" />
            <stop offset={0.78} stopColor="#ff6e00" />
            <stop offset={1} stopColor="#ff6e00" />
          </linearGradient>
        </defs>
        <path
          fill="#fff"
          d="M1775.52 251.33h-125v-125h-66.36v125h-125v64.43h125v125h66.36v-125h125v-64.43z"
        />
        <g clipPath="url(#a)">
          <path
            fill="#fff"
            d="M1231.71 163.05c32.22 0 52.84 16.75 52.84 44.46 0 29-20.62 49.61-52.84 49.61h-51.54v-94.07Zm40.59 159.79c55.42-7.08 101.17-54.77 101.17-115.33 0-78.61-53.48-121.78-139.82-121.78h-141.11v395.62h87.63V324.78l105 156.57H1387ZM570.09 85.73H309.18v79.9h85.7v315.72h89.56V165.63h85.65Zm-425.77 145c-25.12-11.59-34.79-23.84-34.79-39.94 0-18.69 16.11-34.15 40-33.51 21.91.64 38 12.24 50.26 40l75.38-32.86c-20.62-52.84-62.5-83.77-130.17-83.77-71.52 0-124.36 47-124.36 110.19 0 43.17 20.62 78.6 73.46 105l52.82 26.4c29.64 14.82 43.82 25.77 43.82 47.68 0 23.19-19.33 39.95-43.82 39.95-26.42 0-50.26-14.82-61.21-48.33l-79.9 23.2c18 65.08 71.52 103.09 141.11 103.09 75.39 0 133.38-48.32 133.38-117.91 0-53.48-28.35-89.56-85.7-116Z"
          />
        </g>
        <g clipPath="url(#b)">
          <path
            fill="url(#c)"
            d="M438.13-91.99h725.3v725.3h-725.3z"
            transform="rotate(-45 800.78 270.656)"
          />
        </g>
      </svg>
    </StarLink>
  );
};

export { StarImage };
