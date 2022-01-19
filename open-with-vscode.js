var oldTitle = document.title;

var bodyList = document.querySelector("body")

var observer = new MutationObserver(function (mutations) {
	mutations.forEach(function (mutation) {
		if (oldTitle != document.title) {
			oldTitle = document.title;

			main();
		}
	});
});

var config = {
	childList: true,
	subtree: true
};

observer.observe(bodyList, config);

function main() {
	// check if the page is repo page
	if (document.querySelector("#repo-content-pjax-container")) {

		// hold junk element to prevent destroy existing events of the old elements
		let junkElement = document.createElement("div");

		// check if its the main
		if (document.querySelector("#repo-content-pjax-container get-repo  details  summary")?.textContent.includes("Code")) {

			// Create the tab
			const tabs = document.querySelector("#repo-content-pjax-container get-repo feature-callout tab-container ul");
			if (tabs) {
				junkElement.innerHTML = `
		<li role="presentation" data-view-component="true" class="hx_tabnav-in-dropdown-wrapper flex-1 d-inline-flex">
			<button data-tab="vscode" data-action="click:get-repo#vscodeTabSelected focusin:get-repo#vscodeTabSelected" id="vscode-tab" type="button" role="tab" aria-controls="vscode-panel" aria-selected="false" data-view-component="true" class="tabnav-tab flex-1" tabindex="-1">
				<span data-view-component="true">VS Code</span>
			</button>
		</li>`;
				tabs.appendChild(junkElement.firstElementChild);
			}

			// Create the container
			const tabContainer = tabs ? document.querySelector("#repo-content-pjax-container get-repo feature-callout tab-container") : document.querySelector("#repo-content-pjax-container get-repo details ul");
			junkElement.innerHTML = `
		<div id="vscode-panel" role="tabpanel" tabindex="0" aria-labelledby="vscode-tab" data-view-component="true">
			<ul class="list-style-none">
				<li class="Box-row Box-row--hover-gray p-3 mt-0">
					<a class="d-flex flex-items-center color-fg-default text-bold no-underline" rel="nofollow"
						id="open_with_vscode_opt_1"
						href="#">
						Open with VS Code
					</a>
				</li>
				<li class="Box-row Box-row--hover-gray p-3 mt-0">
					<a class="d-flex flex-items-center color-fg-default text-bold no-underline" rel="nofollow"
						id="open_with_vscode_opt_2"
						href="#">
						Clone to docker (Remote Containers)
					</a>
				</li>
				<li class="Box-row Box-row--hover-gray p-3 mt-0">
					<a class="d-flex flex-items-center color-fg-default text-bold no-underline" rel="nofollow"
						id="open_with_vscode_opt_3"
						href="#">
						Open with VSCode.dev (browser)
					</a>
				</li>
			</ul>
		</div>`;
			tabContainer.appendChild(junkElement.firstElementChild);



			// Listen for clicks
			document.querySelector("#open_with_vscode_opt_1").addEventListener("click", () => {
				window.location.href = `vscode://github.remotehub/open?url%3D${location.href}`
			});
			document.querySelector("#open_with_vscode_opt_2").addEventListener("click", () => {
				window.location.href = `vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=${location.href}`
			});
			document.querySelector("#open_with_vscode_opt_3").addEventListener("click", () => {
				window.location.href = `https://vscode.dev/${location.href}`
			});
		}

		// check if its the content page
		if (document.querySelector("#repo-content-pjax-container > div > div > a")?.text.includes("Go to file")) {
			const contentOptions = document.querySelector("#repo-content-pjax-container > div > div");
			junkElement.innerHTML = `
		<a href="#" style="margin-left:8px" id="open_with_vscode_opt_1_1" class="js-pjax-capture-input btn mr-2 d-none d-md-block" data-pjax="" data-hotkey="t">
				Open with VS Code
		</a>
		`
			contentOptions.appendChild(junkElement.firstElementChild);

			junkElement.innerHTML = `
		<a href="#" id="open_with_vscode_opt_3_1" class="js-pjax-capture-input btn mr-2 d-none d-md-block" data-pjax="" data-hotkey="t">
				Open with VSCode.dev (browser)
		</a>
		`
			contentOptions.appendChild(junkElement.firstElementChild);

			// Listen for clicks
			document.querySelector("#open_with_vscode_opt_1_1").addEventListener("click", () => {
				window.location.href = `vscode://github.remotehub/open?url%3D${location.href}`
			});

			document.querySelector("#open_with_vscode_opt_3_1").addEventListener("click", () => {
				window.location.href = `https://vscode.dev/${location.href}`
			});
		}
	}
}
main();