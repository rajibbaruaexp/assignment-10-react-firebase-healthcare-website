import React from "react";
import "./email.css";

const EmailSub = () => {
  return (
    <div className="bg-blue-200 pt-10 pb-10">
      <div className="container mx-auto cemail2">
        <div className="grid sm:grid-cols-1 gap-4 cemail">
          <form class="m-4 flex">
            <input
              class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
              placeholder="your@mail.com"
            />
            <button class="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailSub;
