import React, { useEffect, useState } from "react";
export default async function  fetchDatas(url)  {
   let response =  await fetch(url, {
    method: "GET",
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
   });
   let data = await response.json()
   console.log("Data",data)
  return  data;

}