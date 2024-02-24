import { Routes, Route } from "react-router-dom";

import { Dish } from '../pages/Dish';
import { New } from '../pages/New';
import { Edit } from '../pages/Edit';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Edit />} />
      <Route path="/dish/:id" element={<Dish/>} />
    </Routes>
  )
}