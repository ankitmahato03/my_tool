import Image from "next/image";

export const Aboutus = () => {
  return (
    <section className="bg-blue-100 rounded-4xl p-4 m-4">
      <div className="flex flex-row justify-around  items-center  p-8">
        <div className=" w-2/5 rounded-2xl p-4">
          <h1 className="text-4xl font-bold">
            {" "}
            Give a brief overview of your project here.
          </h1>{" "}
        </div>
        <div className=" w-2/5 rounded-2xl p-4">
          <div className="p-4 flex flex-col gap-2">
            <h1 className="text-2xl   tracking-wide">
              {" "}
              Background Give a brief overview of your project here. You may
              talk about the client brand and the main project challenge. Give a
              brief overview of your project here.
            </h1>{" "}
          </div>
        </div>
      </div>

      {/* Bottom Section  */}
      <div className="flex flex-row justify-around items-center  p-4">
        {/* text Section  */}
        <div className="w-2/5 rounded-2xl p-4">
          <div className="p-4 flex gap-4">
            <span className="text-2xl">01</span>
            <span>
              <h1 className="text-2xl"> Background</h1>{" "}
              <p className="text-muted-foreground font-semibold">
                Give a brief overview of your project here. You may talk about
                the client brand and the main project challenge.
              </p>
            </span>
          </div>
          <div className="p-4 flex gap-4">
            <span className="text-2xl">02</span>
            <span>
              <h1 className="text-2xl"> Solution</h1>{" "}
              <p className="text-muted-foreground font-semibold">
                Talk about your idea here. Expound a bit on how you solved the
                challenge and how your work helped your client.
              </p>
            </span>
          </div>
        </div>
        {/* Image Section  */}
        <div className=" shadow-md rounded-3xl overflow-hidden shadow-blue-600 hover:animate-pulse">
          <Image src="/image.png" alt="Image" width={500} height={500} />
        </div>
      </div>
    </section>
  );
};
