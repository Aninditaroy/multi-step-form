import React from 'react';
import { useState } from 'react';
import { Step, Stepper } from 'react-form-stepper';
import Account from './Steps/Account';
import Workspace from './Steps/Workspace';
import ChoosePlan from './Steps/ChoosePlan';
import Complete from './Steps/Complete';

const StepDetails = () => {
    const [goSteps, setGoSteps] = useState(0);
    return (
        <div className='my-16'>
            <Stepper activeStep={goSteps} connectorStateColors='#664de5 !important'>
                <Step onClick={() => setGoSteps(0)} />
                <Step onClick={() => setGoSteps(1)} />
                <Step onClick={() => setGoSteps(2)} />
                <Step onClick={() => setGoSteps(3)} />
            </Stepper>
            {goSteps === 0 && (
                <div>
                    <Account setGoSteps={setGoSteps} />
                </div>
            )}
            {goSteps === 1 && (
                <div>
                    <Workspace setGoSteps={setGoSteps} />
                </div>
            )}
            {goSteps === 2 && (
                <div>
                    <ChoosePlan setGoSteps={setGoSteps} />
                </div>
            )}
            {goSteps === 3 && (
                <div>
                    <Complete setGoSteps={setGoSteps} />
                </div>
            )}
        </div>
    );
};

export default StepDetails;