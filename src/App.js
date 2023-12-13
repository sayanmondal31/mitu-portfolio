import React from "react";
import {
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import test from "./assets/test.jpeg";
import ProfilePic from "./assets/profilepic.jpg"
import HeadphoneProject from "./assets/headphone project copy.png"
import Logo from "./assets/sayan da logo 10000.png"
import  labelDesign from "./assets/LabelDesign2 copy 2.jpg"
import GymBanner from "./assets/gym_banner.cb436a01746066629e9d.jpg"
import Candle from "./assets/CANDLE copy 55.2d62d0732095b4ef8678.png"
import Candle2 from "./assets/candal88 copy.45e38e78dcdecaca4865.png"
import Medicine from "./assets/MEDICINe.67c5f9986ae12acdab00.png"
import Medicine2 from "./assets/medicinebox.07a6f54b76b9a4cbf111.png"
import Bamboo_logo from "./assets/project3.ab67755537e14e4afcfe.png"

// skills
import AdobePhotoshop from "./assets/skill/Adobe_Photoshop.509b0881f51e81814ead.png"
import AdobeIllustration from "./assets/skill/Adobe_Illustrator.cc4d01a84add9b55916b.png"
import Blender from "./assets/skill/Blender_logo.2766bad68b2b95eafe36.png"
import Figma from "./assets/skill/1667px-Figma-logo.svg.png"

const App = () => {
 

  return (
    <div className="">
      <main className=" bg-white px-10  md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between text-teal-500">
            <h1 className="font-burtons text-xl text-black">MRITTIKA GHATAK</h1>
            <ul className="flex items-center">
             
            
            </ul>
          </nav>
          <div className="text-center p-10 py-10 ">
          

          
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Hi, I'm Mrittika.
            </h2>
            <h3 className="text-2xl py-2  md:text-3xl">
              Creative & Graphic Designer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-600  max-w-xl mx-auto md:text-xl">
            Currently pursuing my B MAG from NSHM
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
             <a href="https://www.linkedin.com/in/mrittika-ghatak-64404a250/" target="_" >

              <AiFillLinkedin />
             </a>
             <a href="mailto:mrittikaghatak95@gmail.com">

              <AiFillMail />
             </a>
             
            </div>
            </div>
            <div className="mx-auto bg-gradient-to-b shadow-md   from-teal-500 rounded-sm w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              {/* profile pic */}
              <img src={ProfilePic} alt="Profile pic" className="object-fill"  />
            </div>
          
        </section>

        <section className="py-10">
        <div>
            <h3 className="text-3xl py-1 text-teal-500 ">Skills</h3>
        <div className="flex justify-between py-5 px-10">
          <img src={AdobePhotoshop} alt="Adobe Photoshop" className="w-auto h-10" />
          <img src={AdobeIllustration} alt="Adobe Photoshop"  className="w-auto h-10"/>
          <img src={Blender} alt="Adobe Photoshop" className="w-auto h-10" />
          <img src={Figma} alt="Adobe Photoshop" className="w-auto h-10" />
        </div>
            
          </div>
          <div>
            <h3 className="text-3xl py-1 text-teal-500 ">Portofolio</h3>
        
            <p className="text-md py-2 leading-8 text-gray-800 ">
            I offer from a wide range of services, including Logo design, Banner design, Illustration, 2D Art, Product Packaging design .
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          
            <div className="basis-1/3 flex-1 ">
              <img
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={HeadphoneProject}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
        

              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={Logo}
                alt=""
                />
              
              {/* <p className="text-base text-teal-50   font-[Inter] text-center">Logo Design</p> */}
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={Candle}
                alt=""
              />
              {/* <p className="text-white pt-2 text-center" > 
                Label Design
              </p> */}
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={Candle2}
                alt=""
              />
              {/* <p className="text-white pt-2 text-center" > 
                Label Design
              </p> */}
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={Medicine}
                alt=""
              />
              {/* <p className="text-white pt-2 text-center" > 
                Label Design
              </p> */}
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={Medicine2}
                alt=""
              />
              {/* <p className="text-white pt-2 text-center" > 
                Label Design
              </p> */}
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={labelDesign}
                alt=""
              />
              {/* <p className="text-white pt-2 text-center" > 
                Label Design
              </p> */}
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={GymBanner}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={test}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={Bamboo_logo}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
            
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
