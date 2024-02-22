import { Routes, Route } from "react-router-dom";

import { Dish } from '../pages/Dish';
import { New } from '../pages/New';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<New />} />
      <Route path="/dish/:id" element={<Dish/>} />
    </Routes>
  )
}