import Button from "@/components/button";
import StudyZone from "./studyzone";

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-48">
      <div>
        <StudyZone chapno={1} qno={1} background={"icons/testbg1.png"} />
      </div>
      {/* <div className="flex w-full items-center justify-center">
        <div className="flex w-1/3 items-center justify-center">
          <Button text={"School Master"} />
        </div>

        <div className="flex w-1/3 items-center justify-center border-0 text-4xl">
          <h1>Play Now!</h1>
        </div>

        <div className="flex w-1/3 items-center justify-center">
          <Button text={"Scholar"} />
        </div>
      </div> */}
    </div>
  );
};

export default Home;
