import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import { Card, TextField, Button, Modal, Box, Typography } from "@mui/material";
import "./App.css";

function App() {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [showTodo, setShowTodo] = useState(false);

  const handleAddTodo = () => {
    fetch("http://localhost:8000/todos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item_name: itemName,
        item_description: itemDescription,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setOpen(true);
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // }
    setItemName("");
    setItemDescription("");
  };

  const handleShowTodo = () => {
    fetch("http://localhost:8000/todos/")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error:", error));
  };

  const isDisabled = !(itemName && itemDescription);

  const modalBody = (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      }}
    >
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        className="modal-text"
      >
        Item Added in the List Successfully
      </Typography>
    </Box>
  );

  return (
    <>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "#242424",
        }}
      >
        <TextField
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item Name"
          sx={{
            backgroundColor: "white",
          }}
        />
        <TextField
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
          placeholder="Item Description"
          sx={{
            backgroundColor: "white",
          }}
        />
        <Button
          sx={{ height: "57px", backgroundColor: "aquamarine" }}
          onClick={handleAddTodo}
          disabled={isDisabled}
        >
          To-do
        </Button>
        <Button
          sx={{ backgroundColor: "ghostwhite", boxShadow: "none" }}
          onClick={() => {
            handleShowTodo();
            setShowTodo(!showTodo);
          }}
        >
          Get the Lists
        </Button>
      </Card>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {modalBody}
      </Modal>
      <Card className="saved-list" style={{ overflowY: "scroll" }}>
        {showTodo &&
          todos.map((todo) => (
            <div key={todo.id}>
              <h1>{todo.item_name}</h1>
              <p>{todo.item_description}</p>
            </div>
          ))}
      </Card>
    </>
  );
}

export default App;
