import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// const navigate = useNavigate();

function generateRandomColor() {
  const colors = [
    "#FF5733",
    "#C70039",
    "#900C3F",
    "#581845",
    "#FFC300",
    "#9ec754",
    "#1287A5",
    "#FF5733",
    "#C70039",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function getUserInitials(name) {
  const words = name.split(" ");
  const initials = words
    .filter((word) => word.length > 0)
    .map((word) => word[0].toUpperCase())
    .slice(0, 2)
    .join("");
  return initials;
}

function uploadImage(imageData) {
  const url = `https://api.cloudinary.com/v1_1/dedukuyxr/image/upload`;

  const formData = new FormData();
  formData.append("file", imageData);
  formData.append("upload_preset", "chat-app");
  formData.append("cloud_name", "dedukuyxr");

  return axios
    .post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data.secure_url)
    .catch((error) => {
      console.error("Error uploading image to Cloudinary:", error);
      return "";
    });
}

export const generateUserProfileImage = async (formData) => {
  const initials = getUserInitials(formData.name);
  const bgColor = generateRandomColor();

  const generateAndUploadImage = async () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 50;
    canvas.height = 50;
    context.fillStyle = bgColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = "22px Arial";
    context.fillStyle = "#FFFFFF";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(initials, canvas.width / 2, canvas.height / 2);

    const imageData = canvas.toDataURL("image/png");
    console.log(imageData);
    const uploadedImageUrl = await uploadImage(imageData);
    if (uploadedImageUrl) {
      try {
        const imageUrl = {
          image: uploadedImageUrl,
        };
        const { data } = await axios.post(
          "http://localhost:5000/api/user/signup",
          { formData, imageUrl },
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        );

        toast.success("You've successfully signed up!");
        localStorage.setItem("chitchatUserInfo", JSON.stringify(data));
        // navigate("/chats");
        window.location.href = "/chats";
        console.log(formData);
      } catch (error) {
        toast.error("Sign up failed!");
      }
    }

    // axios
    //   .put(
    //     "http://localhost:5000/api/user/update-image",
    //     {
    //       imageUrl: uploadedImageUrl,
    //       email: email,
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     return uploadedImageUrl;
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  generateAndUploadImage();
};

// export default generateUserProfileImage;
