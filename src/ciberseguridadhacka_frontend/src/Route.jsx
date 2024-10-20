import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateLicense from './CreateLicense';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<CreateLicense/>} />
<Route path="about" element={<About />} />
<Route path="contact" element={<Contact />} />
</Routes>
</BrowserRouter>
);
}