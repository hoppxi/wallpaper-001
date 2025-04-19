// src/utils/ajax.ts
async function ajaxFetch(options) {
  const config = {
    method: options.method,
    headers: options.headers,
    body: options.method !== "GET" ? formatDataForFetch(options.data, options.headers) : void 0,
    signal: options.abortSignal
  };
  try {
    const response = await fetch(options.url, config);
    const responseBody = await handleFetchResponse(
      response,
      options.responseType
    );
    if (options.success) options.success(responseBody);
  } catch (error) {
    handleError(options, error);
  }
}
function ajaxXHR(options) {
  const xhr = new XMLHttpRequest();
  xhr.open(options.method, options.url, true);
  if (options.headers) {
    for (const [key, value] of Object.entries(options.headers)) {
      xhr.setRequestHeader(key, value);
    }
  }
  if (options.responseType) {
    xhr.responseType = options.responseType;
  }
  if (options.timeout) {
    xhr.timeout = options.timeout;
  }
  if (options.onProgress) {
    xhr.onprogress = (event) => {
      options.onProgress(event.loaded, event.total);
    };
  }
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      if (options.success) {
        const response = options.responseType === "json" ? xhr.response : xhr.responseText;
        options.success(response);
      }
    } else {
      handleError(
        options,
        `Request failed with status ${xhr.status}: ${xhr.statusText}`
      );
    }
  };
  xhr.onerror = function() {
    handleError(options, "Request failed due to network error.");
  };
  xhr.ontimeout = function() {
    handleError(options, `Request timed out after ${xhr.timeout}ms`);
  };
  retryRequest(xhr, options);
  const requestData = formatDataForXHR(options.data, options.headers);
  xhr.send(requestData);
}
async function handleFetchResponse(response, responseType) {
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  switch (responseType) {
    case "json":
      return await response.json();
    case "blob":
      return await response.blob();
    case "arraybuffer":
      return await response.arrayBuffer();
    default:
      return await response.text();
  }
}
function formatDataForFetch(data, headers) {
  if (data && typeof data === "object" && !(data instanceof FormData)) {
    if (headers && headers["Content-Type"] === "application/json") {
      return JSON.stringify(data);
    }
  }
  return data;
}
function handleError(options, error) {
  if (options.error) {
    options.error(error);
  } else {
    console.error(error);
  }
}
function retryRequest(xhr, options, attempt = 1) {
  xhr.onloadend = () => {
    if (xhr.status >= 400 && attempt <= (options.retries || 1)) {
      setTimeout(() => {
        console.warn(
          `Retrying request... (${attempt}/${options.retries})`
        );
        ajaxXHR({ ...options, retries: options.retries - 1 });
      }, options.retryDelay || 1e3);
    }
  };
}
function formatDataForXHR(data, headers) {
  if (data && typeof data === "object" && !(data instanceof FormData)) {
    if (headers && headers["Content-Type"] === "application/json") {
      return JSON.stringify(data);
    }
  }
  return data;
}

// src/core/request.ts
function ajax(options) {
  if (options.useFetch) {
    return ajaxFetch(options);
  } else {
    return ajaxXHR(options);
  }
}
function get(url, data = {}, options = {}) {
  const queryString = Object.entries(data).map(
    ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
  ).join("&");
  const fullUrl = queryString ? `${url}?${queryString}` : url;
  return ajax({
    method: "GET",
    url: fullUrl,
    ...options
  });
}
function post(url, data, options = {}) {
  return ajax({
    method: "POST",
    url,
    data,
    headers: { "Content-Type": "application/json" },
    ...options
  });
}
function put(url, data, options = {}) {
  return ajax({
    method: "PUT",
    url,
    data,
    headers: { "Content-Type": "application/json" },
    ...options
  });
}
function patch(url, data, options = {}) {
  return ajax({
    method: "PATCH",
    url,
    data,
    headers: { "Content-Type": "application/json" },
    ...options
  });
}
function deleteRequest(url, data = {}, options = {}) {
  const queryString = Object.entries(data).map(
    ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
  ).join("&");
  const fullUrl = queryString ? `${url}?${queryString}` : url;
  return ajax({
    method: "DELETE",
    url: fullUrl,
    ...options
  });
}

// src/modules/request.ts
var Request = {
  ajax,
  get,
  patch,
  post,
  put,
  deleteRequest
};
var request_default = Request;
export {
  ajax,
  request_default as default,
  deleteRequest,
  get,
  patch,
  post,
  put
};
