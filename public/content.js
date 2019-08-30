const ENTRIES_STORAGE_LOCATION = 'entries'

chrome.storage.sync.get([ENTRIES_STORAGE_LOCATION], function(result) {
  const entries = result[ENTRIES_STORAGE_LOCATION]
  if (entries) {
    document.querySelectorAll('.srg a').forEach(node => {
      entries.some(entry => {
        if (node.href.includes(entry)) {
          node.parentElement.parentElement.style.display = 'none' // Todo: find a better way to do this
        }
      })
    })
  }
})