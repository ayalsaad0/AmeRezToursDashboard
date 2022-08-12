import React, { useState } from "react";
import Header from "../components/Header";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Dialog } from "@mui/material";
import { useStateContext } from "../contexts/ContextProvider";
import { FetchAttractions, DeleteAttraction } from "../data/Attractions";
import { AiOutlinePlusCircle } from "react-icons/ai";
import AttractionForm from "../components/AttractionForm";
// import { img } from "../../public/images_public/the-three-valleys-of-the-high-atlas.jpg";

const Attractions = () => {
  const { currentColor, activePopup, setActivePopup } = useStateContext();
  const [currentActivity, setCurrentActivity] = useState([]);

  const attractions = FetchAttractions();

  const onClickDelete = (id) => {
    DeleteAttraction(id);
  };

  const onClickAdd = () => {
    setActivePopup(true);
  };

  const onClickEdit = ({ item }) => {
    setCurrentActivity(item);
    setActivePopup(true);
  };

  const onClose = () => {
    setCurrentActivity([]);
    setActivePopup(false);
  };

  return (
    <div className="flex flex-wrap justify-center">
      <button
        type="button"
        onClick={onClickAdd}
        style={{ background: currentColor, borderRadius: "50%" }}
        className="text-3xl fixed right-4 bottom-20 text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
      >
        <AiOutlinePlusCircle />
      </button>
      <Dialog open={activePopup} onClose={onClose}>
        {activePopup && (
          <AttractionForm attraction={currentActivity} onClose={onClose} />
        )}
      </Dialog>
      <Dialog open={activePopup} onClose={onClose}>
        {activePopup && (
          <AttractionForm attraction={currentActivity} onClose={onClose} />
        )}
      </Dialog>
      {attractions.map((item) => (
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
              <img
                src={item.images[0].link}
                alt={item.title}
                style={{ height: 160 }}
              />
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
                  onClickEdit({ item });
                }}
              >
                EDIT
              </Button>
              <Button
                color="error"
                size="small"
                onClick={() => {
                  onClickDelete(item.id);
                }}
              >
                DELETE
              </Button>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default Attractions;
