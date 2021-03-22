// MW-Notification Banner
document.addEventListener('DOMContentLoaded', async function () {
  // Article label to be considered for the alerts
  const label = 'alert'

  // Show the article body within the alertbox? (Boolean: true/false)
  const showArticleBody = true

  // Get current help center locale
  const locale = document
    .querySelector('html')
    .getAttribute('lang')
    .toLowerCase()

  // URL to be called to get the alert data
  const url = `/api/v2/help_center/${locale}/articles.json?label_names=${label}`

  // Raw data collected from the endpoint above
  const data = await (await fetch(url)).json()

  // List of articles returned
  const articles = (data && data.articles) || []

  // Handle returned articles
  for (let i = 0; i < articles.length; i++) {
    const url = articles[i].html_url
    const title = articles[i].title
    const body = articles[i].body

    const html = `
      <div class="ns-box ns-bar ns-effect-slidetop ns-type-notice ns-show">
        <div class="ns-box-inner">
          <span class="megaphone"></span>
          <p>
            <a href="${url}">${title}</a>
            ${showArticleBody ? body : ''}
          </p>
        </div>
        <span class="ns-close"></span>
      </div>
    `

    // Append current alert to the alertbox container
    document.querySelector('.alertbox').insertAdjacentHTML('beforeend', html)
  }
})

document.addEventListener('click', function (event) {
  // Close alertbox
  if (event.target.matches('.ns-close')) {
    event.preventDefault()
    event.target.parentElement.remove()
  }
})
