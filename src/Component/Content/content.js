import { $ } from '../../Utils';

export default function Content(containerId, object) {
  const container = $(containerId);
  const keys = Object.keys(object);

  console.log(object);

  const renderObj = (item) => {
    const itemType = typeof item;

    const returnArrayItems = (arr) => {
      const elements = arr.map((i) => `<span>${i}</span>`);
      return elements.join('');
    };

    const returnObjectItems = (obj) => {
      const objKeys = Object.keys(obj);
      const map = objKeys.map(
        (i) => `<p><span>${i}</span> - <small>${obj[i]}</small><p>`
      );
      return map.join('');
    };

    const items = {
      string: item,
      object: Array.isArray(item) ? returnArrayItems(item) : returnObjectItems(item),
    };

    return items[itemType];
  };

  const content = keys.map(
    (item) => `
        <div>
            <strong>${item}: </strong> <span>${renderObj(object[item])}</span>
        </div>

    `
  );

  container.innerHTML += content.join('');
}
