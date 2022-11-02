// Search input
const searchUser = document.getElementById("searchUser")

const github = new GitHub()
const ui = new UI()

// Search input event listner
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value
  if (userText !== "") {
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show alert
        ui.showAlert("User Not Found", "alert alert-danger")
      } else {
        // Show profile
        ui.showProfile(data.profile)
      }
    })
  } else {
    // Clear Profile
    ui.clearProfile()
  }
})
