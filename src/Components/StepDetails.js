import React from 'react';
import { useState } from 'react';
import { Step, Stepper } from 'react-form-stepper';
import Account from './Steps/Account';

const StepDetails = () => {
    const [goSteps, setGoSteps] = useState(0);
    return (
        <div className='my-16'>
            <Stepper activeStep={goSteps}>
                <Step onClick={() => setGoSteps(0)} />
                <Step onClick={() => setGoSteps(1)} label="Workspace" />
                <Step onClick={() => setGoSteps(2)} label="Choose plan" />
                <Step onClick={() => setGoSteps(3)} label="Complete" />
            </Stepper>
            {goSteps === 0 && (
                <div>
                    <Account setGoSteps={setGoSteps} />
                </div>
            )}
        </div>
    );
};

export default StepDetails;