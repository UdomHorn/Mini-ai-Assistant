Below is a **development TODO checklist** derived from your specification.
Each task includes **acceptance criteria** so you can verify when the feature is complete.

---

# Mini AI Assistant – Implementation TODO List

## 1. Project Setup

### Task

Initialize the project structure for frontend and backend.

### Subtasks

* Initialize Node.js project
* Install dependencies
* Create project folder structure
* Configure environment variables

### Dependencies

* express
* openai
* dotenv
* cors
* marked
* highlight.js

### Acceptance Criteria

* Project runs locally using `npm start`
* `.env` file loads correctly
* Express server starts without errors
* Required dependencies installed

✅

---

# 2. Backend API Setup

## Task

Create an Express server with an API route to communicate with OpenAI.

### Subtasks

* Create Express server
* Configure middleware
* Create `/api/generate` route
* Handle POST request
* Validate prompt length

### Acceptance Criteria

* Server responds on `/api/generate`
* POST request accepts JSON body `{prompt: "..."}`
* Request rejected if prompt > 1000 characters
* API returns response JSON
* Errors return proper status codes

Example expected response:

```json
{
  "response": "AI generated text"
}
```

✅

---

# 3. OpenAI API Integration

## Task

Connect backend route to OpenAI GPT-4o-mini.

### Subtasks

* Import OpenAI SDK
* Load API key from `.env`
* Send user prompt to OpenAI
* Receive generated text
* Return result to frontend

### Acceptance Criteria

* OpenAI API key stored only in `.env`
* API request successfully returns AI text
* Backend logs errors if API fails
* Response time under ~5 seconds

✅

---

# 4. Basic Frontend Layout

## Task

Create the main UI layout similar to a chat interface.

### Subtasks

* Create chat container
* Create message list area
* Create input field
* Create submit button
* Create clear chat button
* Create dark mode toggle

### Acceptance Criteria

* Page loads without errors
* Chat interface visible
* Input field accepts text
* Buttons visible and clickable
* Layout responsive on desktop

✅

---

# 5. Prompt Input Handling

## Task

Allow users to submit prompts using Enter key or button.

### Subtasks

* Detect Enter key press
* Prevent newline on Enter
* Trigger submit function
* Add click event for submit button

### Acceptance Criteria

* Pressing Enter submits prompt
* Clicking button submits prompt
* Empty prompts are rejected
* Input clears after submission

✅

---

# 6. Send Prompt to Backend

## Task

Send user prompt from frontend to backend API.

### Subtasks

* Use `fetch()` or `axios`
* Send POST request to `/api/generate`
* Send prompt in JSON format
* Await response

### Acceptance Criteria

* Prompt successfully reaches backend
* API response returned to frontend
* Network errors handled gracefully

✅

---

# 7. Display Chat Messages

## Task

Render user prompts and AI responses in chat interface.

### Subtasks

* Add user message to chat
* Add AI response to chat
* Scroll chat automatically to latest message

### Acceptance Criteria

* User messages appear immediately
* AI messages appear after response
* Messages displayed in correct order
* Chat auto-scrolls to bottom

✅

---

# 8. Markdown Rendering

## Task

Render AI output as formatted Markdown.

### Subtasks

* Install Markdown parser (marked.js)
* Parse response text
* Insert parsed HTML into chat message

### Acceptance Criteria

* Markdown headings render correctly
* Lists render properly
* Bold and italic text formatted
* Tables display correctly

Example rendered Markdown:

```
# Example Title
- item
- item
```

✅

---

# 9. Syntax Highlighting

## Task

Enable syntax highlighting for code blocks.

### Subtasks

* Install highlight.js
* Apply highlighting after rendering markdown

### Acceptance Criteria

* Code blocks visually highlighted
* Common languages supported
* Code formatting preserved

Example:

```javascript
function hello() {
  console.log("Hello world");
}
```

✅

---

# 10. Loading Indicator

## Task

Show loading indicator while waiting for AI response.

### Subtasks

* Display loading message
* Remove loading after response received

### Acceptance Criteria

* Loading indicator appears after prompt submission
* Indicator disappears after response
* UI does not freeze during loading

✅

---

# 11. Conversation History

## Task

Store and display conversation history during session.

### Subtasks

* Maintain chat messages in client state
* Append new messages to history

### Acceptance Criteria

* Previous messages remain visible
* New prompts append to history
* Page refresh resets conversation

✅

---

# 12. Clear Chat Feature

## Task

Allow user to clear the conversation.

### Subtasks

* Add clear chat button
* Remove all chat messages

### Acceptance Criteria

* Clicking button removes all messages
* Chat interface resets to empty state
* Input field remains usable

✅

---

# 13. Copy Response Button

## Task

Allow users to copy AI responses.

### Subtasks

* Add copy button to each AI message
* Copy message text to clipboard

### Acceptance Criteria

* Clicking copy button copies response text
* Clipboard contains correct text
* Visual feedback confirms copy

✅

---

# 14. Dark Mode

## Task

Add dark mode toggle.

### Subtasks

* Create toggle switch
* Add dark mode CSS styles
* Store theme preference

### Acceptance Criteria

* Toggle switches theme
* Dark mode styles applied correctly
* Theme persists during session

✅

---

# 15. Error Handling

## Task

Handle frontend and backend errors.

### Subtasks

* Display error message for API failures
* Handle network errors
* Handle invalid input

### Acceptance Criteria

* User sees clear error messages
* App does not crash on failure
* Errors logged in backend

✅

---

# 16. Deployment

## Task

Deploy application to Vercel.

### Subtasks

* Push project to GitHub
* Connect repository to Vercel
* Configure environment variables
* Deploy serverless API

### Acceptance Criteria

* Application accessible via public URL
* API works in deployed environment
* `.env` variables configured in Vercel
* Chat feature works in production

---

# Optional Stretch Goals

These are **extra features if you have time**:

* Streaming responses
* Export chat as Markdown
* Token usage display
* Mobile layout improvements
* Prompt templates

---

✅ If you want, I can also generate a **much better version for development**:

**A full developer task board like this:**

* Epic
* Feature
* Task
* Subtask
* Acceptance Criteria

Basically a **Jira / Agile style breakdown**, which makes the project **much easier to implement step-by-step.**
