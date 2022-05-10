import "./index.css";

function renderList(id, color = "white") {
  const list = document.getElementById(id);

  let svgColor = "white";
  if (id == "primary") {
    svgColor = "primary";
  }

  let template = `
  <li class="flex items-center mt-6">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mr-4 stroke-current text-${svgColor}"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
    >
        <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
    </svg>
    items bla bla bla
  </li>
`;

  let htmlStr = "";

  for (let i = 0; i < 5; i++) {
    htmlStr += template;
  }

  list.innerHTML = htmlStr;
}

renderList("list1");
renderList("list2", "primary");
renderList("list3");

function modalHandler() {
  const login = document.getElementById("login");
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("closeBtn");

  login.addEventListener("click", () => {
    modal.classList.remove("opacity-0", "pointer-events-none");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("opacity-0", "pointer-events-none");
  });
}

modalHandler();
