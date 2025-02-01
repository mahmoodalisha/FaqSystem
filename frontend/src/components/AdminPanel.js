import React, { useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AdminPanel = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    axios.post("http://localhost:8000/api/faqs", { question, answer })
      .then(() => {
        setQuestion(""); 
        setAnswer("");
        alert("FAQ added successfully!");
      })
      .catch(err => console.error("Error adding FAQ:", err));
  };

  return (
    <div>
      <h2>Admin Panel - Add FAQ</h2>
      <input 
        type="text" 
        placeholder="Enter Question" 
        value={question} 
        onChange={(e) => setQuestion(e.target.value)} 
      />
      <ReactQuill value={answer} onChange={setAnswer} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AdminPanel;
