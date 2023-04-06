class Github {
  // Get user by name
  getUser(name) {
    return new Promise((resolve, reject) => {
      fetch(`https://api.github.com/users/${name}`)
      .then(res=>res.json())
      .then(user => resolve(user))
      .catch(error => reject(error))
    });
  }
}
