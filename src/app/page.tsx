import Navbar  from "./components/Navbar";
import Header from "./components/Header";
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Pricing from "./components/Pricing"
import Features from "./components/Features"
import Cal from "./components/Cal"
// import Testimonials from "./components/Testimonials"
export default function Home() {
  return (
   
      
       <div className="flex justify-center flex-col items-center ">
        <Navbar></Navbar>
        <Header></Header>
        <Features></Features>
        <Pricing></Pricing>
        <CTA></CTA>
        <Footer></Footer>
       </div>
   
  );
}
