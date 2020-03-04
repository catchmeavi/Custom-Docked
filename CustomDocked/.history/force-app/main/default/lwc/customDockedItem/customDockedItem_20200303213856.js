import {
    LightningElement,
    track,
    api
} from 'lwc';
export default class customDockedItem extends LightningElement {
    @track minimze = false;
    @track isOpenedDoced = true;
    togglemini() {
        this.minimze = true;
        this.template.querySelector('.open_model').classList.remove('slds-is-open');
        this.template.querySelector('.open_model').classList.add('slds-is-close');
    }

    toggleMax() {
        this.minimze = false;
        this.template.querySelector('.open_model').classList.remove('slds-is-close');
        this.template.querySelector('.open_model').classList.add('slds-is-open');
    }

    closeDock() {
        this.isOpenedDoced = false;
    }


}