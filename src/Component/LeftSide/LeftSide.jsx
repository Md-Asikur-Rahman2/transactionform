import { useState } from "react";
import bank from "../../assets/bank.png";
import { Button, Input, Upload, Space, Form } from "antd";

import { UploadOutlined } from "@ant-design/icons";
import { UserOutlined, BankOutlined, WalletOutlined } from "@ant-design/icons";
import Zoom from "react-img-zoom-gdn";

import qrCode from "./qr.png"
import {AiFillHome, AiFillMoneyCollect, AiFillPhone, AiFillProfile, AiOutlineMail} from "react-icons/ai"
const CustomDropdown = ({ options, onSelect, selectedOption }) => {
  const handleChange = (e) => {
    onSelect(e.target.value);
  };
 
  return (
    <div className="flex items-center">
      <select
        className="select select-primary w-32 mr-3 p-2"
        value={selectedOption}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {/* <button className="btn btn-primary btn-sm p-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white">
        {selectedOption}
      </button> */}
    </div>
  );
};

const LeftSide = () => {
  const [bankdata, setBankData] = useState("Bank");
  const [selectedCurrency, setSelectedCurrency] = useState("BDT");
  const [selectedCountry, setSelectedCountry] = useState("Bangladesh");
  const [selectedBank, setSelectedBank] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Bkash");
  const [selectedFile, setSelectedFile] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  const handleFromData = (option) => {
    setBankData(option);
  };

  const handleCurrencyChange = (option) => {
    setSelectedCurrency(option);
  };

  const handleFileChange = (file) => {
    setSelectedFile(file.fileList[0].originFileObj);
  };

  const handleSubmit = () => {
    const data = {
      "Total amount": "$5870",
      "Pay amount": "Your Pay Amount Value", // Replace with actual input value
      "Selected Payment Method": bankdata,
      "Selected Currency": selectedCurrency,
    };

    setSubmittedData(data);
  };

  return (
    <div className="md:p-5 flex flex-col  justify-center items-center bg-white">
      <div className="flex flex-col  justify-center">
        <Space className="my-2 flex">
          <Button
            className="btn btn-primary h-full py-4 btn-sm md:mr-2 mr-1 p-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white"
            icon={<WalletOutlined />}
          >
            Amount $60000
          </Button>
          <Input
            placeholder="Pay amount"
            className=" w-full max-w-xs input-primary p-2 bg-white"
            prefix={<BankOutlined className="text-primary" />}
          />
          <CustomDropdown
            options={["USD", "BDT", "EUR", "BUST"]}
            onSelect={handleCurrencyChange}
          />
        </Space>

        <div onChange={handleFromData} className="mt-4 flex justify-start">
          <Button
            className="btn btn-primary h-full py-4 btn-sm md:mr-2 mr-1 p-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white"
            icon={<WalletOutlined />}
          >
            Select Payment Method
          </Button>
          <div className="flex flex-col-reverse">
            <select
              name="selectBank"
              defaultValue={"select"}
              className="select select-primary w-full max-w-xs p-2"
              onChange={(e) => setSelectedBank(e.target.value)}
            >
              <option value={"select"}>Select One</option>
              <option>Bank</option>
              <option>Mobile E-Wallet</option>
            </select>
          </div>
        </div>

        {selectedBank && (
          <div className="mt-4 md:flex items-center ">
            <Button
              className="btn btn-primary h-full md:mr-2 mr-1 btn-sm mb-3 p-2 py-4 bg-gradient-to-r from-pink-500 to-violet-500 text-white"
              icon={<BankOutlined />}
            >
              Country
            </Button>
            <div className="flex flex-col-reverse">
              <select
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="select select-primary w-full max-w-xs p-2"
              >
                <option disabled selected>
                  Select One
                </option>
                <option>Bangladesh</option>
                <option>India</option>
              </select>
            </div>
          </div>
        )}
        {selectedBank && selectedCountry === "Bangladesh" ? (
          <div className="mt-4 flex items-center">
            <Button
              className="btn btn-primary py-4 h-full md:mr-2 mr-1 btn-sm  p-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white"
              icon={<BankOutlined />}
            >
              Bangladesh Mobile Bank
            </Button>
            <div className="flex">
              <select
                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                className="select select-primary w-full max-w-xs p-2"
              >
                <option disabled selected>
                  Select One
                </option>
                <option>Bkash</option>
                <option>Nagad</option>
                <option>Rocket</option>
              </select>
            </div>
          </div>
        ) : (
          <>
            {selectedBank && selectedCountry === "India" && (
              <div className="mt-4 flex items-center">
                <Button
                  className="btn btn-primary py-4 h-full md:mr-2 mr-1 btn-sm  p-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white"
                  icon={<BankOutlined />}
                >
                  India Mobile Bank Name
                </Button>
                <div className="flex flex-col-reverse">
                  <select
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                    className="select select-primary w-full max-w-xs p-2"
                  >
                    <option disabled selected>
                      Select One
                    </option>
                    <option>HHDFC Bank</option>
                    <option>ICIC Bank</option>
                    <option>Axis Bank</option>
                  </select>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      <div className="mt-8  items-center">
        <div className="flex">
          <div>
            <img className="w-40 mx-auto" src={bank} alt="" />
          </div>
          <div className="md:mx-8 mt-5 items-start">
            <h1 className="text-center">Bank : {selectedBank}</h1>
            <h1 className="text-center">Country : {selectedCountry}</h1>
            <h1 className="text-center">Currency : {selectedCurrency}</h1>
            <h1 className="text-center">Payment Method : {selectedPaymentMethod}</h1>
          </div>
          <div className="md:mx-8 mt-5 items-start">
            {/* <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                 
                  src: "/qr.png",
                  width: 150,
                  height:150
                },
                largeImage: {
                  src: "/qr.png",
                  width: 1200,
                  height: 1800,
                  
                },
                enlargedImagePosition:"over"
              }}
            /> */}
            <Zoom img="/qr.png" zoomScale={3} width={200} height={200} />;
            {/* <img className="w-40 mx-auto" src={"/qr.png"} alt="" /> */}
          </div>
        </div>
      </div>

      <Button
        className="btn  btn-primary btn-sm md:mr-2 mr-1 mb-3 p-2 py-4 px-10 w-[50vw] bg-gradient-to-r from-pink-500 to-violet-500 h-full text-white"
        icon={<BankOutlined />}
      >
        Your Transfer Account details
      </Button>
      <div className="flex flex-col">
        <div className="flex items-center justify-center ">
          <Button
            className="btn  btn-primary btn-sm md:mr-2 mr-1  p-2 py-4 px-5  bg-gradient-to-r from-pink-500 to-violet-500 h-full text-white"
            icon={<AiFillMoneyCollect />}
          >
            Transaction Id:
          </Button>
          <Input
            placeholder="Transaction Id"
            className=" w-full max-w-xs input-primary p-2 my-2"
            prefix={<AiFillMoneyCollect className="text-primary" />}
          />
        </div>
        <div className="flex items-center justify-center ">
          <Button
            className="btn  btn-primary btn-sm md:mr-2 mr-1  p-2 py-4 px-5  bg-gradient-to-r from-pink-500 to-violet-500 h-full text-white"
            icon={<BankOutlined />}
          >
            Account Info:
          </Button>
          <Input
            placeholder="Acount Info"
            className=" w-full max-w-xs input-primary p-2 my-2"
            prefix={<UserOutlined className="text-primary" />}
          />
        </div>
        <div className="flex items-center justify-center ">
          <Button
            className="btn  btn-primary btn-sm md:mr-2 mr-1  p-2 py-4 px-5  bg-gradient-to-r from-pink-500 to-violet-500 h-full text-white"
            icon={<BankOutlined />}
          >
            Account Holder Gmail
          </Button>
          <Input
            placeholder="Account Holder Gmail"
            className=" w-full max-w-xs input-primary p-2 my-2"
            prefix={<AiFillProfile className="text-primary" />}
          />
        </div>
        <div className="flex items-center justify-center ">
          <Button
            className="btn  btn-primary btn-sm md:mr-2 mr-1  p-2 py-4 px-5  bg-gradient-to-r from-pink-500 to-violet-500 h-full text-white"
            icon={<AiFillHome />}
          >
            Account Holder Phone No:
          </Button>
          <Input
            placeholder="Account Holder Phone No"
            className=" w-full max-w-xs input-primary p-2 my-2"
            prefix={<UserOutlined className="text-primary" />}
          />
        </div>
        <div className="flex items-center justify-center">
          <Button
            className="btn btn-primary btn-sm md:mr-2 mr-1 py-4 px-5 h-full bg-gradient-to-r from-pink-500 to-violet-500 text-white"
            icon={<BankOutlined />}
          >
            Payment Receipt document
          </Button>
          {selectedFile && (
            <div className="mt-4">
              <h2 className="text-xl mb-3">Uploaded Image</h2>
              <img
                className="w-32 h-32 mx-auto"
                src={URL.createObjectURL(selectedFile)}
                alt="Uploaded"
              />
            </div>
          )}
          <Upload
            className=" w-full max-w-xs rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 text-white input-primary p-2 my-2"
            onChange={handleFileChange}
            beforeUpload={() => false}
            fileList={[]}
          >
            <Button icon={<UploadOutlined />} className="text-white">
              Upload Image
            </Button>
          </Upload>
        </div>
        <div className="flex justify-start items-center">
          <Button
            className="btn btn-primary btn-sm md:mr-2 mr-1 p-2 py-4 h-full bg-gradient-to-r from-pink-500 to-violet-500 text-white"
            icon={<UserOutlined />}
          >
            User Name
          </Button>
          <Input
            placeholder="Full Name"
            className=" w-full max-w-xs input-primary p-2 my-2 rounded-md focus:ring focus:ring-primary"
            prefix={<UserOutlined className="text-primary" />}
          />
        </div>
        <div className="flex justify-start items-center">
          <Button
            className="btn btn-primary btn-sm md:mr-2 mr-1 p-2 py-4 h-full bg-gradient-to-r from-pink-500 to-violet-500 text-white"
            icon={<AiOutlineMail />}
          >
            Email Address
          </Button>
          <Input
            placeholder="Email"
            className=" w-full max-w-xs input-primary p-2 my-2"
            prefix={<AiOutlineMail className="text-primary" />}
          />
        </div>
        <div className="flex justify-start items-center">
          <Button
            className="btn btn-primary btn-sm md:mr-2 mr-1 p-2 py-4 h-full bg-gradient-to-r from-pink-500 to-violet-500 text-white"
            icon={<AiFillPhone />}
          >
            Phone Number
          </Button>

          <Input
            placeholder="Phone Number"
            className=" w-full max-w-xs input-primary p-2 my-2"
            prefix={<AiFillPhone className="text-primary" />}
          />
        </div>
      </div>

      <div className="mt-5">
        <Button
          className="btn btn-primary block mx-auto h-full w-[50vw] py-4 px-36 btn-sm p-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white"
          onClick={handleSubmit}
          icon={<BankOutlined />}
        >
          Submit
        </Button>
      </div>

      {submittedData && (
        <div className="mt-8 border-t border-gray-300 pt-5">
          <h2 className="text-xl mb-3">Preview Data</h2>
          {Object.entries(submittedData).map(([key, value]) => (
            <div key={key} className="flex mb-2">
              <div className="w-32">{key}:</div>
              <div>{value}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LeftSide;
