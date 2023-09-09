
import up from "../../../assets/up.svg";


const Right = () => {
  return (
    <div className="md:p-5">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
        <button className="btn btn-primary ">
          Total amount:$5870
        </button>
        <div className="flex flex-col-reverse w-28">
          <select className="select select-primary w-full max-w-xs">
            <option disabled selected>
              Select
            </option>
            <option>BDT</option>
            <option>USD</option>
            <option>INR</option>
          </select>
        </div>
        <div className="form-control ">
          <input
            type="text"
            placeholder="Pay amount"
            className="input input-bordered w-full max-w-xs input-primary"
          />
        </div>
      </div>
      <div className="divider"></div>
      <div className="mt-7 flex items-center">
        <button className="btn btn-primary btn-sm md:mr-7 mr-3">
          Select Payment Method
        </button>
        <div className="flex flex-col-reverse">
        <select className="select select-primary w-full max-w-xs">
        <option disabled selected>Select One</option>
        <option>Mobile E-Wallet</option>
        <option>Card</option>
      </select>
        </div>
      </div>
      <div className="mt-8 md:flex items-center ">
        <button className="btn btn-primary md:mr-7 mr-3  btn-sm mb-3">
          Country
        </button>
        <div className="flex flex-col-reverse">
        <select className="select select-primary w-full max-w-xs">
        <option disabled selected>Select One</option>
        <option>Bangladesh</option>
        <option>India</option>
        <option>Nepal</option>
      </select>
        </div>
      </div>
      <div className="mt-8 md:flex  ">
        <button className="btn btn-primary md:mr-7 mr-3 btn-sm mb-3">
          Types of mobile banking
        </button>
        <div className="flex flex-col-reverse">
        <select className="select select-primary w-full max-w-xs">
        <option disabled selected>Select One</option>
        <option>Bkash</option>
        <option>Nogod</option>
      </select>
        </div>
      </div>
      <div className="mt-10 ">
        <h1>Nagad Number : 0185274855</h1>
        <h1>Account Type : agent</h1>
        <h1>Address : Dhaka</h1>
      </div>
      <div className="mt-8">
        <button className="btn btn-primary btn-sm   md:mr-7 mr-3">
          Remittance Mobile E-Wallet
        </button>
      </div>
      <div className="mt-8">
        <button className="btn btn-sm btn-primary    md:mr-7 mr-3">
          Wallet Details
        </button>
        <div className="mt-5 mx-5">
        <h1>Nagad Number : 0185274855</h1>
        <h1>Account Type : agent</h1>
        <h1>Address : Dhaka</h1>
      </div>
      </div>
      <div className="mt-5">
        <div className="flex items-center md:mx-20 mx-10">
          <button className="btn btn-primary btn-sm   md:mr-7 mr-3">
            Payment Recept document
          </button>
          <img className="w-14" src={up} alt="" />
        </div>
      </div>
      <div className="mt-5 ">
        <button className="btn btn-primary w-60  btn-sm md:mr-7 mr-3">
          submit
        </button>
      </div>
    </div>
  );
};

export default Right;
