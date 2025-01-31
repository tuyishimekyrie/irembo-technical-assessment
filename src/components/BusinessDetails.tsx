import { IoDocumentTextOutline } from "react-icons/io5";
import Dropdown from "./Dropdown";
import { businessTypes } from "../utils/Businesstypes";
import TextInput from "./TextInput";
import { useFormContext } from "react-hook-form";

const BusinessDetails = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="border-2 border-blue-400 rounded-md w-[50vw] max-md:w-[90vw]">
      <div className="business-details flex items-center space-x-1 bg-blue-100 p-2">
        <IoDocumentTextOutline className="text-blue-500" />
        <p className="text-blue-500 text-sm">Business Details</p>
      </div>
      <div className="business-details-form p-4 mb-10 flex flex-col space-y-4">
        <div className="flex space-x-4 justify-between">
          <Dropdown
            label="Business Type"
            name="businessDetails.type"
            options={businessTypes}
            required
            placeholder="Select Business Type"
            value={watch("businessDetails.type")}
            onChange={(value) => setValue("businessDetails.type", value)}
          />
          <TextInput
            label="Company name"
            placeholder="Enter company name"
            id="businessDetails.name"
            required
            {...register("businessDetails.name")}
            error={errors.businessDetails?.name?.message}
          />
        </div>
        <div className="flex space-x-4 justify-between">
          <TextInput
            label="TIN number"
            placeholder="Enter TIN number"
            id="tinNumber"
            required
            {...register("businessDetails.tinNumber")}
            error={errors.businessDetails?.tinNumber?.message}
          />
          <TextInput
            label="Registration date"
            placeholder="Select date"
            id="registrationDate"
            type="date"
            {...register("businessDetails.registrationDate")}
            error={errors.businessDetails?.registrationDate?.message}
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
