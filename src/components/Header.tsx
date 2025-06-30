import "../index.css";
import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
    <header className="flex flex-col gap-8 mt-32">
      <div>
        <h1 className="text-5xl font-bold flex flex-col gap-2 px-4 py-2 lg:flex-row flex-wrap">
          <span className="px-4 py-2">Learning</span>{" "}
          <span className="text-zinc-950 bg-linear-to-r from-js-yellow to-js-yellow/1 px-4 py-2 lg:bg-linear-to-r lg:from-js-yellow/1 via-js-yellow to-js-yellow/">
            JavaScript
          </span>
          <span className="bg-linear-to-r from-ts-blue to ts-blue/1 px-4 py-2">TypeScript</span>{" "}
          <span className="text-zinc-950 bg-linear-to-r from-react-blue to-react-blue/1 px-4 py-2">React</span>
        </h1>
      </div>
      <div className="flex justify-end">
        <SocialLinks />
      </div>
    </header>
  );
};

export default Header;
