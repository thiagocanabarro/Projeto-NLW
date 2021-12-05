const LinksSocialMedia = {
  github: 'thiagocanabarro',
  youtube: '',
  facebook: 'thiagocanabarro',
  instagram: 'thiagocanabarro',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      UserName.textContent = data.name
      UserBio.textContent = data.bio
      UserLink.href = data.html_url
      UserImage.src = data.avatar_url
      UserLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
