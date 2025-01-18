import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { message, Button, Tooltip, Modal, Popover } from 'antd';
import Index from "./view/Index/Index"
import News from "./view/Index/News.jsx"
import Faculty from "./view/Index/Faculty.jsx"
import Publications from "./view/Index/Publications.jsx"
import Template from "./view/Index/Template.jsx"

const { confirm } = Modal;
function App() {
  const [searchVal, setSearchVal] = useState("");

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="index" />} />
        <Route path="index" element={<Index />} />
        <Route path="news" element={<News />} />
        <Route path="faculty" element={<Faculty />} />
        <Route path="publications" element={<Publications />} />
        <Route path="template" element={<Template />} />

      </Routes>
    </HashRouter>
  );
}

export default App;
