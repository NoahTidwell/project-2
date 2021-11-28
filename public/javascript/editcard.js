async function editFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const comments = document.querySelector("#comments").value;
  const url = document.querySelector("#url").value.trim();
  const street = document.querySelector("#street").value.trim();
  const city = document.querySelector("#city").value.trim();
  const state = document.querySelector("#state").value.trim();
  const zipcode = document.querySelector("#zipcode").value.trim();
  const min = document.querySelector("#min").value.trim();
  const max = document.querySelector("#max").value.trim();
  
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/venues/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      name,
      comments,
      url,
      street,
      city,
      state,
      zipcode,
      min,
      max,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
