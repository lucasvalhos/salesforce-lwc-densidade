import { LightningElement, track, wire} from 'lwc';

import obterDensidade from '@salesforce/apex/ObterDensidadeController.obterDensidade';

export default class QualquerCoisa extends LightningElement {
   
  // options
  options = [
    {
      Id: '1',
      Name: 'Test 1',
      OutroCampo: 'info'
    },
    {
      Id: '2',
      Name: 'Test 2',
      OutroCampo: 'info'
    },
    {
      Id: '3',
      Name: 'Test 3',
      OutroCampo: 'info'
    }
  ];
  get options() {
    return this.options.map((t) => {
      return {
        label: t.Name,
        value: t.Id
      }
    });
  };
  
  @track css;
  @wire(obterDensidade)
  obterDensidadeCb(result){
    if(typeof result.data !== "undefined"){
      switch(result.data) {
        case 'ViewTwo':
          this.css = 'slds-form-element slds-form-element_horizontal';
          break;
        default:
          break;
      }
    }
  }
}