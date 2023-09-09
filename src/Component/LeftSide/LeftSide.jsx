import { useState } from "react";
import bank from "../../assets/bank.png";
import { Button, Input, Upload, Space, Form } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { UserOutlined, BankOutlined, WalletOutlined } from "@ant-design/icons";
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
      <div className="flex justify-start items-center">
        <Button
          className="btn btn-primary btn-sm md:mr-2 mr-1 p-2 py-4 h-full bg-gradient-to-r from-pink-500 to-violet-500 text-white"
          icon={<UserOutlined />}
        >
          Name
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
          Email
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
          Phone
        </Button>

        <Input
          placeholder="Phone Number"
          className=" w-full max-w-xs input-primary p-2 my-2"
          prefix={<AiFillPhone className="text-primary" />}
        />
      </div>

      <Space className="my-2">
        <Button
          className="btn btn-primary h-full py-4 btn-sm md:mr-2 mr-1 p-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white"
          icon={<WalletOutlined />}
        >
          Pay Amount $60000
        </Button>
        <Input
          placeholder="Pay amount"
          className=" w-full max-w-xs input-primary p-2 bg-white"
          prefix={<BankOutlined className="text-primary" />}
        />
        <CustomDropdown options={["USD", "BDT"]} onSelect={handleCurrencyChange} />
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
          >
            <option value={"select"}>Select One</option>
            <option>Bank</option>
            <option>Mobile E-Wallet</option>
          </select>
        </div>
      </div>

      {bankdata === "Mobile E-Wallet" ? (
        <div className="mt-4 md:flex items-center ">
          <Button
            className="btn btn-primary md:mr-2 mr-1 btn-sm mb-3 p-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white"
            icon={<BankOutlined />}
          >
            Country
          </Button>
          <div className="flex flex-col-reverse">
            <select className="select select-primary w-full max-w-xs p-2">
              <option disabled selected>
                Select One
              </option>
              <option>Bangladesh</option>
              <option>India</option>
              <option>Nepal</option>
            </select>
          </div>
        </div>
      ) : (
        <div className="mt-4 flex items-center justify-between ">
          <Button
            className="btn btn-primary py-4 h-full md:mr-2 mr-1 btn-sm  p-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white"
            icon={<BankOutlined />}
          >
            Bank Name
          </Button>
          <div className="flex flex-col-reverse ">
            <select className="select select-primary w-full max-w-xs p-2">
              <option disabled selected>
                Select One
              </option>
              <option>Cimg Bank</option>
              <option>Sonali Bank</option>
              <option>Eastern Bank</option>
            </select>
          </div>
        </div>
      )}

      <div className="mt-8  items-center">
        <div className="flex">
          <div>
            <img className="w-40 mx-auto" src={bank} alt="" />
          </div>
          <div className="md:mx-8 mt-5 items-start">
            <h1 className="text-center">A/C No : 20200002020</h1>
            <h1 className="text-center">A/C Name : Arju chandra Das</h1>
            <h1 className="text-center">A/C Type : Current</h1>
            <h1 className="text-center">IFSC : Ratnovaapvs</h1>
          </div>
          <div className="md:mx-8 mt-5 items-start">
            <img className="w-40 mx-auto" src={bank} alt="" />
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-row lg:flex-row items-center">
        <Button
          className="btn btn-primary btn-sm md:mr-2 mr-1 mb-3 p-2 py-4 px-3 bg-gradient-to-r from-pink-500 to-violet-500 h-full text-white"
          icon={<BankOutlined />}
        >
          Remittance bank details
        </Button>
        <Button
          className="btn btn-sm btn-primary md:mr-2 mr-1 mb-3  py-4 px-3 bg-gradient-to-r from-pink-500 to-violet-500 h-full text-white"
          icon={<BankOutlined />}
        >
          Bank Details
        </Button>
        <Button
          className="btn btn-primary h-full w-full md:w-60 btn-sm mb-3 md-mb-0 py-4 px-3 bg-gradient-to-r from-pink-500 to-violet-500 text-white"
          icon={<BankOutlined />}
        >
          Payment Receipt Document
        </Button>
      </div>
      <Button
        className="btn w-full btn-primary btn-sm md:mr-2 mr-1 mb-3 p-2 py-4 px-5 bg-gradient-to-r from-pink-500 to-violet-500 h-full text-white"
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

          <Upload
            className=" w-full max-w-xs bg-white input-primary p-2 my-2"
            onChange={handleFileChange}
            beforeUpload={() => false}
            fileList={[]}
          >
            <Button icon={<UploadOutlined />}>Upload Image</Button>
          </Upload>
        </div>
      </div>

      <div className="mt-5">
        <Button
          className="btn btn-primary block mx-auto h-full py-4 px-36 btn-sm p-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white"
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
    </div>
  );
};

export default LeftSide;