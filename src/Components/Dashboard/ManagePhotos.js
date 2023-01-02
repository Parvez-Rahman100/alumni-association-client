import { success } from "daisyui/src/colors";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import usePhotos from "../../hooks/usePhotos";

const ManagePhotos = () => {
  const imgStorageKey = "bad38deab47996eefced5e1ff3248e47";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [photos] = usePhotos();

  const onSubmit = (data) => {
    const image = data.photo[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgStorageKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const users = {
            photoUrl: img,
          };
          fetch("https://alumni-association-server-56nn.vercel.app/photos", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(users),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (success) {
                toast.success("Photo Successfully Uploaded");
              } else {
                toast.error("Failed to upload your photo");
              }
            });
        }
      });
  };

  return (
    <div className=" my-12 ">
      <h1 className=" text-3xl font-bold">Upload Image and Manage Image</h1>
      <div className=" flex justify-center items-center my-9">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex items-center ">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white">Upload Your Image</span>
              </label>
              <input
                className="input input-bordered text-black w-full max-w-xs rounded-lg"
                placeholder="Your Reg Number"
                type="file"
                {...register("photo", {
                  required: {
                    value: true,
                    message: "Photo must be Required",
                  },
                  validate: {
                    lessThan10MB: (files) =>
                      files[0]?.size < 10000000 || "Max 10MB",
                    acceptedFormats: (files) =>
                      ["image/jpeg", "image/png", "image/gif"].includes(
                        files[0]?.type
                      ) || "Only PNG, JPEG e GIF",
                  },
                })}
              />
              <label className="label">
                {errors.photo?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.photo.message}
                  </span>
                )}
              </label>
            </div>
            <div className=" mt-9 mx-5">
              <input className=" btn btn-outline mb-5" type="submit" />
            </div>
          </div>
        </form>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>
                <label>Serial No</label>
              </th>
              <th>PhotoUrl</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {photos?.map((photo, index) => (
              <tr key={photo?._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <img
                        className=" rounded-xl"
                        style={{ width: "150px", height: "100px" }}
                        src={photo?.photoUrl}
                        alt="Tejgaon College Pic"
                      />
                    </div>
                  </div>
                </td>
                <th>
                  <button className="btn mx-3 btn-error btn-xs">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePhotos;
