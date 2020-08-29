import { AwesomeForm } from './Component/Form';

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
          .then((resp) => {
            console.log(resp);
          });
  },
};

const cepForm = new AwesomeForm('#cep-component', cepFormOptions);

cepForm.init();
