import { IoDocumentTextOutline } from "react-icons/io5";
import { useFormContext } from "react-hook-form";
import { importation } from "../utils/importation";
import { measurementUnit } from "../utils/MeasurementUnit";
import { productCategory } from "../utils/ProductCategory";
import Dropdown from "./Dropdown";
import TextInput from "./TextInput";



const ProductInformation = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="border-2 border-blue-400 rounded-md w-[50vw] max-md:w-[90vw]">
      <div className="business-details flex items-center space-x-1 bg-blue-100 p-2">
        <IoDocumentTextOutline className="text-blue-500" />
        <p className="text-blue-500 text-sm">Product Information</p>
      </div>
      <p className="font-bold pb-2 p-2">Important Details</p>
      <div className="business-details-form p-4 mb-10 flex flex-col space-y-4">
        <Dropdown
          label="Purpose of importation"
          name="productInformation.purposeOfImportation"
          options={importation}
          required
          placeholder="Select the purpose of importation"
          {...register("productInformation.purposeOfImportation")}
        />
        {errors.productInformation?.purposeOfImportation && (
          <p className="text-red-500 text-sm">
            {errors.productInformation.purposeOfImportation.message}
          </p>
        )}

        <p className="font-bold pb-2">Product Details</p>

        <Dropdown
          label="Product Category"
          name="productInformation.productCategory"
          options={productCategory}
          required
          placeholder="Select Product Category"
          {...register("productInformation.productCategory")}
        />
        {errors.productInformation?.productCategory && (
          <p className="text-red-500 text-sm">
            {errors.productInformation.productCategory.message}
          </p>
        )}

        <TextInput
          label="Weight (kg)"
          placeholder="Weight (kg)"
          id="weight"
          type="number"
          required
          {...register("productInformation.weight")}
        />
        {errors.productInformation?.weight && (
          <p className="text-red-500 text-sm">
            {errors.productInformation.weight.message}
          </p>
        )}

        <div className="flex space-x-4 justify-between">
          <Dropdown
            label="Unit of Measurement"
            name="productInformation.unitOfMeasurement"
            options={measurementUnit}
            required
            placeholder="Enter unit of measurement"
            {...register("productInformation.unitOfMeasurement")}
          />
          {errors.productInformation?.unitOfMeasurement && (
            <p className="text-red-500 text-sm">
              {errors.productInformation.unitOfMeasurement.message}
            </p>
          )}

          <TextInput
            label="Quantity of product(s)"
            placeholder="Enter quantity"
            id="quantity"
            required
            type="number"
            {...register("productInformation.quantity", { valueAsNumber: true })}
          />
          {errors.productInformation?.quantity && (
            <p className="text-red-500 text-sm">
              {errors.productInformation.quantity.message}
            </p>
          )}
        </div>

        <div className="flex flex-col space-y-4">
          <label htmlFor="productDescription">
            Description of products<span className="text-red-500">*</span>
          </label>
          <textarea
            id="productDescription"
            rows={6}
            cols={40}
            placeholder="Enter product description"
            className="border-2 border-slate-300 p-2 rounded-md"
            {...register("productInformation.productDescription")}
          ></textarea>
          {errors.productInformation?.productDescription && (
            <p className="text-red-500 text-sm">
              {errors.productInformation.productDescription.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
