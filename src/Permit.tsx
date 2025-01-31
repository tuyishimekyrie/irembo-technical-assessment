import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import axios from 'axios'; // Import axios for making HTTP requests

import BusinessDetails from "./components/BusinessDetails";
import BusinessOwner from "./components/BusinessOwner";
import ProductInformation from "./components/ProductInformation";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const permitSchema = z.object({
  businessOwner: z.object({
    national: z.string().min(1, "Citizenship is required"),
    id: z.string().min(5, "ID is required"),
    surname: z.string().min(2, "Surname is required"),
    province: z.string().min(1, "Province is required"),
  }),
  businessDetails: z.object({
    name: z.string().min(1, "Business name is required"),
    type: z.string().min(1, "Business type is required"),
  }),
  productInformation: z.object({
    purposeOfImportation: z.string().min(1, "Purpose is required"),
    productCategory: z.string().min(1, "Product category is required"),
    weight: z.number().min(1, "Weight must be at least 1kg"),
    unitOfMeasurement: z.string().min(1, "Unit is required"),
    quantity: z.number().min(1, "Quantity must be at least 1"),
    productDescription: z.string().min(5, "Description is required"),
  }),
});

const Permit = () => {
  const methods = useForm({
    resolver: zodResolver(permitSchema),
    defaultValues: {
      businessOwner: {
        national: "",
        id: "",
        surname: "",
        province: "",
      },
      businessDetails: {
        name: "",
        type: "",
      },
      productInformation: {
        productName: "",
        quantity: 1,
      },
    },
  });

  const onSubmit = async (data) => {
    try {
      // Send form data to the backend API
      const response = await axios.post('http://localhost:8080/api/permits', data);

      // Handle successful submission
      console.log("Response from backend:", response.data);
      alert("Permit created and email sent successfully!");
    } catch (error) {
      // Handle error
      console.error("Error submitting the form:", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="p-4 flex flex-col items-center justify-center">
        <h1 className="text-2xl text-blue-600 text-center">
          Rica - Import Permit
        </h1>
        <div className="p-4">
          <form
            className="flex flex-col items-center space-y-4"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <BusinessOwner />
            <BusinessDetails />
            <ProductInformation />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 w-48 rounded-md mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default Permit;
