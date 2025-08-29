import { ChartArea, Facebook, Instagram, InstagramIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className=" bg-blue-600 p-4 mb-1.5 border mt-auto ">
      <div className="grid grid-cols-3 justify-around items-center  p-6 text-white">
        <div className="text-left">
          <p className="font-bold text-xl"> my_tool</p> Talk about your idea
          here. Expound a bit on how you solved the challenge and how your work
          helped your client.
        </div>
        <div className="flex flex-col justify-between text-left ">
          <h1 className="text-xl font-semibold"> Company</h1>
          <ul>
            <li className="hover:text-gray-900">Option 1</li>
            <li className="hover:text-gray-900">Option 2</li>
            <li className="hover:text-gray-900">Option 3</li>
            <li className="hover:text-gray-900">Option 4</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-2 p-4 ">
          <p className="font-bold text-2xl pl-4"> NewsLetter</p>
          <div className="flex justify-around items-center gap-2 p-4 w-full">
            <input
              type="text"
              placeholder="Enter Your Email Here "
              className="bg-black block rounded placeholder:items-center placeholder:text-xl w-full placeholder:pl-2 h-10 pl-4   "
            />
            <button className=" bg-black w-1/3 text-2xl  rounded font-bold h-10 hover:text-blue-500 transition-all duration-400">
              Submit
            </button>
          </div>
        </div>
      </div>
      {/* footer Copyright  */}
      <div className=" flex justify-around items-center border-t-2 p-4">
        {" "}
        <p className="text-white">
          my_tool.com Made with ❤️ in India | Copyright © 2025
        </p>
        <div className="flex gap-2 text-white ">
          <InstagramIcon />
          <ChartArea />
          <Facebook />
        </div>
      </div>
    </footer>
  );
};
