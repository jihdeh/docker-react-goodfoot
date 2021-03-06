import getStaticCached from "./get-static-cached";

export default function renderPage(title, appMarkup, appSrc) {
	if (!appSrc) throw new Error("missing appSrc");

  const styleSrc = "/style.css";
  const cachedStyleSrc = getStaticCached(styleSrc) || styleSrc;

  return `<!DOCTYPE html>
			<html>
				<head>
					<meta charset="utf-8">
					<meta http-equiv="X-UA-Compatible" content="IE=edge">
					<meta name="viewport" content="width=device-width, initial-scale=1">
					<meta name="description" content="">
					<meta name="author" content="">
					<title>${title || "Good Foot"}</title>

					<link rel="stylesheet" href="${cachedStyleSrc}">
				</head>
				<body>
					<div id="root">${appMarkup || ""}</div>
					<script type="text/javascript">
						function downloadJSAtOnload() {
							const element = document.createElement("script");
							element.src = "${appSrc}";
							document.body.appendChild(element);
						}
						if (window.addEventListener) {
							window.addEventListener("load", downloadJSAtOnload, false);
						}	else if (window.attachEvent) {
							window.attachEvent("onload", downloadJSAtOnload);
						} else {
							window.onload = downloadJSAtOnload;
						}
					</script>
				</body>
			</html>`;
}
