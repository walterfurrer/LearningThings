import "../index.css";
import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
    <header className="flex flex-col gap-8 mt-32">
      <div>
        <h1 className="text-5xl font-bold flex flex-col gap-2 lg:flex-row flex-wrap">
          Learning <span className="text-zinc-950 bg-js-yellow px-4 py-2">JavaScript</span>
          <span className="bg-ts-blue px-4 py-2">TypeScript</span>{" "}
          <span className="text-zinc-950 bg-react-blue px-4 py-2">React</span>
        </h1>
      </div>
      <div className="flex justify-end">
        <SocialLinks />
      </div>
    </header>
  );
};

export default Header;
