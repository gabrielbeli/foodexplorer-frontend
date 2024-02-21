import { Routes, Route } from "react-router-dom";

import { Dish } from '../pages/Dish';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dish/>}/>
    </Routes>
  )
}