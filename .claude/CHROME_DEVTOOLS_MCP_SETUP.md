# Chrome DevTools MCP Server Setup Guide

## ✅ Installation Complete!

The Chrome DevTools MCP server has been configured in `.claude/mcp_config.json`

---

## 🚀 How to Use

### Step 1: Restart Claude Code
**IMPORTANT:** You must restart Claude Code for it to pick up the new MCP server.

1. Close this Claude Code session completely
2. Reopen Claude Code in this directory
3. Claude Code will now have access to Chrome DevTools MCP tools

---

### Step 2: Launch Chrome with Remote Debugging

For the MCP server to work, Chrome must be running with remote debugging enabled:

**Windows:**
```bash
"C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222
```

**Mac:**
```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
```

**Linux:**
```bash
google-chrome --remote-debugging-port=9222
```

---

### Step 3: Verify MCP Server is Running

After restarting Claude Code, you can verify the Chrome DevTools MCP is available by asking Claude to:

- "List available MCP tools"
- "Connect to Chrome DevTools"
- "Take a screenshot of the current page"

---

## 🛠️ Available Chrome DevTools MCP Tools

Once connected, Claude Code can:

1. **Navigate** - Go to URLs in Chrome
2. **Screenshot** - Capture page screenshots
3. **Click** - Click elements on the page
4. **Fill** - Fill out forms
5. **Evaluate** - Execute JavaScript in the browser
6. **Monitor** - Watch network requests, console logs
7. **Performance** - Analyze page performance

---

## 💡 Example Usage

After restarting Claude Code and launching Chrome with remote debugging:

**Example 1: Test Your WasteWise Demo**
```
"Navigate to http://localhost:5179 and take a screenshot of the homepage"
```

**Example 2: Check for JavaScript Errors**
```
"Navigate to http://localhost:5179 and check the console for any errors"
```

**Example 3: Test Navigation**
```
"Navigate to http://localhost:5179, click on the Contract Demo tab, and take a screenshot"
```

**Example 4: Verify Color Changes**
```
"Navigate to http://localhost:5179, inspect the active navigation tab, and tell me what color it is"
```

---

## 🔧 Troubleshooting

### MCP Server Not Found
- Make sure you've **restarted Claude Code** completely
- Check that `.claude/mcp_config.json` exists in your project

### Can't Connect to Chrome
- Make sure Chrome is running with `--remote-debugging-port=9222`
- Only one Chrome instance can use remote debugging at a time
- Close other Chrome instances before launching with debugging

### Permission Issues
- The MCP server uses `npx` to run `chrome-devtools-mcp@latest`
- Make sure you have Node.js and npm installed
- The package will be downloaded automatically on first use

---

## 📚 Documentation

Full Chrome DevTools MCP documentation:
https://developer.chrome.com/blog/chrome-devtools-mcp

---

## 🎯 Use Case for WasteWise Demo

Perfect for:
- ✅ **Visual regression testing** - Screenshot before/after changes
- ✅ **Cache debugging** - See what's actually loading in the browser
- ✅ **Color verification** - Check if electric blue is rendering correctly
- ✅ **Animation testing** - Verify step animations are working
- ✅ **Console debugging** - Check for JavaScript errors
- ✅ **Network monitoring** - See what assets are loading

---

**Next Step:** Restart Claude Code and try: "Navigate to localhost:5179 and take a screenshot"
