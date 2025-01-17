import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { message, Button, Tooltip, Modal, Popover } from 'antd';
import Index from "./view/Index/Index"
import Events from "./view/Index/Events.jsx"
import Faculty from "./view/Index/Faculty.jsx"
import Template from "./view/Index/Template.jsx"

const { confirm } = Modal;
function App() {
  const [searchVal, setSearchVal] = useState("");

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="index" />} />
        <Route path="index" element={<Index />} />
        <Route path="events" element={<Events />} />
        <Route path="faculty" element={<Faculty />} />
        <Route path="template" element={<Template />} />

      </Routes>
    </HashRouter>
  );
}

export default App;
