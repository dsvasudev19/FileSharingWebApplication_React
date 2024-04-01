import React, {useState} from "react";
import {Dropdown} from "flowbite-react";
import {EllipsisVertical} from "lucide-react";
import FileShareModal from "../Modals/FileShareModal";


const File = () => {
  return (
    <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-3">

      <a href="#">
        <img
          class="rounded-t-lg"
          src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1711929600&semt=sph"
          alt=""
        />
      </a>
      <div class="p-2 flex justify-between">
        <a href="#">
          <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Image
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
            <Dropdown.Item>Edit</Dropdown.Item>
            <Dropdown.Item>Delete</Dropdown.Item>
            <Dropdown.Item>

              Share

            </Dropdown.Item>
          </Dropdown>
        </a>
      </div>
    </div>
  );
};

export default File;
