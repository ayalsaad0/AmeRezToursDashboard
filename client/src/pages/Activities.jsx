import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditActivity from "../components/EditActivity";
import { Dialog } from "@mui/material";
import FetchActivities from "../data/Activities";
import { useStateContext } from "../contexts/ContextProvider";

const Activities = () => {
  const [images, setImages] = useState([]);
  const { activePopup, setActivePopup } = useStateContext();
  const [currentActivity, setCurrentActivity] = useState([]);

  const activities = FetchActivities();

  const handleClickOpenUpdate = ({ item }) => {
    setCurrentActivity(item);
    setActivePopup(true);
  };

  const handleCloseUpdate = () => {
    setActivePopup(false);
  };

  // useEffect(() => {
  //   let isMounted = true;
  //   async function getImages() {
  //     await Axios.post(`http://localhost:3001/images`)
  //       .then((response) => {
  //         console.log(response.data);

  //         if (isMounted) setImages(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  //   getImages();
  //   return () => (isMounted = false);
  // }, []);

  return (
    <div className="flex flex-wrap justify-center">
      <Dialog open={activePopup} onClose={handleCloseUpdate}>
        {activePopup && <EditActivity activity={currentActivity} />}
      </Dialog>
      {activities.map((item) => (
        <div
          key={item.title}
          className="w-1/3 ml-auto mr-auto flex flex-col align-middle justify-center bg-white dark:bg-secondary-dark-bg m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl"
        >
          <Header
            category=""
            title={item.title}
            className="dark:text-white w-5/5"
          />
          <Accordion
            className="w-5/5 dark:bg-secondary-dark-bg ml-auto mr-auto"
            sx={{
              borderRadius: "1.25rem",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="primary" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <img src={item.image} alt={item.title} style={{ height: 160 }} />
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="dark:text-gray-200 flex mb-4"
                variant="body2"
                color="text.secondary"
              >
                <pre style={{ whiteSpace: "pre-line" }}>{item.description}</pre>
              </Typography>
              <Button
                style={{ margin: "1rem" }}
                size="small"
                onClick={() => {
                  handleClickOpenUpdate({ item });
                }}
              >
                EDIT
              </Button>
              <Button color="error" size="small">
                DELETE
              </Button>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default Activities;
