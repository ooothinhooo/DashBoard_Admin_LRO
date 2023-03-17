import React, { useState } from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import { Select, Option } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import Image from "@material-tailwind/react/Image";
import Progress from "@material-tailwind/react/Progress";
import ViewDoc from "./ViewDoc.js";
import Swal from "sweetalert2";
import Iframe from "react-iframe";
import { NavLink } from "react-router-dom";
import { CategoryArr } from "data/CategoryArr.js";

function TableDoc() {
  const [dataDocs, setDataDocs] = useState([
    {
      _id: "641181da0eb15b06db38217b",
      userId: "64117d940eb15b06db382176",
      title: "Website bán giày ",
      content: "Luận văn Website bán giày bằng NodeJS và ReactJs",
      docs_URL:
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/docs%2F64117d940eb15b06db382176%2F1678868819800B1805809_HuynhVanSi.pdf?alt=media&token=cdf6c300-8f84-456c-ad21-013e83cbed2b",
      category: "CNTT",
      tag: ["Luận văn", "Website giày", "NodeJS"],
      isPrivate: false,
      like: [
        "https://lh3.googleusercontent.com/a/AGNmyxZrB5kk-b-vK0-fpgw9Pc_VAWLuthyXrh2TYVV7Cw=s96-c",
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/avt%2F1678870771580Z4184096270537_A4968353D99229D58494CC5A1B94643F.JPG?alt=media&token=a7f3a51c-98a4-4b3a-a38c-06a18118db40",
        "https://lh3.googleusercontent.com/a/AEdFTp5ilWjDM_lV55J9fLCtS4Yq3r4pdmILENp6Z_PB=s96-c",
      ],
      view: 2,
      creatorsName: "Nguyen Huu Thuan B1906581",
      creatorsId: "64117d940eb15b06db382176",
      creatorsPhoto:
        "https://lh3.googleusercontent.com/a/AGNmyxZrB5kk-b-vK0-fpgw9Pc_VAWLuthyXrh2TYVV7Cw=s96-c",
      date: "15/3/2023",
      time: "15:4:8",
      __v: 0,
    },
    {
      _id: "64102ec2bccd7762d31eb73d",
      userId: "64102d4c777d8d6fb6efc8e8",
      title: "Ngữ pháp tiếng anh cơ bản",
      content: "Ngữ pháp tiếng anh cơ bản",
      docs_URL:
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/docs%2F64102d4c777d8d6fb6efc8e8vanthinhtran%2F1678782081189Nguphaptienganhcacbaitapnguphapcoban.pdf?alt=media&token=ea985a0a-dd98-4e38-816a-debf153263a3",
      category: "NN",
      tag: ["Tiếng anh", "ngữ pháp", "giao tiếp"],
      isPrivate: false,
      like: [
        "https://lh3.googleusercontent.com/a/AGNmyxZrB5kk-b-vK0-fpgw9Pc_VAWLuthyXrh2TYVV7Cw=s96-c",
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/avt%2F1678870771580Z4184096270537_A4968353D99229D58494CC5A1B94643F.JPG?alt=media&token=a7f3a51c-98a4-4b3a-a38c-06a18118db40",
        "https://lh3.googleusercontent.com/a/AEdFTp5ilWjDM_lV55J9fLCtS4Yq3r4pdmILENp6Z_PB=s96-c",
        "https://lh3.googleusercontent.com/a-/AFdZucqG-dBf0rgPYkhkQjtKh829yOnD9H_DFxsh7w7s=s96-c",
      ],
      view: 2,
      creatorsName: "Van Thinh Tran",
      creatorsId: "64102d4c777d8d6fb6efc8e8",
      date: "14/3/2023",
      time: "15:22:22",
      __v: 0,
      creatorsPhoto:
        "https://lh3.googleusercontent.com/a-/AFdZucqG-dBf0rgPYkhkQjtKh829yOnD9H_DFxsh7w7s=s96-c",
    },
    {
      _id: "64118fbf0eb15b06db3823ec",
      userId: "64118f190eb15b06db3823e5",
      title: "600 từ vựng Toeic",
      content: "600 từ vựng đơn giản bao đậu toeic",
      docs_URL:
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/docs%2F64118f190eb15b06db3823e5%2F1678872423421600_tu_vung_toeic_co_dich_tieng_viet.pdf?alt=media&token=49fd7db2-cb03-464b-8ebe-0e624166e6be",
      category: "NN",
      tag: ["Toeic", "Từ vựng toeic", "học ngoại ngữ"],
      isPrivate: false,
      like: [
        "https://lh3.googleusercontent.com/a/AEdFTp5ilWjDM_lV55J9fLCtS4Yq3r4pdmILENp6Z_PB=s96-c",
      ],
      view: 1,
      creatorsName: "Nguyễn  Nhật Thới",
      creatorsId: "64118f190eb15b06db3823e5",
      creatorsPhoto:
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/avt%2F1678872290515IMG_20201026_150848.JPG?alt=media&token=12b9c1cc-d424-472c-9891-63315671860f",
      date: "15/3/2023",
      time: "15:4:8",
      __v: 0,
    },
    {
      _id: "64118e110eb15b06db3823d8",
      userId: "64118ca80eb15b06db3823d4",
      title: "Very_easy_TOEIC",
      content: "[AnhNguMsHoa].Very_easy_TOEIC-PDF",
      docs_URL:
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/docs%2F64118ca80eb15b06db3823d4%2F1678871962339%5BAnhNguMsHoa%5D.Very_easy_TOEIC-PDF.pdf?alt=media&token=777f49ef-6eb2-4057-8266-447268386673",
      category: "NN",
      tag: ["Toeic", "Tiếng anh", "Ngữ pháp toeic"],
      isPrivate: false,
      like: [
        "https://lh3.googleusercontent.com/a/AEdFTp5ilWjDM_lV55J9fLCtS4Yq3r4pdmILENp6Z_PB=s96-c",
      ],
      view: 1,
      creatorsName: "Manobal Lalisa",
      creatorsId: "64118ca80eb15b06db3823d4",
      creatorsPhoto:
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/avt%2F1678871405874BLACKPINK_LISA_GMP_240622.PNG?alt=media&token=2e247203-fbc5-48ab-92e5-b7c623864b71",
      date: "15/3/2023",
      time: "15:4:8",
      __v: 0,
    },
    {
      _id: "641182dc0eb15b06db382183",
      userId: "64117d940eb15b06db382176",
      title: "Xây dựng ứng dụng quản lý danh bạ",
      content: "Xây dựng ứng dụng quản lý danh bạ phía backend sử dụng Nodejs",
      docs_URL:
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/docs%2F64117d940eb15b06db382176%2F1678869137665B1906581_NguyenHuuThuan_CT449-06_TH12.pdf?alt=media&token=17b3fe5b-73c7-4b38-afd5-9ed3bd84be37",
      category: "CNTT",
      tag: ["website", "CTU", "Backend", "NodeJs"],
      isPrivate: false,
      like: [
        "https://lh3.googleusercontent.com/a/AGNmyxZrB5kk-b-vK0-fpgw9Pc_VAWLuthyXrh2TYVV7Cw=s96-c",
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/avt%2F1678870771580Z4184096270537_A4968353D99229D58494CC5A1B94643F.JPG?alt=media&token=a7f3a51c-98a4-4b3a-a38c-06a18118db40",
        "https://lh3.googleusercontent.com/a/AEdFTp5ilWjDM_lV55J9fLCtS4Yq3r4pdmILENp6Z_PB=s96-c",
      ],
      view: 0,
      creatorsName: "Nguyen Huu Thuan B1906581",
      creatorsId: "64117d940eb15b06db382176",
      creatorsPhoto:
        "https://lh3.googleusercontent.com/a/AGNmyxZrB5kk-b-vK0-fpgw9Pc_VAWLuthyXrh2TYVV7Cw=s96-c",
      date: "15/3/2023",
      time: "15:4:8",
      __v: 0,
    },
    {
      _id: "641186d29ff7f3b5ffc07f56",
      userId: "641185ee9ff7f3b5ffc07f4c",
      title: "Báo cáo tham khảo niên luận ",
      content: "Tài liệu tham khảo niên luận ngành kỹ thuật phần mềm",
      docs_URL:
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/docs%2F641185ee9ff7f3b5ffc07f4c%2F1678870156849Tai_Lieu_Tham_Khao_Nien_Luan_Nganh.pdf?alt=media&token=d28522f3-340c-4620-b13c-cd7263887efb",
      category: "CNTT",
      tag: ["baocao", "kythuatphanmem", "nienluannganh"],
      isPrivate: false,
      like: [
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/avt%2F1678870771580Z4184096270537_A4968353D99229D58494CC5A1B94643F.JPG?alt=media&token=a7f3a51c-98a4-4b3a-a38c-06a18118db40",
        "https://lh3.googleusercontent.com/a/AGNmyxZrB5kk-b-vK0-fpgw9Pc_VAWLuthyXrh2TYVV7Cw=s96-c",
        "https://lh3.googleusercontent.com/a/AEdFTp5ilWjDM_lV55J9fLCtS4Yq3r4pdmILENp6Z_PB=s96-c",
      ],
      view: 0,
      creatorsName: "Võ Thị Kim Thơ",
      creatorsId: "641185ee9ff7f3b5ffc07f4c",
      creatorsPhoto:
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/avt%2F1678869945428Z4184096266428_3B4D2A5375F014002B87B117DC6ABD1C.JPG?alt=media&token=9af4fc59-be2d-427a-8421-83d81c5235f7",
      date: "15/3/2023",
      time: "15:29:0",
      __v: 0,
    },
    {
      _id: "641189f39ff7f3b5ffc07f7b",
      userId: "6411891d9ff7f3b5ffc07f5e",
      title: "Chất cấm trong chăn nuôi",
      content:
        "Bài giảng chất cấm trong chăn nuôi của trường đại học nông lâm....",
      docs_URL:
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/docs%2F6411891d9ff7f3b5ffc07f5e%2F1678870972470B%C3%A0i%20gi%E1%BA%A3ng%20Ch%E1%BA%A5t%20c%E1%BA%A5m%20trong%20ch%C4%83n%20nu%C3%B4i%20s%E1%BB%B1%20h%E1%BB%A7y%20ho%E1%BA%A1i%20s%E1%BB%A9c%20kh%E1%BB%8Fe%20ng%C6%B0%E1%BB%9Di%20s%E1%BB%AD%20d%E1%BB%A5ng%20-%20Tr%E1%BA%A7n%20Tu%E1%BA%A5n%20Sang_1030788.pdf?alt=media&token=87fcedd1-9e44-475b-bf20-9b9920fc3f81",
      category: "NLN",
      tag: ["chăn nuôi", "chất cấm", "nonglamngu"],
      isPrivate: false,
      like: [
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/avt%2F1678870771580Z4184096270537_A4968353D99229D58494CC5A1B94643F.JPG?alt=media&token=a7f3a51c-98a4-4b3a-a38c-06a18118db40",
        "https://lh3.googleusercontent.com/a/AGNmyxZrB5kk-b-vK0-fpgw9Pc_VAWLuthyXrh2TYVV7Cw=s96-c",
        "https://lh3.googleusercontent.com/a/AEdFTp5ilWjDM_lV55J9fLCtS4Yq3r4pdmILENp6Z_PB=s96-c",
      ],
      view: 0,
      creatorsName: "Hồ Bảo Toàn",
      creatorsId: "6411891d9ff7f3b5ffc07f5e",
      creatorsPhoto:
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/avt%2F1678870771580Z4184096270537_A4968353D99229D58494CC5A1B94643F.JPG?alt=media&token=a7f3a51c-98a4-4b3a-a38c-06a18118db40",
      date: "15/3/2023",
      time: "15:29:0",
      __v: 0,
    },
    {
      _id: "64118a889ff7f3b5ffc07f82",
      userId: "6411891d9ff7f3b5ffc07f5e",
      title: "Quản lý chất thải đô thị bằng phần mềm",
      content:
        "Xây dựng mô hình quản lý chất thải đô thị bằng phần mềm (computer)...",
      docs_URL:
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/docs%2F6411891d9ff7f3b5ffc07f5e%2F1678871067326X%C3%A2y%20d%E1%BB%B1ng%20m%C3%B4%20h%C3%ACnh%20qu%E1%BA%A3n%20l%C3%BD%20ch%E1%BA%A5t%20th%E1%BA%A3i%20r%E1%BA%AFn%20%C4%91%C3%B4%20th%E1%BB%8B%20b%E1%BA%B1ng%20ph%E1%BA%A7n%20m%E1%BB%81m%20waste%20(computer%20tool%20for%20solid%20waste%20management)%2C%20b%C6%B0%E1%BB%9Bc%20%C4%91%E1%BA%A7u%20tin%20h%E1%BB%8Dc%20h%C3%B3a%20%E1%BB%A9ng%20d%E1%BB%A5ng%20qu%E1%BA%A3n%20l%C3%BD%20ch%E1%BA%A5t%20th%E1%BA%A3i%20t%E1%BA%A1i%20Tp.%20H%E1%BB%93%20Ch%C3%AD%20Minh_1166048.pdf?alt=media&token=2eb1552e-b564-45ac-bf0e-f4d678611613",
      category: "KTQL",
      tag: ["maytinh", "chatthai", "xaydungphanmem"],
      isPrivate: false,
      like: [
        "https://lh3.googleusercontent.com/a/AEdFTp5ilWjDM_lV55J9fLCtS4Yq3r4pdmILENp6Z_PB=s96-c",
      ],
      view: 0,
      creatorsName: "Hồ Bảo Toàn",
      creatorsId: "6411891d9ff7f3b5ffc07f5e",
      creatorsPhoto:
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/avt%2F1678870771580Z4184096270537_A4968353D99229D58494CC5A1B94643F.JPG?alt=media&token=a7f3a51c-98a4-4b3a-a38c-06a18118db40",
      date: "15/3/2023",
      time: "15:29:0",
      __v: 0,
    },
    {
      _id: "641183570eb15b06db382187",
      userId: "64117d940eb15b06db382176",
      title: "Giáo trình VueJS",
      content: "Giáo trình VueJS tại CTU",
      docs_URL:
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/docs%2F64117d940eb15b06db382176%2F16788692568364.VueJS.pdf?alt=media&token=49af3a0d-0448-4c2a-9302-b1277bb19ead",
      category: "CNTT",
      tag: ["CTU", "VueJS", "Front-end", "Ứng dụng web"],
      isPrivate: false,
      like: [
        "https://lh3.googleusercontent.com/a/AGNmyxZrB5kk-b-vK0-fpgw9Pc_VAWLuthyXrh2TYVV7Cw=s96-c",
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/avt%2F1678870771580Z4184096270537_A4968353D99229D58494CC5A1B94643F.JPG?alt=media&token=a7f3a51c-98a4-4b3a-a38c-06a18118db40",
        "https://lh3.googleusercontent.com/a/AEdFTp5ilWjDM_lV55J9fLCtS4Yq3r4pdmILENp6Z_PB=s96-c",
      ],
      view: 0,
      creatorsName: "Nguyen Huu Thuan B1906581",
      creatorsId: "64117d940eb15b06db382176",
      creatorsPhoto:
        "https://lh3.googleusercontent.com/a/AGNmyxZrB5kk-b-vK0-fpgw9Pc_VAWLuthyXrh2TYVV7Cw=s96-c",
      date: "15/3/2023",
      time: "15:4:8",
      __v: 0,
    },
    {
      _id: "64118bbf9ff7f3b5ffc07f86",
      userId: "6411891d9ff7f3b5ffc07f5e",
      title: "Ebook",
      content: "Thực hành dịch tể học",
      docs_URL:
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/docs%2F6411891d9ff7f3b5ffc07f5e%2F1678871441534Ebook%20Th%E1%BB%B1c%20h%C3%A0nh%20d%E1%BB%8Bch%20t%E1%BB%85%20h%E1%BB%8Dc_%20Ph%E1%BA%A7n%201_991270.pdf?alt=media&token=c7734ca1-2f08-4481-a954-ebdf43f8f40c",
      category: "YTSK",
      tag: ["ebook", "ykhoa", "dich te "],
      isPrivate: false,
      like: [
        "https://lh3.googleusercontent.com/a/AEdFTp5ilWjDM_lV55J9fLCtS4Yq3r4pdmILENp6Z_PB=s96-c",
      ],
      view: 0,
      creatorsName: "Hồ Bảo Toàn",
      creatorsId: "6411891d9ff7f3b5ffc07f5e",
      creatorsPhoto:
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/avt%2F1678870771580Z4184096270537_A4968353D99229D58494CC5A1B94643F.JPG?alt=media&token=a7f3a51c-98a4-4b3a-a38c-06a18118db40",
      date: "15/3/2023",
      time: "15:29:0",
      __v: 0,
    },
    {
      _id: "641184110eb15b06db38218b",
      userId: "64117d940eb15b06db382176",
      title: "Giáo trình ngôn ngữ C",
      content: "Giáo trình ngôn ngữ C chi tiết và đầy đủ nhất",
      docs_URL:
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/docs%2F64117d940eb15b06db382176%2F1678869400510Giao_Trinh_C_Can_Ban.pdf?alt=media&token=b4284bbe-0a67-4f57-9ef6-2e302f2fb5d9",
      category: "CNTT",
      tag: ["Giáo trình", "C", "CNTT", "Lập trình cơ bản"],
      isPrivate: false,
      like: [
        "https://lh3.googleusercontent.com/a/AGNmyxZrB5kk-b-vK0-fpgw9Pc_VAWLuthyXrh2TYVV7Cw=s96-c",
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/avt%2F1678870771580Z4184096270537_A4968353D99229D58494CC5A1B94643F.JPG?alt=media&token=a7f3a51c-98a4-4b3a-a38c-06a18118db40",
        "https://lh3.googleusercontent.com/a/AEdFTp5ilWjDM_lV55J9fLCtS4Yq3r4pdmILENp6Z_PB=s96-c",
      ],
      view: 0,
      creatorsName: "Nguyen Huu Thuan B1906581",
      creatorsId: "64117d940eb15b06db382176",
      creatorsPhoto:
        "https://lh3.googleusercontent.com/a/AGNmyxZrB5kk-b-vK0-fpgw9Pc_VAWLuthyXrh2TYVV7Cw=s96-c",
      date: "15/3/2023",
      time: "15:4:8",
      __v: 0,
    },
    {
      _id: "64118cee9ff7f3b5ffc07f90",
      userId: "64118bd89ff7f3b5ffc07f8c",
      title: "Management accounting",
      content:
        "Information for creating and managing value (4_e)_ Chapter 18 - Kim Langfield-Smith, Helen Thorne_1113896",
      docs_URL:
        "https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/docs%2F64118bd89ff7f3b5ffc07f8c%2F1678871589827Management%20accounting_%20Information%20for%20creating%20and%20managing%20value%20(4_e)_%20Chapter%2018%20-%20Kim%20Langfield-Smith%2C%20Helen%20Thorne_1113896.pdf?alt=media&token=b591abd9-8aef-4893-9d81-ca6b90eb0014",
      category: "KTQL",
      tag: [
        "chapter18",
        "Kim Langfield-Smith",
        "Helen Thorne",
        "Management accounting",
      ],
      isPrivate: false,
      like: [
        "https://lh3.googleusercontent.com/a/AEdFTp5ilWjDM_lV55J9fLCtS4Yq3r4pdmILENp6Z_PB=s96-c",
      ],
      view: 0,
      creatorsName: "Ngọc Vi Lê",
      creatorsId: "64118bd89ff7f3b5ffc07f8c",
      creatorsPhoto:
        "https://lh3.googleusercontent.com/a/AEdFTp5ilWjDM_lV55J9fLCtS4Yq3r4pdmILENp6Z_PB=s96-c",
      date: "15/3/2023",
      time: "15:29:0",
      __v: 0,
    },
  ]);
  function renderCategory(value) {
    const category = CategoryArr.find((item) => item.value === value);
    const categoryName = category ? category.name : "Tất cả Danh Mục";
    return categoryName;
  }
  function BoxDocs() {
    return (
      <>
        {dataDocs &&
          dataDocs?.map((i) => {
            return (
              <div className="">
                <div className=" w-full  flex justify-center items-center">
                  <div className=" w-full py-5 px-8 bg-blue-100 justify-center items-center ">
                    <div class="block">
                      {dataDocs &&
                        dataDocs.map((item, index) => {
                          return (
                            <div class="flex flex-col justify-center w-full my-2 ">
                              <div class="w-full  relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-3   mx-auto border border-white bg-white">
                                <p className="bg-green-100 w-auto h-8 flex text-md absolute -z-1 rounded-tl-lg rounded-br-full top-0 left-0">
                                  <span className="p-1">
                                    {renderCategory(item?.category)}
                                    {/* <renderCategory value={item?.category} /> */}
                                  </span>
                                </p>
                                <div class="w-full h-full md:w-1/3  bg-white md:grid md:place-items-center top-4 ">
                                  <iframe
                                    class="w-full h-[70%] overflow-hidden overflow-y-hidden overflow-x-hidden rounded cursor-grabbing  shadow-lg box-decoration-clone"
                                    src={item?.docs_URL}
                                    title="W3Schools Free Online Web Tutorials"
                                    frameborder="0"
                                    scrolling="0"
                                  />
                                </div>
                                <div class="w-full md:w-2/3  bg-white md:flex md:flex-col md:space-y-2 md:p-3">
                                  <div class="flex justify-between item-center">
                                    <p class="text-gray-500 font-medium hidden md:block">
                                      {item?.view} Lượt xem
                                    </p>
                                  </div>
                                  <h3 class=" text-gray-800 md:text-lg text-[16px] font-light">
                                    <NavLink to={`/tailieu/view/${item?._id}`}>
                                      <h3 class="text-gray-900 hover:text-blue-500 cursor-pointer font-extrabold m-1 py-1 ">
                                        {item?.title.substring(0, 27) + "..."}
                                      </h3>
                                    </NavLink>
                                  </h3>
                                  <p class="md:text-xs font-thin text-gray-500 text-base">
                                    {item?.content.substring(0, 90) + " ..."}
                                  </p>

                                  <div className="text-xs text-blue-800 w-auto h-auto whitespace-nowrap flex">
                                    {item?.tag.slice(0, 3).map((i) => {
                                      return (
                                        <>
                                          <div>
                                            <div class="inline-block relative py-1 text-xs mx-1">
                                              <div class="absolute inset-0 text-blue-200 flex">
                                                <svg
                                                  height="100%"
                                                  viewBox="0 0 50 100"
                                                >
                                                  <path
                                                    d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
                                                    fill="currentColor"
                                                  />
                                                </svg>
                                                <div class="flex-grow h-full -ml-px bg-blue-200 rounded-md rounded-l-none"></div>
                                              </div>
                                              <span class="relative text-blue-500 uppercase font-semibold pr-px">
                                                <span>
                                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                                </span>
                                                {i}
                                                <span>&nbsp;</span>
                                              </span>
                                            </div>
                                          </div>
                                        </>
                                      );
                                    })}
                                  </div>

                                  <p className="bg-blue-100 flex text-md absolute -z-1 px-2 py-2  rounded-tl-3xl rounded-br-lg bottom-0 right-0 items-end">
                                    <img
                                      src={item?.creatorsPhoto}
                                      alt="avatar"
                                      className="w-8 h-8 rounded-full mr-2 "
                                    />
                                    <NavLink to={`/u/${item?.userId}`}>
                                      <h1 className="text-md text-blue-900  hover:text-green-400  hover:font-semibold  cursor-pointer">
                                        {item?.creatorsName}
                                      </h1>
                                    </NavLink>
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </>
    );
  }

  function ListCategory() {
    return (
      <>
        <select
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a category</option>
          {CategoryArr.map((i) => {
            return (
              <>
                <option value={i.value}>{i.name}</option>
              </>
            );
          })}
        </select>
      </>
    );
  }
  return (
    <>
      <Card>
        <CardHeader color="purple" contentPosition="left">
          <h2 className="text-white text-2xl">Featured Users</h2>
        </CardHeader>
        <div className="w-72">
          <ListCategory />
        </div>
        <CardBody>
          <div className="overflow-x-auto">
            <BoxDocs />
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default TableDoc;
