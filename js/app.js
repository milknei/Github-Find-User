const github = new Github();
const ui = new UI();

const searchInput = document.getElementById("searchUser");

searchInput.onkeyup = (e) => {
  const inputText = e.target.value;

  if (inputText !== "") {
    github.getUser(inputText).then((user) => {
      if (user.message === "Not Found") {
        ui.showAlert(`User: ${inputText} not found`, "alert-danger");
        ui.clearProfile();
      } else {
        ui.showProfile(user);
        ui.clearAlert();
      }
      return user;
    });
  } else {
    ui.clearProfile();
  }
};
