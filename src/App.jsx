import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import MemberDetails from './MemberDetails';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<MemberDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
