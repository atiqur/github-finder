// Search input
const searchUser = document.getElementById("searchUser")

const github = new GitHub()

// Search input event listner
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value
  if (userText !== "") {
    // github.getUser(userText).then((data) => console.log(data))
    if (DataTransfer.profile.message === "Not Found") {
      // Show alert
    } else {
      // Show profile
    }
  } else {
    // Clear profile
  }
})
