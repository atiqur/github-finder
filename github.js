class GitHub {
  constructor() {
    this.client_id = "433e0850a9efadb5d321"
    this.client_secret = "06f30f06e3804ab3a4615eca4a6822d1a00cb879"
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    )

    const profile = await profileResponse.json()

    return {
      profile,
    }
  }
}
