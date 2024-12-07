import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

export const DeleteIcon = ({ onClick }: { onClick: () => void }) => (
  <SvgIcon
    onClick={onClick}
    style={{
      cursor: "pointer",
      color: "red",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="red"
    >
      <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
    </svg>
  </SvgIcon>
);

export const EditIcon = ({ onClick }: { onClick: () => void }) => (
  <SvgIcon
    onClick={onClick}
    style={{
      cursor: "pointer",
      color: "black",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="black"
    >
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z" />
    </svg>
  </SvgIcon>
);
