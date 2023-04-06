class Github {
  constructor() {
    this.client_id = "129ac25b4cfbae4f4483";
    this.client_secret = "2597ce91ff94a71088ee1f8ea230a357a8e9e36e";

  }

  // Get user by name
  getUser(name) {
    return new Promise((resolve, reject) => {
      fetch(`https://api.github.com/users/${name}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
      .then(res=>res.json())
      .then(user => resolve(user))
      .catch(error => reject(error))
    });
  }
}
