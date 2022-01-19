window.addEventListener('DOMContentLoaded', (event) => {
	// check if the page is repo page
	if (document.querySelector("#command-palette-pjax-meta-data").getAttribute('data-subject-type') == 'Repository') {

		// hold junk element to prevent destroy existing events of the old elements
		let junkElement = document.createElement("div");

		// Create the tab
		const tabs = document.querySelector("#repo-content-pjax-container get-repo ul");
		junkElement.innerHTML = `
		<li role="presentation" data-view-component="true" class="hx_tabnav-in-dropdown-wrapper flex-1 d-inline-flex">
			<button data-tab="vscode" data-action="click:get-repo#vscodeTabSelected focusin:get-repo#vscodeTabSelected" id="vscode-tab" type="button" role="tab" aria-controls="vscode-panel" aria-selected="false" data-view-component="true" class="tabnav-tab flex-1" tabindex="-1">
				<span data-view-component="true">VS Code</span>
			</button>
		</li>`;
		tabs.appendChild(junkElement.firstElementChild);

		// Create the container
		const tabContainer = document.querySelector("#repo-content-pjax-container get-repo feature-callout tab-container");
		junkElement.innerHTML = `
		<div id="vscode-panel" role="tabpanel" tabindex="0" aria-labelledby="vscode-tab" data-view-component="true">
			<ul class="list-style-none">
				<li class="Box-row Box-row--hover-gray p-3 mt-0">
					<a class="d-flex flex-items-center color-fg-default text-bold no-underline" rel="nofollow"
						id="open_with_vscode_opt_1"
						href="#">
						Read on VS Code
					</a>
				</li>
				<li class="Box-row Box-row--hover-gray p-3 mt-0">
					<a class="d-flex flex-items-center color-fg-default text-bold no-underline" rel="nofollow"
						id="open_with_vscode_opt_2"
						href="#">
						Clone to docker with Remote Containers
					</a>
				</li>
				<li class="Box-row Box-row--hover-gray p-3 mt-0">
					<a class="d-flex flex-items-center color-fg-default text-bold no-underline" rel="nofollow"
						id="open_with_vscode_opt_3"
						href="#">
						Read on Browser
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
});