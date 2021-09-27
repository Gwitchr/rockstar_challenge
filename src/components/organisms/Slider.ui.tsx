import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { EAppContent, AppContentNames } from "../../types";
import { useAppContext, IAppContext } from "../../context";
import { Button } from "../atoms";
import { MovieDetails } from "../molecules";

interface ISliderProps {
  className?: string;
  visible?: boolean;
}

function Slider({ className }: ISliderProps) {
  const ctx = useAppContext();
  const handleToggle = () => {
    ctx.setAppState({
      ...ctx.appState,
      selContent: null,
      selMovie: null,
      sliderOpen: false,
    });
  };

  const appState: IAppContext = ctx.appState;
  const selContent: null | JSX.Element = useMemo(() => {
    switch (appState.selContent) {
      case EAppContent.MOVIE_DETAILS: {
        return <MovieDetails />;
      }

      default:
        return null;
    }
  }, [appState.selContent]);

  return (
    <section
      className={`slider ${className || ""} 
		${
      ctx.appState?.sliderOpen ? "translate-x-0" : "translate-x-full"
    } transform transition min-h-screen shadow-md  fixed top-0 right-0 z-50 bg-main bg-cover flex bg-gray-500`}
    >
      <div className="w-full relative flex flex-col justify-center items-center">
        <Button
          onClick={handleToggle}
          color="outline"
          className="absolute top-10 right-10"
        >
          <FontAwesomeIcon icon={faTimes} />
        </Button>
        <div className="max-w-xs md:max-w-lg p-4">
          <h3 className="uppercase text-white , text-2xl md:text-4xl font-bold mb-6">
            {!!appState.selContent
              ? AppContentNames[appState.selContent]
              : null}
          </h3>
          {selContent}
        </div>
      </div>
    </section>
  );
}

export default Slider;
