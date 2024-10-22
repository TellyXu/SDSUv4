import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { message, Button, Tooltip, Modal, Popover } from 'antd';
import Index from "./view/Index/Index"
const { confirm } = Modal;
function App() {
  const [searchVal, setSearchVal] = useState("");

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="index" />} />
        <Route path="index" element={<Index />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
