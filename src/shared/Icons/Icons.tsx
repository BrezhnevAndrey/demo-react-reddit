import React from "react";

interface IIconsProps {
  name: "blockIcon" | "menuIcon" | "warningIcon" | "anonIcon";
  size: { width?: number; height?: number };
}

export function Icons({ name, size }: IIconsProps) {
  switch (name) {
    case "blockIcon":
      return (
        <svg
          width={size.width || 12}
          height={size.height || 12}
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z"
            fill="#999999"
          />
        </svg>
      );
    case "menuIcon":
      return (
        <svg
          width={size.width || 20}
          height={size.height || 5}
          viewBox="0 0 20 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="17.5"
            cy="2.5"
            r="2.5"
            transform="rotate(90 17.5 2.5)"
            fill="#D9D9D9"
          />
          <circle
            cx="10"
            cy="2.5"
            r="2.5"
            transform="rotate(90 10 2.5)"
            fill="#D9D9D9"
          />
          <circle
            cx="2.5"
            cy="2.5"
            r="2.5"
            transform="rotate(90 2.5 2.5)"
            fill="#D9D9D9"
          />
        </svg>
      );
    case "warningIcon":
      return (
        <svg
          width={size.width || 14}
          height={size.height || 12}
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z"
            fill="#999999"
          />
        </svg>
      );
    case "anonIcon":
      return (
        <svg
          width={size.width || "50"}
          height={size.height || "50"}
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z"
            fill="#D9D9D9"
          />
        </svg>
      );
  }
}
