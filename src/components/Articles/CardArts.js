import React, { useState } from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

export default function CardArts({ data }) {
  return (
    <Card>
      <CardHeader color="purple" contentPosition="left">
        <h2 className="text-white text-2xl">Featured Users</h2>
      </CardHeader>

      <CardBody>
        <div className="overflow-x-auto"></div>
        <div class="flex items-center justify-center ">
          {" "}
          <div class="rounded-xl border p-5 shadow-md w-full bg-white">
            <div class="flex w-full items-center justify-between border-b pb-3">
              <div class="flex items-center space-x-3">
                {/* <div class="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div> */}
                <img
                  class="h-8 w-8 rounded-full bg-slate-400"
                  src="https://upload.wikimedia.org/wikipedia/commons/0/06/Tr%C3%BAc_Anh_%E2%80%93_M%E1%BA%AFt_bi%E1%BA%BFc_BTS_%282%29.png "
                />
                <div class="text-lg font-bold text-slate-700">Joe Smith</div>
              </div>
              <div class="flex items-center space-x-8">
                <button class="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">
                  <div class="flex cursor-pointer items-center transition hover:text-slate-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mr-1.5 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                    <span>4</span>
                  </div>
                </button>
                <div class="text-xs text-neutral-500">2 view</div>
              </div>
            </div>

            <div class="mx-2">
              <div class=" text-xl font-bold">
                Nulla sed leo tempus, feugiat velit vel, rhoncus neque?
              </div>
              <div class="text-sm text-neutral-600">
                Aliquam a tristique sapien, nec bibendum urna. Maecenas
                convallis dignissim turpis, non suscipit mauris interdum at.
                Morbi sed gravida nisl, a pharetra nulla. Etiam tincidunt turpis
                leo, ut mollis ipsum consectetur quis. Etiam faucibus est risus,
                ac condimentum mauris consequat nec. Curabitur eget feugiat
                massa
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
