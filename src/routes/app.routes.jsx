import { Routes, Route } from "react-router-dom";

import { Dish } from '../pages/Dish';
import { New } from '../pages/New';
import { Edit } from '../pages/Edit';
import { Home } from '../pages/Home';
import { Payment } from '../pages/Payment';

export function AppRoutes() {
  const user = {
    isAdmin: false,
  };
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id" element={<Dish/>} />

      {!user.isAdmin && <Route path="/payment" element={<Payment />} />}
      {user.isAdmin && <Route path="/new" element={<New />} />}
      {user.isAdmin && <Route path="/edit/id" element={<Edit />} />}
    </Routes>
  );
}