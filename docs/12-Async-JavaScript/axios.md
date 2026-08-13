# Axios

> Section: Asynchronous JavaScript · Owner: **Shubham Narware**

## Definition
Axios is a popular third-party, Promise-based HTTP client library for the browser and Node.js, offering a more convenient API than raw `fetch()`.

## History
Released around **2014**, Axios grew popular before `fetch()` was widely supported, and remained popular afterward due to features `fetch()` lacks natively (automatic JSON parsing, request/response interceptors, easy timeouts).

## Why Axios Matters
It automatically transforms JSON, throws on HTTP error statuses (unlike `fetch()`), supports request cancellation, and provides interceptors for global request/response handling.

## Syntax
```js
axios.get(url)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

## Types (common methods)
| Method | Purpose |
|---|---|
| `axios.get(url)` | Fetch data |
| `axios.post(url, data)` | Send data |
| `axios.put(url, data)` | Replace data |
| `axios.delete(url)` | Remove data |
| `axios.create(config)` | Create a pre-configured instance |

## Examples
```js
axios.get("https://api.example.com/users")
  .then(res => console.log(res.data));
```

## Memory Diagram
```
axios.get(url) ──► Promise<AxiosResponse>
                        │
                 response.data ──► already-parsed JSON
```

## Flowchart
```
axios.get/post(url, config)
        │
Request interceptor(s) run
        │
Request sent
        │
Response received
        │
Status 2xx? ──No──► Promise rejects (goes to .catch)
        │
       Yes
        │
Response interceptor(s) run ──► .then(response.data)
```

## Internal Working
Internally, Axios wraps either `XMLHttpRequest` (in browsers) or Node's `http`/`https` modules, adding a consistent Promise-based API, automatic JSON transformation, and an interceptor pipeline on top.

## Beginner Example
```js
axios.get("https://api.example.com/data")
  .then(response => console.log(response.data));
```

## Intermediate Example
```js
async function createUser(user) {
  const response = await axios.post("https://api.example.com/users", user);
  return response.data;
}
```

## Advanced Example
```js
const api = axios.create({
  baseURL: "https://api.example.com",
  timeout: 5000,
});

api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${getToken()}`;
  return config;
});
```

## Real World Example
```js
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) redirectToLogin();
    return Promise.reject(error);
  }
);
```

## Industry Example
```js
// Many large-scale React/Vue apps use a single "axios instance"
// with baseURL + auth interceptors shared across the entire codebase.
```

## Interview Questions
See full list → [interview.md](./interview.md#axios)
1. What are the main advantages of Axios over the native `fetch()` API?
2. Does Axios reject its Promise on a 404 response? How does this differ from `fetch()`?
3. What are interceptors, and why are they useful?
4. How do you set a global timeout for all requests made through an Axios instance?
5. How would you cancel an in-flight Axios request?

## MCQs
See full list → [mcq.md](./mcq.md#axios)
1. Unlike `fetch()`, Axios: (a) Cannot send POST requests (b) **Rejects the Promise on HTTP error status codes** (c) Only works in Node.js (d) Cannot set headers → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#axios)
1. **(Easy)** Make a GET request with Axios and log `response.data`.
2. **(Medium)** Create an Axios instance with a `baseURL` and a default timeout.
3. **(Hard)** Add a request interceptor that attaches an auth token to every outgoing request.

## Assignments
- [ ] Compare, with code, how error handling differs between `fetch()` and Axios for a 404 response.
- [ ] Create an Axios instance with both a request and a response interceptor.

## Mini Project
Build a small "Post Viewer": use an Axios instance with a `baseURL` pointing to a public API, list posts, and handle loading/error states.

## Common Mistakes
- Assuming Axios and `fetch()` handle errors the same way.
- Not re-using `axios.create()` instances, leading to repeated base URL/header configuration.
- Forgetting `error.response` may be `undefined` for network errors (no response received at all).

## Best Practices
- Create a single configured Axios instance per app/service rather than calling the global `axios` object everywhere.
- Centralize auth and error handling in interceptors.

## Optimization Tips
- Use Axios's built-in `cancelToken`/`AbortController` support to cancel stale requests (e.g., outdated search queries).

## Summary
Axios is a widely-used HTTP client built on top of `XMLHttpRequest`/Node's `http`, offering automatic JSON parsing, error rejection on bad status codes, and a powerful interceptor system that native `fetch()` doesn't provide out of the box.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#axios)

---
[← Fetch](./fetch.md) | [Section Home](./README.md) | [Ajax →](./ajax.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
