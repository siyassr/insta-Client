import React from "react";
import { Modal, Box, Typography } from "@mui/material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    bgcolor: "#181818",
    color: "white",
    borderRadius: 2,
    boxShadow: 24,
    p: 1,
    border: "none",  
    outline: "none", 
  };
  

const ModalMenu = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography
          sx={{
            color: "red",
            py: 1.5,
            borderBottom: "1px solid #333",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          Report
        </Typography>
        <Typography
          sx={{
            color: "red",
            py: 1.5,
            borderBottom: "1px solid #333",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          Unfollow
        </Typography>
        <Typography
          sx={{
            py: 1.5,
            borderBottom: "1px solid #333",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          Add to favorites
        </Typography>
        <Typography
          sx={{
            py: 1.5,
            borderBottom: "1px solid #333",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          Go to post
        </Typography>
        <Typography
          sx={{
            py: 1.5,
            borderBottom: "1px solid #333",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          Share to...
        </Typography>
        <Typography
          sx={{
            py: 1.5,
            borderBottom: "1px solid #333",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          Copy link
        </Typography>
        <Typography
          sx={{
            py: 1.5,
            borderBottom: "1px solid #333",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          Embed
        </Typography>
        <Typography
          sx={{
            py: 1.5,
            borderBottom: "1px solid #333",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          About this account
        </Typography>
        <Typography
          sx={{
            py: 1.5,
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={handleClose}
        >
          Cancel
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalMenu;
