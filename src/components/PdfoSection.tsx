import Image from "next/image";

export const PdfoSection = () => {
  return (
    <section className=" m-4 p-4 bg-blue-100 rounded-2xl">
      {/* Heading Div  */}
      <div className="p-4 mt-4 w-2/5 text-center ">
        {" "}
        <h2 className="text-5xl font-bold">PdfoGraphy Co.</h2>
      </div>
      {/* bottom Section  */}
      <div className="flex flex-row justify-around items-center  p-4">
        {/* text Section  */}
        <div className="bg-white w-2/5 rounded-2xl p-4">
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
        {/* video Section  */}
        <div className=" shadow-md rounded-3xl overflow-hidden shadow-blue-600">
          <Image src="/image.png" alt="Image" width={500} height={500} />
        </div>
      </div>
    </section>
  );
};
