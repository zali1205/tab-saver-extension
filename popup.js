const tabs = await chrome.tabs.query({});

const tabTemplate = document.getElementById("li_template");
const windowTemplate = document.getElementById("ul_template")
const elements = new Set();
for (const tab of tabs) {
    let windowElement = document.getElementById(tab.windowId)
    if (!windowElement) {
        windowElement = windowTemplate.content.firstElementChild.cloneNode(true);
        console.log(windowElement)
        windowElement.querySelector("ul").id = tab.windowId
        document.getElementById("current_windows").insertAdjacentElement('afterend', windowElement);
    }

    const tabElement = tabTemplate.content.firstElementChild.cloneNode(true);

    console.log(tab)

    const title = tab.title.trim();
    const pathname = new URL(tab.url);

    tabElement.querySelector(".title").textContent = title;
    tabElement.querySelector(".pathname").textContent = pathname;
    windowElement.append(tabElement);
}
