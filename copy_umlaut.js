function updateCheckbox() {
  var top_checkbox = document.getElementById("top-box");
  var bottom_checkbox = document.getElementById("bottom-box");
  var left_checkbox = document.getElementById("left-box");
  var right_checkbox = document.getElementById("right-box");
  if (top_checkbox.checked || bottom_checkbox.checked) {
    left_checkbox.disabled = true;
    right_checkbox.disabled = true;
  } else if (left_checkbox.checked || right_checkbox.checked) {
    top_checkbox.disabled = true;
    bottom_checkbox.disabled = true;
  } else {
    left_checkbox.disabled = false;
    right_checkbox.disabled = false;
    top_checkbox.disabled = false;
    bottom_checkbox.disabled = false;
  }
}

function initCheckbox(checkboxId, titlebar_name, titlebar_icon_url, titlebar_text) {
  var elem = document.getElementById(checkboxId);
  if (!elem)
    return;
  elem.onclick = function() {
    if (document.getElementById(checkboxId).checked)
      addTitlebar(titlebar_name, titlebar_icon_url, titlebar_text);
    else
      removeTitlebar(titlebar_name);
    focusTitlebars(true);

    updateContentStyle();
    updateCheckbox();
  }
}

window.onfocus = function() {
  console.log("focus");
  focusTitlebars(true);
}

window.onblur = function() {
  console.log("blur");
  focusTitlebars(false);
}

window.onresize = function() {
  updateContentStyle();
}

window.onload = function() {
  initCheckbox("top-box", "top-titlebar", "top-titlebar.png", "Top Titlebar");
  initCheckbox("bottom-box", "bottom-titlebar", "bottom-titlebar.png", "Bottom Titlebar");
  initCheckbox("left-box", "left-titlebar", "left-titlebar.png", "Left Titlebar");
  initCheckbox("right-box", "right-titlebar", "right-titlebar.png", "Right Titlebar");

  const {remote} = require('electron');
  const {BrowserWindow} = remote;
  const win = BrowserWindow.getFocusedWindow();

  document.getElementById("umlaut-ae").onclick = function() {
    const {clipboard} = require('electron')
    clipboard.writeText(unescape("%E4"))
  }

  document.getElementById("umlaut-ae-cap").onclick = function() {
    const {clipboard} = require('electron')
    clipboard.writeText(unescape("%C4"))
  }

  document.getElementById("umlaut-oe").onclick = function() {
    const {clipboard} = require('electron')
    clipboard.writeText(unescape("%F6"))
  }

  document.getElementById("umlaut-oe-cap").onclick = function() {
    const {clipboard} = require('electron')
    clipboard.writeText(unescape("%D6"))
  }

  document.getElementById("umlaut-ue").onclick = function() {
    const {clipboard} = require('electron')
    clipboard.writeText(unescape("%FC"))
  }

  document.getElementById("umlaut-ue-cap").onclick = function() {
    const {clipboard} = require('electron')
    clipboard.writeText(unescape("%DC"))
  }

  document.getElementById("umlaut-sz").onclick = function() {
    const {clipboard} = require('electron')
    clipboard.writeText(unescape("%DF"))
  }

  document.getElementById("umlaut-euro").onclick = function() {
    const {clipboard} = require('electron')
    clipboard.writeText(unescape("%u20AC"))
  }

  updateContentStyle();
}
