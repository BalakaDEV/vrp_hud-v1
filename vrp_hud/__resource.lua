resource_manifest_version "44febabe-d386-4d18-afbe-5e627f4af937"

ui_page_preload "yes"
ui_page "ui/index.html"

client_scripts {
	"@vrp/lib/utils.lua",
	"client.lua"
}

files {
	"ui/app.js",
	"ui/index.html",
	"ui/style.css",
	"ui/images/logo.png",
	"ui/images/armour.png",
	"ui/images/health.png",
	"ui/images/hunger.png",
	"ui/images/thirst.png"
}