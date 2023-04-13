class UI {
  constructor() {
    this.profile = document.getElementById("profile");
    this.searchContainer = document.querySelector(".searchContainer");
  }

  // Show profile
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-1">
      <div class="row">
        <div class="col-md-2">
          <img src="${user.avatar_url}" class="img-fluid mb-2" alt="Profile image" />
          <a href="${user.html_url}" target=”_blank” class="btn btn-primary btn-block my-2">Go to Profile</a>
        </div>
        <div class="col-md-10">
          <div class="user-info-header mb-3">
            <span class="badge my-1 badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge my-1 badge-success">Public Gits: ${user.public_gists}</span>
            <span class="badge my-1 badge-info">Followers: ${user.followers}</span>
            <span class="badge my-1 badge-warning">Following: ${user.following}</span>
          </div>
          <ul class="list-group mb-3">
            <li class="list-group-item">Company: ${user.company ? user.company : "N/A"}</li>
            <li class="list-group-item">Website/Blog: ${user.blog ? user.blog : "N/A"}</li>
            <li class="list-group-item">Member since ${user.created_at ? user.created_at : "N/A"}</li>
            <li class="list-group-item">Location: ${user.location ? user.location : "N/A"}</li>
            <li class="list-group-item">Email: ${user.email ? `<a href="mailto:${user.email}">${user.email}</a>` : "N/A"}</li>
            <li class="list-group-item">Twitter: ${user.email ? `<a href="https://twitter.com/${user.twitter_username}">${user.twitter_username}</a>` : "N/A"}</li>
          </ul>
        </div>
      </div>
    </div>
    ${user.bio ? `
    <div class="card card-body mb-3">
      <h6 class="page-heading mb-3">Profile description:</h6>
      <p>${user.bio}</p>
    </div>`
    : ""}
    `;
  }

  // If no user found
  showAlert(message = "", className = "alert-danger") {
    // clear any alert
    this.clearAlert();

    const alert = `<div class="text-white px-2 py-1 rounded ${className}">${message}</div>`;

    this.searchContainer.insertAdjacentHTML("beforeend", alert);

    setTimeout(() => this.clearAlert(), 2000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert-danger");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }
}
