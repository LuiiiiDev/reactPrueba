import React from "react";

function Toggle() {
  return (
    <div>
        <br />
      <p class="d-inline-flex gap-1">
        <button type="button" class="btn" data-bs-toggle="button">
          Toggle button
        </button>
        <button
          type="button"
          class="btn active"
          data-bs-toggle="button"
          aria-pressed="true"
        >
          Active toggle button
        </button>
        <button type="button" class="btn" disabled data-bs-toggle="button">
          Disabled toggle button
        </button>
      </p>
      <p class="d-inline-flex gap-1">
        <button type="button" class="btn btn-primary" data-bs-toggle="button">
          Toggle button
        </button>
        <button
          type="button"
          class="btn btn-primary active"
          data-bs-toggle="button"
          aria-pressed="true"
        >
          Active toggle button
        </button>
        <button
          type="button"
          class="btn btn-primary"
          disabled
          data-bs-toggle="button"
        >
          Disabled toggle button
        </button>
      </p>
    </div>
  );
}

export default Toggle;
