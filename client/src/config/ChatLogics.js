export const getSender = (loggedUser, users) => {
  return users[0]._id === loggedUser?.data?._id ? users[1].name : users[0].name;
};

export const getSenderImage = (loggedUser, users) => {
  return users[0]._id === loggedUser?.data?._id
    ? users[1].image
    : users[0].image;
};
