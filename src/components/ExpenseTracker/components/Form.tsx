//import { useRef, useState, type SubmitEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../Categories";

const schema = z.object({
  description: z.string().min(1, { message: "Description is required." }),
  amount: z
    .number({ message: "Amount is required" })
    .min(1, { message: "Amount must be greater than 0" }),
  category: z.enum(categories, { message: "Category is required" }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FormData) => void;
}

function Form({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger"> {errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger"> {errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          className="form-select"
          name="category"
          id="category"
        >
          <option value="" disabled>
            Select category
          </option>
          {categories.map((c) => (
            <option value={c} key={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      {errors.category && (
        <p className="text-danger"> {errors.category.message}</p>
      )}
      <button disabled={!isValid} className="btn btn-dark mb-3" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
