import { AwesomeForm } from './Component/Form';
import { Content } from './Component/Content';

const cepAPI = 'https://api.postmon.com.br/v1/cep';

const cepFormOptions = {
  id: 'cepForm',
  fields: [
    {
      id: 'input-cep',
      type: 'text',
      name: 'cep',
      placeholder: 'Digite o cep',
      required: true,
    },
  ],
  event: function (evt) {
    evt.preventDefault();
    const value = this.cep.value;
    return !value
      ? console.log('cep vazio')
      : fetch(`${cepAPI}/${value}`)
          .then((resp) => resp.json())
          .then((resp) => Content('#cep-component', resp));
  },
};

const cepForm = new AwesomeForm('#cep-component', cepFormOptions);

cepForm.init();
