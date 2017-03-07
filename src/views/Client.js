import React, {Component} from 'react';
import WizardStep from '../components/wizard/wizard-step';
import WizardForm from '../components/wizard/wizard-form';
import WizardImages from '../components/wizard/wizard-images';
import '../../public/styles/wizard.css'
export default class Client extends Component {
    constructor() {
        super();
        this.state = {
            currentStep: 1
        }
    }
    render() {
        return (
            <div className="wizard-container">
                <div className="left-container">
                    <div className="container">
                        <div className="row">
                            <h1 className="title">
                                Do you have
                                <b>
                                    &nbsp;idea&nbsp;
                                </b>
                                for your next project ?
                            </h1>
                            <h4 className="sub-title">
                                Tell us about it, we are glad to listen and will provide you with a
                                <b>
                                    &nbsp;feedback
                                </b>
                            </h4>
                        </div>
                        <div className="row">
                            <WizardStep currentStep={this.state.currentStep}/>
                        </div>
                    </div>
                    <div className="row">
                        <WizardForm currentStep={this.state.currentStep}/>
                    </div>
                </div>
                <div className="right-container">
                    <WizardImages currentStep={this.state.currentStep}/>
                </div>
                <div className="clear"/>
            </div>
        )
    }
}
