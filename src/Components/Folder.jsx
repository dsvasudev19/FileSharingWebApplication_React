import React, {useState} from "react";
import {Dropdown} from "flowbite-react";
import {EllipsisVertical} from "lucide-react";
import {Link} from "react-router-dom";
const Folder = (props) => {
  return (
      <div class="w-24 md:w-32 h-auto bg-white rounded-lg shadow-gray-900 mt-3">
          <Link to={`/view-folder?folder=${ props?.name }&_f_Id=${props.id}`}>
          <a >
              <img
                  class="rounded-t-lg"
                  src="/folder.png"
                  alt=""
              />
          </a>
          </Link>
          <div class="p-2 flex justify-between">
              <a href="#">
                  <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                      {props?.name||"folder"}
                  </h5>
              </a>
              <a className="hover:cursor-pointer mt-1">
                  <Dropdown
                      label=""
                      dismissOnClick={false}
                      renderTrigger={() => (
                          <span>
                              <EllipsisVertical />
                          </span>
                      )}
                  >
                      <Dropdown.Item>Delete</Dropdown.Item>
                      <Dropdown.Item>Download</Dropdown.Item>
                      
                  </Dropdown>
              </a>
          </div>
      </div>
  );
};

export default Folder;