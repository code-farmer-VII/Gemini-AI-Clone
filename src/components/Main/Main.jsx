import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Main = () => {
  // destructuring the object of context
  const {
    input,
    setInput,
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
  } = useContext(Context);

  return (
    <>
      <div className="flex-1 h-full  relative">
        <div className="flex items-center justify-between p-5 text-2xl text-gray-500">
          <p>Gemini</p>
          <img
            src={assets.user_icon}
            alt="UserIcon"
            className="w-10 rounded-full"
          />
        </div>

        <div className="max-w-[900px] mx-auto">
          {!showResult ? (
            <>
              <div className="my-12 mb-12 text-5xl text-gray-400 font-medium p-5">
                <p>
                  <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                    Hello, Dev
                  </span>
                </p>
                <p>How can I help you today?</p>
              </div>

              <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 p-5 overflow-y-auto">
                <div className="h-48 p-4 bg-gray-100 rounded-lg relative cursor-pointer hover:bg-gray-200">
                  <p className="text-gray-500 text-lg">
                    Suggest beautiful places to see on upcoming road trip
                  </p>
                  <img
                    src={assets.compass_icon}
                    alt="CompassIcon"
                    className="w-9 p-1 bg-white rounded-full absolute bottom-2 right-2"
                  />
                </div>
                <div className="h-48 p-4 bg-gray-100 rounded-lg relative cursor-pointer hover:bg-gray-200">
                  <p className="text-gray-500 text-lg">
                    Suggest beautiful places to see on upcoming road trip
                  </p>
                  <img
                    src={assets.bulb_icon}
                    alt="BulbIcon"
                    className="w-9 p-1 bg-white rounded-full absolute bottom-2 right-2"
                  />
                </div>
                <div className="h-48 p-4 bg-gray-100 rounded-lg relative cursor-pointer hover:bg-gray-200">
                  <p className="text-gray-500 text-lg">
                    Suggest beautiful places to see on upcoming road trip
                  </p>
                  <img
                    src={assets.message_icon}
                    alt="MessageIcon"
                    className="w-9 p-1 bg-white rounded-full absolute bottom-2 right-2"
                  />
                </div>
                <div className="h-48 p-4 bg-gray-100 rounded-lg relative cursor-pointer hover:bg-gray-200">
                  <p className="text-gray-500 text-lg">
                    Suggest beautiful places to see on upcoming road trip
                  </p>
                  <img
                    src={assets.code_icon}
                    alt="CodeIcon"
                    className="w-9 p-1 bg-white rounded-full absolute bottom-2 right-2"
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="max-h-[70vh] overflow-y-scroll px-[5%] scrollbar-hide">
              <div className="flex items-center gap-5 my-10">
                <img src={assets.user_icon} alt="UserIcon" className="w-10 rounded-full" />
                <p>{recentPrompt}</p>
              </div>
              <div className="flex items-start gap-5">
                <img src={assets.gemini_icon} alt="GeminiIcon" className="w-10 rounded-full" />
                {loading ? (
                  <div className="w-full flex flex-col gap-2">
                    <hr className="rounded-md border-none bg-gradient-to-r from-blue-300 to-white h-5 animate-loader" />
                    <hr className="rounded-md border-none bg-gradient-to-r from-blue-300 to-white h-5 animate-loader" />
                    <hr className="rounded-md border-none bg-gradient-to-r from-blue-300 to-white h-5 animate-loader" />
                  </div>
                ) : (
                  <p className="text-lg font-light leading-[1.8]">{resultData}</p>
                )}
              </div>
            </div>
          )}

          <div className="fixd bottom-0 w-full max-w-[900px]  mx-auto">
            <div className="flex items-center justify-between gap- bg-gray-100 p-4 rounded-full">
              <input
                onChange={(event) => setInput(event.target.value)}
                value={input}
                type="text"
                placeholder="Enter a prompt here"
                className="flex-1 bg-transparent border-none outline-none text-lg"
              />
              <div className="flex items-center gap-4">
                {input ? (
                  <img
                    onClick={() => onSent()}
                    src={assets.send_icon}
                    alt="SendIcon"
                    className="w-6 cursor-pointer"
                  />
                ) : null}
              </div>
            </div>
            <p className="text-center text-sm font-light mt-4">
              Gemini may display inaccurate info, including about people, so double-check its responses.{" "}
              <a href="https://support.google.com/gemini/answer/13594961?visit_id=638488069169109558-2959892032&p=privacy_notice&rd=1#privacy_notice" className="text-blue-500">
                Your privacy & Gemini Apps
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
