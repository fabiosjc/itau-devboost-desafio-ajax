import { $ } from '../../Utils';

export default function (containerId, { id, fields, event }) {
  const container = $(containerId);

  const formFields = fields.map(
    (field) =>
      `<div>
          <label>${field.name}</label>
          <input type="${field.type}" name="${field.name}" placeholder="${
        field.placeholder
      }" ${field.required ? 'required' : ''}></input>
        </div>`
  );

  const formElement = `
        <form id="${id}">
            ${formFields.join('')}
            <button type="submit">Submit</button>
        </form>
    `;

  container.innerHTML += formElement;

  this.init = function () {
    let form = $(`#${id}`);
    return form.addEventListener('submit', event);
  };
}
