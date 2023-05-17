import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SimpleModal = ({ open, onClose }) => {
  const [responseData, setResponseData] = useState("Wait a sec...");

  console.log(open);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/suggestion/HEATING");
        console.log(response);
        setResponseData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (open) {
      fetchData();
    }
  }, [open]);

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            TIP
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {responseData}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default SimpleModal;
