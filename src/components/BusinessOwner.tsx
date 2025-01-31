import { IoDocumentTextOutline } from "react-icons/io5";
import { useFormContext } from "react-hook-form";
import TextInput from "./TextInput";
import Dropdown from "./Dropdown";
import { provinces } from "../utils/provinces";
import { citizenship } from "../utils/citizenship";

const BusinessOwner = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext(); 

  return (
    <div className="border-2 border-blue-400 rounded-md w-[50vw] max-md:w-[90vw]">
      <div className="business-owner flex items-center space-x-1 bg-blue-100 p-2">
        <IoDocumentTextOutline className="text-blue-500" />
        <p className="text-blue-500 text-sm">Business Owner Details</p>
      </div>
      <div className="business-owner-form p-4 mb-10">
        <p className="font-bold pb-2">Business Owner Details</p>
        <div className="flex flex-col space-y-4">
          <Dropdown
            label="Applicant Citizenship"
            name="businessOwner.national"
            options={citizenship}
            placeholder="Select citizenship"
            {...register("businessOwner.national")}
          />
          {errors?.businessOwner?.national && <p className="text-red-500">{errors.businessOwner.national.message}</p>}

          <TextInput
            label="ID Number"
            placeholder="Enter ID number"
            id="businessOwner.id"
            {...register("businessOwner.id")}
          />
          {errors?.businessOwner?.id && <p className="text-red-500">{errors.businessOwner.id.message}</p>}

          <TextInput
            label="Surname"
            placeholder="Enter Your Surname"
            id="businessOwner.surname"
            {...register("businessOwner.surname")}
          />
          {errors?.businessOwner?.surname && <p className="text-red-500">{errors.businessOwner.surname.message}</p>}

          <Dropdown
            label="Province"
            name="businessOwner.province"
            options={provinces}
            placeholder="Select Province"
            {...register("businessOwner.province")}
          />
          {errors?.businessOwner?.province && <p className="text-red-500">{errors.businessOwner.province.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default BusinessOwner;
