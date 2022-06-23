fetch("projectList.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (products) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let product of products) {
      out += `
         <tr class="${product.bgColor} border-b">
            <td class="text-lg font-medium text-gray-900 px-6 py-4 text-left hover:text-teal-600">${product.index}</td>
            <td class="text-lg font-medium text-gray-900 px-6 py-4 text-left"><a href="${product.urlLive}" target="_blank">${product.name}</a></td>
            <td class="text-lg font-medium text-gray-900 px-6 py-4 text-left"><a href="${product.urlCode}" target="_blank">${product.codeBase}</a></td>
         </tr>
      `;
    }

    placeholder.innerHTML = out;
  });
